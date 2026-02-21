from fastapi import APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from typing import List
import logging
from models.contact import ContactMessage, ContactMessageCreate
from database import db
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

router = APIRouter(prefix="/contact", tags=["contact"])
logger = logging.getLogger(__name__)

async def send_email_notification(contact_msg: ContactMessage):
    """Send email notification when contact form is submitted"""
    try:
        # Email configuration
        sender_email = os.environ.get('SENDER_EMAIL', 'noreply@portfolio.com')
        sender_password = os.environ.get('EMAIL_PASSWORD', '')
        receiver_email = "raghupatrunivenkatamanas@gmail.com"
        
        # Create message
        message = MIMEMultipart("alternative")
        message["Subject"] = f"New Contact Form Submission: {contact_msg.subject}"
        message["From"] = sender_email
        message["To"] = receiver_email
        
        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="margin: 20px 0;">
                <p><strong style="color: #555;">Name:</strong> {contact_msg.name}</p>
                <p><strong style="color: #555;">Email:</strong> {contact_msg.email}</p>
                <p><strong style="color: #555;">Subject:</strong> {contact_msg.subject}</p>
              </div>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong style="color: #555;">Message:</strong></p>
                <p style="white-space: pre-wrap;">{contact_msg.message}</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #999;">
                  Submitted on: {contact_msg.created_at.strftime('%B %d, %Y at %I:%M %p')}
                </p>
                <p style="font-size: 12px; color: #999;">
                  Reply to: <a href="mailto:{contact_msg.email}" style="color: #10b981;">{contact_msg.email}</a>
                </p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML content
        part = MIMEText(html, "html")
        message.attach(part)
        
        # Send email only if email password is configured
        if sender_password:
            # Use Gmail SMTP
            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(sender_email, sender_password)
                server.sendmail(sender_email, receiver_email, message.as_string())
            logger.info(f"Email notification sent for contact from {contact_msg.email}")
        else:
            logger.warning("Email password not configured. Skipping email notification.")
            
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        # Don't raise exception - we still want to save the message even if email fails

@router.post("/message", response_model=ContactMessage)
async def create_contact_message(message: ContactMessageCreate):
    """Save a contact form submission and send email notification"""
    try:
        contact_msg = ContactMessage(**message.dict())
        result = await db.contact_messages.insert_one(contact_msg.dict())
        
        logger.info(f"Contact message saved: {result.inserted_id}")
        
        # Send email notification (non-blocking)
        await send_email_notification(contact_msg)
        
        return contact_msg
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to save message")

@router.get("/messages", response_model=List[ContactMessage])
async def get_contact_messages(skip: int = 0, limit: int = 50):
    """Get all contact messages (admin endpoint)"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        return [ContactMessage(**msg) for msg in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")

@router.get("/messages/count")
async def get_messages_count():
    """Get total count of contact messages"""
    try:
        count = await db.contact_messages.count_documents({})
        unread_count = await db.contact_messages.count_documents({"read": False})
        return {
            "total": count,
            "unread": unread_count
        }
    except Exception as e:
        logger.error(f"Error counting messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to count messages")