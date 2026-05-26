# Geometry Summer Prep

A Next.js study app for 9th grade summer geometry prep — lessons, practice, worksheets, and progress tracking.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Browser `localStorage` for progress (client-side)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Project structure

```
app/                    # App Router pages
components/             # UI components
  diagrams/             # SVG geometry diagrams
  worksheets/           # Worksheet-related components
  progress/             # Progress display components
data/                   # Static data & navigation config
lib/                    # Utilities (e.g. localStorage helpers)
types/                  # Shared TypeScript types
```

## Pages (placeholders)

- Dashboard (`/`)
- Curriculum (`/curriculum`)
- Daily Lesson (`/daily-lesson`)
- Practice (`/practice`)
- Worksheets (`/worksheets`)
- Answer Keys (`/answer-keys`)
- Progress Tracker (`/progress`)
- Parent Dashboard (`/parent-dashboard`)
- Error Review (`/error-review`)

This is an initial scaffold — full lesson content, practice logic, and worksheets are not implemented yet.
