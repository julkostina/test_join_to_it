# test_join_to_it

Calendar-style dashboard built with React, TypeScript, and Vite.

## Getting started

Install dependencies, then run the dev server:

```bash
yarn install
yarn dev
```

The app is served with Vite’s dev server (hot reload).

## Folder structure

```
├── public/                 # Static assets copied as-is (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Aside/          # Sidebar navigation
│   │   ├── Calendar/       # FullCalendar wrapper and styles
│   │   ├── ColorPicker/    # Color input (styled)
│   │   ├── EventModal/     # Event popover form and styles
│   │   └── Header/         # Top bar (search, actions, user)
│   ├── hooks/
│   │   └── useEvents.ts    # Event state + localStorage persistence
│   ├── theme/
│   │   └── colors.ts       # Shared palette tokens
│   ├── types/
│   │   └── events.ts       # Event model
│   ├── App.tsx             # Root layout
│   ├── App.styled.ts
│   ├── main.tsx            # React entry
│   └── index.css           # Global base styles
├── index.html              # Vite HTML entry
├── vite.config.ts
├── tsconfig*.json
└── eslint.config.js
```

## Features

- **Layout:** Header, sidebar, and main area with a calendar card matching a dashboard-style UI.
- **Calendar:** FullCalendar with month, week, day, and agenda views; navigation (today / prev / next).
- **Events:** Stored in the browser via `localStorage` (load/save through `useEvents`).
- **Create / edit:** Popover form for title, date, time, and notes; anchored to the selected day or the clicked event.
- **Display:** Events shown as blocks on the month grid; colors come from saved event data (default accent when none is set).
- **Interaction:** Drag-and-drop and resize on the calendar; long multi-day ranges from selection are normalized to a short duration when saving from the form.
- **Styling:** MUI components where helpful, Emotion/MUI `styled` and `styled-components` for layout and theme-aligned colors.
