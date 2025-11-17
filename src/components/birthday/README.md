# src/components/birthday

This folder contains all the feature components that make up the romantic birthday website experience.

## Components

### Core Sections
- **`WelcomeSection.tsx`** - Opening hero section with animated "Happy Birthday" greeting featuring vibrant gradient text (pink → orange → yellow) and decorative emojis
- **`PhotoGallery.tsx`** - Interactive photo carousel with auto-play, navigation controls, and decorative elements
- **`BirthdayMessages.tsx`** - Love letter section with typing animation effect and romantic card styling
- **`SurpriseSection.tsx`** - Interactive surprise section with clickable gift boxes, progress tracking, and bonus wishes
- **`BirthdayQuiz.tsx`** - Fun interactive quiz component with multiple questions
- **`EndingSection.tsx`** - Closing section with thank you message and replay options

### Supporting Components
- **`BackgroundMusic.tsx`** - Background music player with controls
- **`BackgroundMusic.new.tsx`** - Alternate/experimental version of the music component
- **`FloatingAnimations.tsx`** - Handles floating decorative elements (hearts, stars, teddy bears, sparkles)
- **`HeartExplosion.tsx`** - Special heart explosion animation with popup dialog

## Design Features

All headings use:
- **Vibrant Gradients**: Animated gradients (pink → fuchsia → orange → yellow)
- **Emoji Decorations**: Cute emojis on both sides of headings with proper font fallback
- **Floating Elements**: Decorative emojis positioned around headings
- **Smooth Animations**: Gradient shift animations and hover effects

## Customization

- **Messages**: Edit `BirthdayMessages.tsx` to customize the love letter content
- **Photos**: Update the `photos` array in `PhotoGallery.tsx`
- **Quiz Questions**: Modify the `questions` array in `BirthdayQuiz.tsx`
- **Surprises**: Edit `surpriseItems` array in `SurpriseSection.tsx`
- **Name Replacement**: Search for "Name!" and replace throughout all components

## Notes

- Media files (music and photos) are stored in `public/`
- Background music: Add `websitebackgroundsong.mp3` to `public/music/`
- All emojis use proper font fallback: `Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif`
