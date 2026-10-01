from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import add, dashboard
from app.database import engine
from app.models import Base

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Create database tables
Base.metadata.create_all(bind=engine)

app.include_router(add.router, prefix="/add")
app.include_router(dashboard.router, prefix="/dashboard")

@app.get("/")
def read_root():
    return {"message": "Expense Tracker API is running"}
