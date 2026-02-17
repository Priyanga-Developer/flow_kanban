# 🚀 Flow Kanban Board

A simplified Kanban-style task management application built using React, TypeScript, and Tailwind CSS.

This project demonstrates structured state management, responsive UI design, and persistent local data storage without relying on external APIs.

---

## ✨ Features

- Three fixed workflow columns:
  - ✅ To Do
  - 🚧 In Progress
  - 🎯 Done

- Create tasks with title and description
- Move tasks between columns using action buttons
- Delete tasks
- Persistent data using localStorage
- Responsive layout (mobile + desktop)
- Empty state handling
- Clean UI with reusable components
- Type-safe models using TypeScript

---

## 🧱 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- useReducer (state management)
- Vite

---

## 🧠 Architecture Overview

### State Management

The application uses `useReducer` to manage task state. This provides:

- Predictable state transitions
- Clear action-driven updates
- Easy scalability for future features like drag-and-drop

Reducer logic is located in:
src/reducer/boardReducer.ts

### Data Model

Tasks follow a typed structure:
id
title
description
column

Types are defined in:
---

### Component Structure
src/components/

Header.tsx → Application header
Board.tsx → Main kanban layout
Column.tsx → Individual kanban columns
TaskCard.tsx → Task display card
AddTask.tsx → Task creation form
---

### Utilities
src/utils/storage.ts
Handles saving and loading board state using localStorage.

---

## 💾 Data Persistence

The application saves task state to `localStorage` so that:

- Board state remains after page refresh
- No backend/API required

---

## 🎨 UI Design Principles

- Utility-first styling with Tailwind CSS
- Responsive grid layout
- Accessible form inputs
- Consistent spacing and visual hierarchy

---

## 📦 Installation

Clone repository:git clone <YOUR_REPO_LINK>
Install dependencies:npm install
Run development server:npm run dev
---

## 🚀 Deployment

This project can be deployed using:

- Vercel
- Netlify
- Any static hosting platform

---

## 🔮 Possible Future Improvements

- Drag-and-drop support (dnd-kit / react-beautiful-dnd)
- Task editing functionality
- Animations for task transitions
- Dark mode support



