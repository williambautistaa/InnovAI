from fastapi.testclient import TestClient
from app.main import app
from datetime import date, datetime
from decimal import Decimal
from math import isclose
from app.models import Expense
from app.database import SessionLocal

client = TestClient(app)

def test_add_expense():
    response = client.post(
        "/add/",
        json={"amount": 10.0, "category": "Food", "date": str(date.today())}
    )
    assert response.status_code == 200
    assert "expense_id" in response.json()

def test_add_expense_invalid_data():
    response = client.post(
        "/add/",
        json={"amount": -10.0, "category": "food", "date": str(date.today())}
    )
    assert response.status_code == 422  # Unprocessable Entity

def test_add_expense_invalid_category():
    response = client.post(
        "/add/",
        json={"amount": 10.0, "category": "invalid_category", "date": str(date.today())}
    )
    assert response.status_code == 422  # Unprocessable Entity
    assert "category" in response.json()["detail"][0]["loc"]

def test_add_expense_invalid_date():
    response = client.post(
        "/add/",
        json={"amount": 10.0, "category": "Food", "date": "invalid-date"}
    )
    assert response.status_code == 422  # Unprocessable Entity
    assert "date" in response.json()["detail"][0]["loc"]

def test_get_dashboard():
    # Clear the database first
    db = SessionLocal()
    db.query(Expense).delete()
    db.commit()

    # Add test data
    client.post("/add/", json={"amount": 10.50, "category": "Food", "date": "2024-01-01"})
    client.post("/add/", json={"amount": 20.75, "category": "Transport", "date": "2024-01-02"})
    client.post("/add/", json={"amount": 30.25, "category": "Food", "date": "2024-02-01"})

    # Test with specific month and year
    response = client.get("/dashboard/?month=1&year=2024")
    assert response.status_code == 200
    data = response.json()
    assert Decimal(data["total_expenses"]) == Decimal('31.25')
    assert len(data["chart_data"]) == 2
    assert data["month"] == 1
    assert data["year"] == 2024

    # Verify the content of the chart data
    chart_data = data["chart_data"]
    assert any(item["category"] == "Food" and Decimal(item["amount"]) == Decimal('10.50') for item in chart_data)
    assert any(item["category"] == "Transport" and Decimal(item["amount"]) == Decimal('20.75') for item in chart_data)

    # Test with another month
    response = client.get("/dashboard/?month=2&year=2024")
    assert response.status_code == 200
    data = response.json()
    assert Decimal(data["total_expenses"]) == Decimal('30.25')
    assert len(data["chart_data"]) == 1
    assert data["month"] == 2
    assert data["year"] == 2024

    # Test with invalid month
    response = client.get("/dashboard/?month=13&year=2024")
    assert response.status_code == 422

    # Test with invalid year
    response = client.get("/dashboard/?month=1&year=1999")
    assert response.status_code == 422

    # Clean up
    db.query(Expense).delete()
    db.commit()
    db.close()

def test_get_dashboard_empty_category():
    # Test when a month has expenses but a specific category has no expenses
    db = SessionLocal()
    db.query(Expense).delete()
    db.commit()
    
    client.post("/add/", json={"amount": 10.0, "category": "Food", "date": "2024-01-01"})
    
    response = client.get("/dashboard/?month=1&year=2024")
    data = response.json()
    
    # Verify that categories with no expenses don't appear in chart data
    assert all(item["category"] != "Transport" for item in data["chart_data"])

def test_get_dashboard_date_boundaries():
    db = SessionLocal()
    db.query(Expense).delete()
    db.commit()
    
    # Test expenses on first and last day of month
    client.post("/add/", json={"amount": 10.0, "category": "Food", "date": "2024-01-01"})
    client.post("/add/", json={"amount": 20.0, "category": "Food", "date": "2024-01-31"})
    
    response = client.get("/dashboard/?month=1&year=2024")
    data = response.json()
    assert data["total_expenses"] == 30.0  # Should include both expenses

def test_get_dashboard_decimal_precision():
    db = SessionLocal()
    db.query(Expense).delete()
    db.commit()

    client.post("/add/", json={"amount": 10.33, "category": "Food", "date": "2024-01-01"})
    client.post("/add/", json={"amount": 20.44, "category": "Food", "date": "2024-01-01"})

    response = client.get("/dashboard/?month=1&year=2024")
    data = response.json()
    print("\nResponse data:", data)  # Log the response data
    assert isclose(float(data["total_expenses"]), 30.77, rel_tol=1e-9, abs_tol=1e-9)  # Check approximate equality

def test_get_dashboard_missing_params():
    current_year = datetime.now().year
    current_month = datetime.now().month

    # Test with missing year (should use current year)
    response = client.get("/dashboard/?month=1")
    assert response.status_code == 200
    data = response.json()
    assert data["year"] == current_year
    assert data["month"] == 1

    # Test with missing month (should use current month)
    response = client.get("/dashboard/?year=2024")
    assert response.status_code == 200
    data = response.json()
    assert data["year"] == 2024
    assert data["month"] == current_month

    # Test with both month and year missing (should use current month and year)
    response = client.get("/dashboard/")
    assert response.status_code == 200
    data = response.json()
    assert data["year"] == current_year
    assert data["month"] == current_month

def test_get_dashboard_performance():
    db = SessionLocal()
    db.query(Expense).delete()
    db.commit()
    
    # Add 100 expenses
    for i in range(100):
        client.post("/add/", json={
            "amount": 10.0,
            "category": "Food" if i % 2 == 0 else "Transport",
            "date": "2024-01-01"
        })
    
    response = client.get("/dashboard/?month=1&year=2024")
    assert response.status_code == 200
    data = response.json()
    assert len(data["chart_data"]) == 2  # Should still group properly
