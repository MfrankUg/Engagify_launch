# Engagify Landing Page 

A highly modern, energetic, Gen-Z style landing page for Engagify - launching December 2nd, 2025.

## Features

-  **Energetic & Futuristic Design** - Bold colors, neon accents, smooth gradients
-  **3D Floating Elements** - Interactive holographic-style shapes
-  **Gen-Z Friendly** - Modern, expressive, high-tech interface
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Fully Responsive** - Looks amazing on all devices
- **Live Countdown Timer** - Real-time countdown to launch day
- **Gradient Palette** - Electric blue, neon pink, purple haze, cyan glow

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Launch Date

**December 2nd, 2025** - The future starts here!

## Deployment

This site is configured for deployment on GitHub Pages.

### GitHub Pages Deployment

The site is automatically deployed using GitHub Actions when you push to the `main` branch.

1. Make sure your GitHub repository is set up at: `https://github.com/MfrankUg/Engagify_launch.git`
2. **Set up GitHub Secret for Google Apps Script URL:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `VITE_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script URL (from `.env` file)
   - Click "Add secret"
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
4. Push your code to the `main` branch
5. The GitHub Action will automatically build and deploy your site

**Important:** The `.env` file is not committed to Git for security. Make sure to add the `VITE_GOOGLE_SCRIPT_URL` as a GitHub Secret for the deployment to work correctly.

### Manual Build

To build the site locally:

```bash
npm run build
```

The built files will be in the `dist` directory. 

