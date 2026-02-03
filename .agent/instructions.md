# Embedded Israel Project Instructions

This project is a hub for the Israeli embedded systems community, providing event information, recorded talks, and training resources.

## Project Mission
To serve as a high-performance, visually stunning resource for embedded developers in Israel, facilitating knowledge sharing and community growth.

## Technology Stack
- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS (Vanilla CSS approach where applicable)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Core Components & Structure
- `/src/pages/Home.tsx`: Overview and mission.
- `/src/pages/Events.tsx`: Integration with Meetup.com data (upcoming and past).
- `/src/pages/Recordings.tsx`: Comprehensive YouTube playlist integration (130+ videos).
- `/src/pages/Training.tsx`: Professional training services (Yocto, Linux Kernel, etc.).
- `/src/components/`: Reusable UI elements (cards, headers, footers).

## Design System
- **Theme**: Dark mode by default.
- **Aesthetics**: Glassmorphism, smooth gradients, premium typography (Inter/Outfit).
- **Primary Color**: Orange/Primary (#ea580c).
- **Secondary Colors**: Black/White for high contrast.

## Agent Guidelines
- Maintain the premium, dark-themed aesthetic in all new components.
- Ensure any data updates to Events or Recordings follow the existing TypeScript interfaces.
- Prioritize responsiveness and smooth micro-animations.
- **Verification**: Always run `npm run build` or `npm run dev` (if in interactive mode) to check for TypeScript/Vite errors after major changes.

## Persistence
- Session-specific tasks and logs are stored in the `brain/` directory (ignored by git).
- Long-term project rules and workflows live in this `.agent/` directory.
