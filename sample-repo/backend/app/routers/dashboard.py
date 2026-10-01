from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.services import get_dashboard_data
from datetime import datetime
from pydantic import BaseModel, conint, ValidationError

router = APIRouter()

class DashboardQueryParams(BaseModel):
    month: conint(ge=1, le=12) | None = None
    year: conint(ge=2000, le=2100) | None = None

@router.get("/")
async def get_dashboard(
    month: int | None = Query(None, description="Month (1-12)"),
    year: int | None = Query(None, description="Year (2000-2100)"),
    db: Session = Depends(get_db)
):
    now = datetime.now()
    month = month or now.month
    year = year or now.year

    try:
        query_params = DashboardQueryParams(month=month, year=year)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))
    
    return get_dashboard_data(db, query_params.month, query_params.year)
