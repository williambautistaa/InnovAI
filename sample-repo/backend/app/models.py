from sqlalchemy import Column, Integer, Float, String, Date
from .database import Base

EXPENSE_CATEGORIES = ["Food", "Transport", "Utilities", "Other"]

class Expense(Base):
    __tablename__ = 'expenses'

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float, nullable=False)
    category = Column(String, nullable=False)
    date = Column(Date, nullable=False)
