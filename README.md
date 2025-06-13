# Portfolio Webapp for Multiple Disciplines

A highly interactive portfolio web application showcasing work across multiple disciplines—3D visualization, data-driven UIs, animations, and more.

Built with **React** and **Tailwind CSS**, plus a collection of specialized libraries for 3D, animations, testing, data visualization, routing, and performance monitoring.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Feedback & Design Notes](#feedback--design-notes)
- [TODO](#todo)
- [Project Materials](#project-materials)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

---

## Features

- **Responsive layouts** for desktop & mobile
- **3D scenes** powered by [react-three-fiber](https://github.com/pmndrs/react-three-fiber) & [@react-three/drei]
- **Smooth animations** via Framer Motion & GSAP
- **Interactive force‐directed graph** (d3‐force)
- **Code‐split & optimized** for best performance
- **Light & dark mode** support with dynamic glassmorphism accents

---

## Tech Stack

- **Framework**: React (v18.3.1)
- **Styling**: Tailwind CSS (v3.3.5) + PostCSS + Autoprefixer
- **3D**: three.js ecosystem (`three`, `react-three-fiber`, `@react-three/drei`, postprocessing)
- **Animations**: framer-motion, gsap
- **Routing**: react-router-dom (v7.5.1)
- **Testing**: @testing-library/react, jest-dom, user-event
- **Performance**: web-vitals
- **Data visualization**: d3-force

---

## Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development mode
```bash
npm start
```

Opens http://localhost:3000 and auto-reloads on changes.

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Starts dev server with HMR |
| `npm test` | Launches test runner in watch mode |
| `npm run build` | Bundles and optimizes app for production into build/ folder |
| `npm run eject` | One-way: ejects Create React App config for full customization |

---

## Deployment

To build and deploy your portfolio website:

### 1. Generate static build
```bash
npm run build
```

### 2. Deploy
```powershell
cd scripts
.\deploy.ps1
```

This powershell script syncs the build/ folder to your hosting (e.g. GitHub Pages).

---

## Feedback & Design Notes

- **Project card sizes**: Two distinct sizes cover all use-cases
- **Glassmorphism**: Replace "black squares" and icons with semi-transparent, frosted-glass panels
- **Dynamic accent colors**: Cycle between soft palettes that look great in both light & dark modes
- **Scrollbar**: Tweak thickness & thumb-track styling for mobile UX

---

## TODO

- 🌀 Page transitions (fade/slide between routes)
- 🎴 Card redesign: eliminate scroll-jank & swinging motion
- 📱 Scrollbar adjustments: improve touch targets on phones
- 🖼️ Glassmorphism on icons & panels
- 🎨 Dynamic color theming for both modes

---

## Project Materials

ECHO renders created in Twinmotion

---

## Dependencies

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "./",
  "dependencies": {
    "@react-three/drei": "^8.20.2",
    "@react-three/fiber": "^8.18.0",
    "@react-three/postprocessing": "^2.5.2",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^14.6.1",
    "d3-force": "^3.0.0",
    "framer-motion": "^12.7.4",
    "gsap": "^3.12.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.5.1",
    "react-scripts": "^5.0.1",
    "react-three-fiber": "^6.0.13",
    "three": "^0.152.2",
    "three-addons": "^1.2.0",
    "three-gltf-loader": "^1.111.0",
    "three-obj-loader": "^1.1.3",
    "web-vitals": "^2.1.4"
  }
}
```

---

## Dev Dependencies

```json
{
  "devDependencies": {
    "@types/three": "^0.173.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5"
  }
}
```

---

**⚠️ COPYRIGHT NOTICE**: This documentation and associated project are proprietary and confidential. No license is granted for use, reproduction, distribution, or modification of this content for any purpose. All rights reserved.