from app import services
from datetime import date
import pytest

def test_add_expense(test_db):
    expense = services.add_expense(test_db, amount=10.0, category="food", expense_date=date(2024, 1, 1))
    assert expense.amount == 10.0
    assert expense.category == "Food"  # Note the capitalization
    assert expense.date == date(2024, 1, 1)

def test_get_dashboard_data(test_db):
    # Add some expenses to the test database
    from app.models import Expense
    test_db.add(Expense(amount=10.0, category="Food", date=date(2024, 1, 1)))
    test_db.add(Expense(amount=20.0, category="Transport", date=date(2024, 1, 2)))
    test_db.commit()

    dashboard_data = services.get_dashboard_data(test_db, month=1, year=2024)
    
    assert "chart_data" in dashboard_data
    assert "total_expenses" in dashboard_data
    
    assert len(dashboard_data["chart_data"]) == 2
    assert dashboard_data["total_expenses"] == 30.0
    
    categories = [item["category"] for item in dashboard_data["chart_data"]]
    assert "Food" in categories
    assert "Transport" in categories

    amounts = [item["amount"] for item in dashboard_data["chart_data"]]
    assert 10.0 in amounts
    assert 20.0 in amounts

def test_add_expense_invalid_category(test_db):

    with pytest.raises(ValueError, match="Invalid category"):
        services.add_expense(test_db, amount=10.0, category="invalid_category", expense_date=date(2024, 1, 1))

def test_add_expense_negative_amount(test_db):

    with pytest.raises(ValueError, match="Amount must be positive"):
        services.add_expense(test_db, amount=-10.0, category="Food", expense_date=date(2024, 1, 1))
