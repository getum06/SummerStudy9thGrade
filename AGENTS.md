# AGENTS.md

## Cursor Cloud specific instructions

Next.js + TypeScript + Tailwind app ("Geometry Summer Prep").

### Services

- **Dev server:** `npm run dev` (port 3000)
- No other services required for local development.

### Commands

| Command           | Purpose              |
| ----------------- | -------------------- |
| `npm install`     | Install dependencies |
| `npm run dev`     | Development server   |
| `npm run build`   | Production build     |
| `npm run lint`    | ESLint               |

### Notes

- Progress is stored in browser `localStorage` via `lib/progress-storage.ts` (client components only).
- SVG diagrams live under `components/diagrams/`.
- Most pages are placeholders; extend `data/` and `app/` routes as features are added.
