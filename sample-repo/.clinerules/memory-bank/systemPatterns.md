# System Patterns

## System Architecture Overview

The Expense Tracker MVP is structured as a modern web application with a clear separation between frontend and backend, containerized for local development.

```mermaid
flowchart TD
    subgraph Frontend [Vite + React + Shadcn + Remix/React Router v7]
        FE[Expense Form (/add)]
        DASH[Dashboard (/dashboard)]
        ROUTER[Routing & Navigation]
        TOAST[Toast Notifications]
        CHART[Chart Visualization]
    end

    subgraph Backend [FastAPI]
        API[REST API Endpoints]
        ADD_EP[/add Endpoint]
        DASH_EP[/dashboard Endpoint]
        SERVICES[Services Layer]
    end

    subgraph Database [SQLAlchemy + SQLite]
        DB[SQLite Database]
        MODEL[Expense Model]
    end

    FE -- "POST expense" --> ADD_EP
    DASH -- "GET summary" --> DASH_EP
    ADD_EP -- "Call add_expense" --> SERVICES
    DASH_EP -- "Call get_summary" --> SERVICES
    SERVICES -- "Interact with DB" --> MODEL
    MODEL -- "Read/Write" --> DB
    ROUTER -- "Route to pages" --> FE
    ROUTER -- "Route to pages" --> DASH
    FE -- "Show toast" --> TOAST
    DASH -- "Show chart" --> CHART

    subgraph Deployment [Docker Compose]
        DOCKER[Dockerfiles & Compose]
    end

    Frontend -- "API calls" --> Backend
    Backend -- "Served via Docker" --> Deployment
    Frontend -- "Served via Docker" --> Deployment
```

## Key Technical Decisions

- **Frontend:** Built with Vite for fast development, React for UI, and Remix/React Router v7 for routing.
- **Backend:** FastAPI provides RESTful endpoints for expense logging and summary retrieval.
- **Database:** SQLAlchemy ORM with DeclarativeBase is used with SQLite for lightweight, file-based persistence.
- **Services Layer:** Business logic is separated into a services layer.
- **Deployment:** Docker and Docker Compose are used for unified local development and easy startup.

## Design Patterns

- **REST API:** Backend exposes `/add` (POST) and `/dashboard` (GET) endpoints.
- **React Routing:** `/add` for expense entry, `/dashboard` for monthly summary.
- **Form Validation:** Basic validation on both frontend (React) and backend (FastAPI/Pydantic).
- **Feedback Loop:** Toast notifications for user actions.
- **Charting:** Simple chart library (e.g., Chart.js, Recharts) for dashboard visualization.
- **ORM:** SQLAlchemy with DeclarativeBase is used for database operations and model definitions.
- **Services Layer:** Business logic is separated into service functions.

## Component Relationships

- **Frontend** interacts with **Backend** via REST API.
- **Backend** uses **Services Layer** for business logic.
- **Services Layer** interacts with **Database** via SQLAlchemy ORM.
- **Docker Compose** orchestrates all services for local development.

## Critical Implementation Paths

1. User submits expense via `/add` form → POST to `/add` endpoint → Backend routes to service function → Service validates and stores in database via SQLAlchemy.
2. User visits `/dashboard` → GET to `/dashboard` endpoint → Backend routes to service function → Service retrieves and aggregates data via SQLAlchemy → Frontend displays summary and chart.

## References

- User stories: `docs/user_stories/user_sories_1.json`
- Remix/React Router v7: https://remix.run/docs/en/main
