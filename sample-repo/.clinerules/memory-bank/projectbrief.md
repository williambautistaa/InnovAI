# Project Brief

## Project Name
Expense Tracker MVP

## Purpose
To build a simple, fast, and user-friendly expense tracking application that allows users to log expenses and view monthly summaries, with a modern web frontend and robust backend API.

## Core Requirements & Goals

- **Expense Logging:** Users can quickly add expenses with amount, category, and date.
- **Monthly Summary:** Users can view a breakdown of their monthly spending by category, including a simple chart visualization.
- **Modern Web Stack:** Frontend built with Vite + React, using Remix/React Router v7 for routing and navigation.
- **Backend API:** FastAPI backend with SQLite for data persistence, providing endpoints for adding expenses and retrieving summaries.
- **Dockerized Deployment:** Simple local deployment using Docker and Docker Compose for both frontend and backend.
- **MVP Focus:** Prioritize core features and fast iteration; advanced features (e.g., receipt scanning, multi-user) are out of scope.

## Source of Truth

This brief is based on the user stories in `docs/user_stories/user_sories_1.json`, which define the epics, tasks, and acceptance criteria for the MVP.

## High-Level Scope

- **Frontend:** 
  - React app with `/add` (expense form) and `/dashboard` (summary/chart) routes.
  - Basic form validation and toast notifications.
  - Simple charting for category breakdown.

- **Backend:**
  - FastAPI app with endpoints for adding expenses and retrieving monthly summaries.
  - SQLite database integration for persistent storage.

- **Deployment:**
  - Dockerfiles for both frontend and backend.
  - Docker Compose for unified local development.

## Out of Scope

- Advanced analytics, multi-user support, external integrations, and production-grade deployment.

## References

- User stories: `docs/user_stories/user_sories_1.json`
- Remix/React Router v7: https://remix.run/docs/en/main
