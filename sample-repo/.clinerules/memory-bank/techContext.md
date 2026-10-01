# Tech Context

## Technologies Used

- **Frontend:**
  - Vite (build tool for fast React development)
  - React (UI library)
  - Shadcn (UI components)
  - Remix/React Router v7 (routing and navigation)
  - Chart.js or Recharts (for dashboard visualization)
  - Toast notification library (e.g., react-toastify)

- **Backend:**
  - FastAPI (Python web framework for REST APIs)
  - SQLAlchemy (ORM for database interactions)
  - SQLite (file-based database for persistent storage)
  - Pydantic (data validation)

## Development Setup

- **Frontend:**
  - Node.js and npm/yarn required
  - Vite project initialized with React template
  - Routing set up for `/add` and `/dashboard` using Remix/React Router v7
  - UI components styled with Shadcn
  - Charting library integrated for dashboard

- **Backend:**
  - [UV](https://docs.astral.sh/uv/) (required Python package and environment manager)
  - Python 3.x
  - FastAPI app structure with endpoints for `/add` (POST) and `/dashboard` (GET)
  - SQLAlchemy models and database session management
  - SQLite database file created and managed by SQLAlchemy
  - Pydantic models for request/response validation
  - Services layer for business logic

## Technical Constraints

- MVP scope: No advanced analytics, multi-user support, or external integrations
- SQLite chosen for simplicity and single-user focus
- All services must run locally via Docker Compose

## Dependencies

- See `package.json` (frontend) and `pyproject.toml` (backend) for full dependency lists
- All Python dependency management and virtual environments must be handled exclusively with [UV](https://docs.astral.sh/uv/).
- Remix/React Router v7 documentation: https://remix.run/docs/en/main

## Tool Usage Patterns

- Use Vite for fast local development and hot module reloading
- Use [UV](https://docs.astral.sh/uv/) for all Python dependency management, environment creation, and script/tool execution (see [installation instructions](https://docs.astral.sh/uv/#installation)).
- Use REST API for all frontend-backend communication
- Use toast notifications for user feedback on actions
- Separate business logic into services layer
- Use SQLAlchemy for all database operations

## References

- User stories: `docs/user_stories/user_sories_1.json`
- Remix/React Router v7: https://remix.run/docs/en/main
