# GitHub Dashboard

This is my **Task 1 project** – a GitHub Organization Dashboard built using **React + TypeScript**.

The idea of this project is simple:  
you type a GitHub organization name and it shows all the repositories of that organization in a clean UI.

---

## What this project does

- Search any GitHub organization (example: `google`, `vercel`, `microsoft`)
- Fetch repositories using the GitHub public API
- Show repo details like:
  - Repository name
  - Description
  - Stars ⭐
  - Forks 🍴
  - Last updated date
- Infinite scroll (loads more repos as you scroll)
- Sorting options:
  - By stars
  - By forks
  - By recent activity
- Handles empty states and errors (404, rate limit, etc.)
- Responsive UI (works on mobile and desktop)

---

## Tech Stack

### Frontend Framework & Build

- **Next.js 16.1.3** - React framework with built-in optimization
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Data & State Management

- **TanStack React Query 5.90.19** - Server state management and caching
- **React DOM 19.2.3** - DOM rendering library

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS transformation
- **Lucide React 0.562.0** - Icon library

### Data Visualization

- **Recharts 3.6.0** - Charting library for repository statistics

### Development Tools

- **ESLint 9** - Code linting
- **TypeScript 5** - Static type checking

---

## Why I built it this way

The focus of this task was:

- **Framework Choice**: Next.js provides built-in optimization, routing, and server-side capabilities
- **Type Safety**: TypeScript ensures code reliability and better developer experience
- **State Management**: TanStack React Query handles API data caching and synchronization efficiently
- **Styling**: Tailwind CSS provides rapid UI development with utility-first approach
- **Performance**: Next.js Turbopack compiler, optimized bundle size, and infinite scroll for better UX
- **Visualization**: Recharts displays repository statistics in an interactive chart format
- **Clean Architecture**: Component-based structure with proper separation of concerns
- **Error Handling**: Robust retry logic and error boundaries for API failures
- **Responsive Design**: Mobile-first approach ensures works across all devices

No unnecessary libraries, just core React concepts.

---
