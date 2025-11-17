# src/assets

Static assets imported and bundled by the application (images, icons, etc.).

## Current Assets

- **`birthday-cake.jpg`** - Celebration cake image used in the SurpriseSection component
- **`fireworks.jpg`** - Fireworks background image for celebration effects
- **`birthday-hero.jpg`** - Hero/banner image used in WelcomeSection background
  - Also copied to `public/og-image.jpg` for social media previews

## Usage

- Import these assets in components using: `import imageName from '@/assets/image-name.jpg'`
- These images are processed by Vite and optimized during build
- For static files that don't need processing, use `public/` folder instead

## Adding New Assets

1. Add your image file to this folder
2. Import it in your component: `import myImage from '@/assets/my-image.jpg'`
3. Use it in JSX: `<img src={myImage} alt="description" />`
