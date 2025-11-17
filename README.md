# Website-For-Loved-ONES 💕

A beautiful, romantic, and interactive celebration website built with React + TypeScript (Vite). This project creates a personalized, love-filled celebration experience with vibrant gradients, cute animations, and heartfelt messages - perfect for any special occasion!

## Live Demo

🌐 **Deployed Website**: [https://website-for-loved-ones.vercel.app/](https://website-for-loved-ones.vercel.app/)

## Purpose

- Create a romantic, personalized celebration website filled with love, happiness, and cute elements for any special occasion
- Provide an easy-to-customize template for creating special celebration pages
- Demonstrate beautiful gradient text effects, emoji decorations, and smooth animations

## Key Features

- **Vibrant Gradient Headings**: Beautiful animated gradients (pink → fuchsia → orange → yellow) on all section headings
- **Photo Gallery**: Interactive carousel with auto-play, manual controls, and image fallbacks
- **Love Letter Section**: Typing animation for personalized messages with romantic styling
- **Interactive Surprises**: Clickable gift boxes and surprises with progress tracking
- **Celebration Quiz**: Fun interactive quiz component
- **Heart Explosion**: Special heart explosion animation with popup messages
- **Background Music**: Optional background music player
- **Floating Animations**: Hearts, stars, teddy bears, and sparkles floating across the screen
- **Romantic Theme**: Soft pastel colors, cute emojis, and love-filled design throughout

Quick start
```powershell
# install dependencies
npm install

# run dev server
npm run dev

# build for production
npm run build
```

## Tech Stack

- **React + TypeScript**: Modern component-based development
- **Vite**: Fast dev server and optimized production builds
- **Tailwind CSS**: Utility-first styling with custom romantic theme
- **Radix UI**: Accessible component primitives
- **Custom Animations**: CSS keyframe animations for romantic effects

Project layout
- public/ : static assets (images, music, robots.txt, placeholder.svg). Put gallery images under public/photos/.
- src/ : application source
  - src/components/ : UI components and feature components (celebration gallery, buttons, cards)
  - src/pages/ : top-level pages and routing
  - src/hooks/ : reusable hooks
  - src/lib/ : utilities and helpers
  - src/assets/ : imported static assets used by the app
- package.json, vite.config.ts, tsconfig.json : build and tooling configuration

## Customization Guide

### Personalizing Content

1. **Name Replacement**: Search for "Name!" throughout the codebase and replace with the recipient's name
2. **Messages**: Edit `src/components/birthday/CelebrationMessages.tsx` to customize the love letter content
3. **Photos**: 
   - Place your photos in `public/photos/` (e.g., `public/photos/sample1.jpg`)
   - Edit `src/components/birthday/PhotoGallery.tsx` to update photo entries, captions, and descriptions
   - Keep `placeholder.svg` in `public/` as a fallback image
4. **Background Music**: Add `websitebackgroundsong.mp3` to `public/music/` folder
5. **Open Graph Image**: The site uses `public/og-image.jpg` for social media previews

### Styling

- **Colors**: Edit CSS variables in `src/index.css` to change the romantic color palette
- **Gradients**: Heading gradients are defined inline in each component (pink → fuchsia → orange → yellow)
- **Fonts**: Uses Google Fonts (Pacifico, Sacramento, Poppins) - defined in `index.html` and `src/index.css`

## Design Features

- **Romantic Color Palette**: Soft pastels (pink, lavender, peach, cream)
- **Vibrant Gradient Text**: Animated gradients on all major headings
- **Emoji Decorations**: Cute emojis (💕, ✨, 🎁, 📸, etc.) with proper font fallback
- **Smooth Animations**: Floating hearts, twinkling stars, bouncing teddy bears
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices

## Sections

1. **Welcome Section**: Hero greeting with animated celebration message
2. **Photo Gallery**: Interactive memory slideshow
3. **Celebration Messages**: Love letter with typing animation
4. **Romantic Surprises**: Interactive gift boxes with messages
5. **Celebration Quiz**: Fun quiz about the special person
6. **Ending Section**: Thank you message with replay option

## Notes

- Replace all "Name!" placeholders with the actual recipient's name
- Add your own photos to `public/photos/`
- Customize messages in `CelebrationMessages.tsx`
- The site uses emoji font fallback to ensure proper rendering across all devices
- Open Graph meta tags are configured for beautiful social media previews
