# src (Source Code)

This folder contains all the application source code for the romantic celebration website.

## Structure

### Entry Points
- **`main.tsx`** - Application entry point, mounts the React application
- **`App.tsx`** - Top-level app component with routing
- **`App.css`** - App-specific styles
- **`index.css`** - Global styles including romantic theme, animations, and gradient utilities
- **`vite-env.d.ts`** - Vite TypeScript environment type definitions

### Core Directories
- **`components/`** - All React components (celebration features + UI primitives)
- **`pages/`** - Route/page components (Index, NotFound)
- **`assets/`** - Static images and media (birthday-cake.jpg, fireworks.jpg, birthday-hero.jpg)
- **`hooks/`** - Custom React hooks (use-mobile, use-toast)
- **`lib/`** - Utility functions and helpers

## Styling System

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `index.css` for:
  - Romantic color palette (CSS variables)
  - Gradient definitions
  - Keyframe animations (float, twinkle, heartbeat, etc.)
  - Font definitions (Pacifico, Sacramento, Poppins)
  - Gradient text utilities

## Theme Features

- Soft pastel colors (pink, lavender, peach, cream)
- Vibrant gradient text on headings
- Smooth animations throughout
- Emoji support with proper font fallback
- Responsive design for all screen sizes

Each subfolder has its own `README.md` with detailed descriptions.
