# src/components

Contains all React components used by the romantic birthday website.

## Structure

### Main Component
- **`BirthdayWebsite.tsx`** - Top-level component that orchestrates all birthday sections and manages navigation between them

### Feature Components (`birthday/`)
All birthday-specific feature components with romantic styling:
- Welcome section with gradient headings
- Photo gallery with interactive carousel
- Love letter with typing animation
- Interactive surprises section
- Birthday quiz
- Ending/thank you section
- Supporting animations and music controls

See `birthday/README.md` for detailed component descriptions.

### UI Components (`ui/`)
Collection of reusable UI primitives based on Radix UI and shadcn/ui:
- Buttons with romantic variants (birthday, surprise, cake, romantic, love)
- Cards with gradient backgrounds
- Dialogs, sheets, popovers for modals
- Form inputs and other common UI patterns

See `ui/README.md` for UI component details.

## Design System

All components follow a romantic, cute theme with:
- Soft pastel color palette
- Vibrant gradient text effects
- Emoji decorations with proper font fallback
- Smooth animations and transitions
