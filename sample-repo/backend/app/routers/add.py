from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field, field_validator
from datetime import date
from sqlalchemy.orm import Session
from app.database import get_db
from app.services import add_expense as service_add_expense
from app.models import EXPENSE_CATEGORIES

router = APIRouter()

class ExpenseCreate(BaseModel):
    amount: float = Field(..., gt=0)
    category: str = Field(..., max_length=50)
    date: date

    @field_validator('category')
    @classmethod
    def validate_category(cls, v: str) -> str:
        if v.capitalize() not in EXPENSE_CATEGORIES:
            raise ValueError(f"Invalid category. Must be one of: {', '.join(EXPENSE_CATEGORIES)}")
        return v.capitalize()

@router.post("/")
async def add_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    try:
        new_expense = service_add_expense(db, expense.amount, expense.category, expense.date)
        return {"message": "Expense added successfully", "expense_id": new_expense.id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to add expense: {str(e)}")
