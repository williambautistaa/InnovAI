import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import models

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="session")
def test_db():
    from app.models import Base
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    yield db
    db.close()
    Base.metadata.drop_all(bind=engine)

@pytest.fixture(autouse=True)
def setup_test_db(test_db):
    # Clear the database before each test
    test_db.query(models.Expense).delete()
    test_db.commit()
    yield
    # Clear the database after each test
    test_db.query(models.Expense).delete()
    test_db.commit()
