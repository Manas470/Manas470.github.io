from fastapi import APIRouter, HTTPException, Request
from datetime import datetime, timedelta
import logging
import hashlib
from models.analytics import VisitorLog, VisitorLogCreate, AnalyticsStats
from database import db

router = APIRouter(prefix="/analytics", tags=["analytics"])
logger = logging.getLogger(__name__)

def hash_ip(ip: str) -> str:
    """Hash IP address for privacy"""
    return hashlib.sha256(ip.encode()).hexdigest()

@router.post("/visit")
async def log_visit(visit_data: VisitorLogCreate, request: Request):
    """Log a page visit"""
    try:
        # Get client IP and hash it for privacy
        client_ip = request.client.host if request.client else "unknown"
        ip_hash = hash_ip(client_ip)
        
        # Create visitor log
        visitor_log = VisitorLog(
            page=visit_data.page,
            referrer=visit_data.referrer,
            user_agent=visit_data.user_agent,
            ip_hash=ip_hash
        )
        
        await db.visitor_logs.insert_one(visitor_log.dict())
        
        # Get total visit count
        total_visits = await db.visitor_logs.count_documents({})
        
        return {
            "success": True,
            "visitor_count": total_visits
        }
    except Exception as e:
        logger.error(f"Error logging visit: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to log visit")

@router.get("/stats", response_model=AnalyticsStats)
async def get_analytics_stats():
    """Get visitor statistics"""
    try:
        # Total visits
        total_visits = await db.visitor_logs.count_documents({})
        
        # Unique visitors (based on ip_hash)
        unique_visitors_pipeline = [
            {"$group": {"_id": "$ip_hash"}},
            {"$count": "unique_count"}
        ]
        unique_result = await db.visitor_logs.aggregate(unique_visitors_pipeline).to_list(1)
        unique_visitors = unique_result[0]["unique_count"] if unique_result else 0
        
        # Recent visits (last 7 days)
        seven_days_ago = datetime.utcnow() - timedelta(days=7)
        recent_visits = await db.visitor_logs.count_documents({
            "timestamp": {"$gte": seven_days_ago}
        })
        
        return AnalyticsStats(
            total_visits=total_visits,
            unique_visitors=unique_visitors,
            recent_visits=recent_visits
        )
    except Exception as e:
        logger.error(f"Error fetching analytics: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")