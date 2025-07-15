# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Magee Groundworks LTD, a professional groundwork services company in Belfast. The site is built with vanilla HTML, CSS, and JavaScript and is hosted on GitHub Pages at https://rowbot1.github.io/mageegroundworks/.

## Common Development Tasks

### Local Development
- Open `index.html` directly in a browser or use a local server
- For live reload development: `python3 -m http.server 8000` or `npx live-server`

### Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Logo Management
- Logo file should be named `logo.png` in the root directory
- If logo is missing, the site falls back to text display
- See `upload-logo.md` for instructions on adding the logo

## Architecture

### File Structure
- `index.html` - Single-page application with all sections
- `styles.css` - All styling, uses CSS custom properties for theming
- `script.js` - Handles interactivity (navigation, animations, form)
- `logo.png` - Company logo (orange excavator in circle)

### Key Features
1. **Responsive Navigation** - Mobile hamburger menu with smooth transitions
2. **Smooth Scrolling** - Anchor links scroll smoothly to sections
3. **Intersection Observer** - Animates elements on scroll for performance
4. **Dynamic Navbar** - Changes opacity/shadow on scroll
5. **Contact Form** - Client-side validation (no backend currently)
6. **Animated Counters** - Stats animate when visible

### Services Offered
The site showcases 9 main services:
- Foundations
- Drainage  
- Site clearance
- Paving
- Fencing
- Service installation
- Earthworks
- Blockwork
- Renovations & new builds

### External Dependencies
- Google Fonts (Inter)
- Font Awesome icons (v6.4.0)
- No build process or npm packages required