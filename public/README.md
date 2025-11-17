# public (Static Files)

This folder contains all static assets that are served directly by the dev server and production build.

## Key Files

- **`favicon.ico`, `favicon.svg`** - Site icons displayed in browser tabs
- **`robots.txt`** - Search engine crawler rules
- **`placeholder.svg`** - Fallback placeholder image for missing photos
- **`og-image.jpg`** - Open Graph image for social media link previews (replaces Lovable branding)

## Directories

- **`music/`** - Background music files (see `music/README.md`)
  - Expected file: `websitebackgroundsong.mp3`
- **`photos/`** - Photo assets for the gallery (see `photos/README.md`)
  - Add your personal photos here
  - Reference them in `src/components/birthday/PhotoGallery.tsx`

## Notes

- All files in this folder are served at the root URL (e.g., `/photos/image.jpg`)
- The `og-image.jpg` is used for social media sharing previews
- Keep file sizes optimized for web performance
