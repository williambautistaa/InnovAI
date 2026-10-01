# Expense Tracker MVP

## CODA Playground - Note about this repository

This is a **demonstration project designed to showcase testing and development workflows using CODA tooling**. The initial codebase was generated through a combination of AI-assisted development tools.

It's by no means perfect (many things might be missing) and, of course, we encourage you to improve it and find bugs using CODA!

There are some _challenges_ that you can run in order to play with different CODA tools:

- There is a [second interview](./docs/interviews/2_meeting_with_customer.pdf) that wasn't processed with PDA. Try to use it to extract a new set of features
- Try to implement one of the _newly requested_ features. You can also try to implement something that you want.
- Some tests are not passing because of an intentional bug introduced. Try to use codefixer with _[this ticket reported by QA](./.codefixer/tickets/ticket1/ticket.txt)_
- Use magnifai to generate new test cases or review the existing ones. Try to generate frontend tests.

### Tools setup

- **Remember that you will need to configure the tools using your own API keys for each project**.
    - One way to do so, is to keep a separate `.vscode` directory for each project.
    - This isolation allows you to use different Cline API keys for different projects without conflicts
    - Consider reading [open.sh](open.sh) for reference.
- Cline, Magnifai or CodeFixer is not installed by default, you will need to install it manually, we recommend you to use it's CLI version.
- PDA is a web based tool so you should be able to directly use it from your browser.

## Project Description
A minimal yet powerful expense tracking solution that enables quick logging of daily expenses and provides clear monthly spending insights. Designed for simplicity and speed, focusing exclusively on core functionality without feature bloat.

## Features
- 🚀 Instant expense logging with amount, category, and date
- 📊 Monthly summary dashboard with category breakdown
- 📈 Interactive pie chart visualization
- ✅ Frontend form validation with instant feedback
- 🔄 Automatic dashboard updates on new entries
- 💾 SQLite database for persistent local storage

## Tech Stack
**Frontend**  
✅ Vite + React  
✅ Remix/React Router v7  
✅ Shadcn UI Components (@shadcn/ui v0.0.4)

**Backend**  
✅ FastAPI (v0.115.12+)
✅ SQLAlchemy (v2.0.40+)
✅ Pydantic (v2.11.3+)
✅ UV (Python package manager)
✅ pytest (v8.3.5+)
✅ uvicorn (v0.34.1+)

## Getting Started

### Prerequisites
- Node.js v18+ 
- Python 3.11+
- UV (`curl -LsSf https://astral.sh/uv/install.sh | sh`)

### Backend Setup
```bash
cd backend
uv venv .venv
source .venv/bin/activate
uv pip install -r pyproject.toml
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Running Tests
```bash
# Backend tests (from project root)
cd backend
uv run pytest test
```

## Environment Variables
No environment variables required - SQLite database path is configured in `backend/app/database.py`

## Project Structure
```
expense-tracker/
├── backend/
│   ├── app/
│   │   ├── routers/       # API endpoints
│   │   │   ├── add.py     # Expense creation endpoint
│   │   │   └── dashboard.py # Summary data endpoint
│   │   ├── models/        # Database models
│   │   ├── services/      # Business logic layer
│   │   ├── database.py    # DB connection setup
│   │   └── main.py        # FastAPI app initialization
│   └── tests/             # All backend tests
│       ├── test_api.py    # API endpoint tests
│       └── test_services.py # Service layer tests
└── frontend/
    ├── src/
    │   ├── routes/        # React Router pages
    │   │   ├── AddExpense.jsx # Expense form
    │   │   └── Dashboard.jsx  # Summary dashboard
    │   ├── components/    # Reusable components
    │   │   ├── ExpenseChart.jsx # Pie chart component
    │   │   └── MonthlyExpenseSummary.jsx # Stats display
    │   └── api.ts         # API client configuration
    └── public/            # Static assets
```
