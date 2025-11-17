# src/components/ui

This folder contains reusable UI primitives and component wrappers based on Radix UI and shadcn/ui patterns.

## Key Components

### Interactive Elements
- **`button.tsx`** - Styled button component with romantic variants:
  - `birthday` - Gradient birthday theme
  - `surprise` - Surprise theme with heartbeat animation
  - `cake` - Cake theme
  - `romantic` - Romantic gradient theme
  - `love` - Love theme with heart float animation

### Layout Components
- **`card.tsx`** - Card wrapper with gradient background support
- **`dialog.tsx`** - Modal dialog component (used in HeartExplosion)
- **`sheet.tsx`** - Side panel component
- **`popover.tsx`** - Popover overlay component

### Form Components
- **`input.tsx`**, **`textarea.tsx`** - Form input components
- **`select.tsx`**, **`checkbox.tsx`**, **`radio-group.tsx`** - Form controls

### Feedback Components
- **`toast.tsx`**, **`toaster.tsx`**, **`use-toast.ts`** - Toast notification system
- **`progress.tsx`** - Progress bar (used in SurpriseSection)

### Other Components
- **`carousel.tsx`** - Carousel/slider component
- **`tabs.tsx`** - Tab navigation
- **`accordion.tsx`** - Collapsible accordion
- And many more common UI patterns...

## Styling

All components use:
- Tailwind CSS for styling
- CSS variables from the romantic theme
- Consistent spacing and sizing
- Smooth transitions and animations
