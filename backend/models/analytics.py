from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional
import uuid
import hashlib

class VisitorLog(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    page: str
    referrer: Optional[str] = None
    user_agent: Optional[str] = None
    ip_hash: Optional[str] = None

class VisitorLogCreate(BaseModel):
    page: str
    referrer: Optional[str] = None
    user_agent: Optional[str] = None

class AnalyticsStats(BaseModel):
    total_visits: int
    unique_visitors: int
    recent_visits: int