# Active Context

## Current Work Focus

- Implementing initial endpoints and UI skeletons for the Expense Tracker MVP.
- Connecting frontend and backend for expense logging and dashboard features.

## Recent Changes

- Scaffolded frontend (Vite + React + Remix/React Router v7) with `/add` and `/dashboard` routes.
- Scaffolded backend (FastAPI + SQLite) with placeholder `/add` and `/dashboard` endpoints.
- Installed and configured required dependencies for both frontend and backend.
- Created and populated core memory bank files:
  - `projectbrief.md` (project goals, scope, and references)
  - `productContext.md` (user needs, UX goals, MVP focus)
  - `systemPatterns.md` (architecture, patterns, component relationships)
  - `techContext.md` (stack, setup, constraints, dependencies)

## Next Steps

- Implement expense logging form and API integration.
- Develop monthly summary dashboard with chart visualization.
- Add toast notifications for user feedback.

## Active Decisions & Considerations

- MVP scope is strictly enforced: only core features (expense logging, summary, chart, toast notifications).
- Use Shadcn for UI components and Chart.js or Recharts for dashboard visualization.
- Maintain clear separation between frontend and backend.
- Use RESTful API design for communication.
- Prioritize speed, simplicity, and reliability in both UX and technical implementation.

## Important Patterns & Learnings

- Maintain clear separation between frontend and backend.
- Use RESTful API design for communication.
- Prioritize speed, simplicity, and reliability in both UX and technical implementation.

## References

- User stories: `docs/user_stories/user_sories_1.json`
- Remix/React Router v7: https://remix.run/docs/en/main
