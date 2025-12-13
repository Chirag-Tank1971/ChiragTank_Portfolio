# Chirag Tank Portfolio - Next.js Version

A modern, responsive portfolio website built with Next.js, React, and CSS. This is a conversion of the original HTML/CSS/JS portfolio to a Next.js application.

## Features

- **Responsive Design**: Optimized for all screen sizes, from mobile devices to desktops
- **Smooth Animations**: Enhanced animations and transitions
- **React Components**: Modular, reusable component architecture
- **Form Validation**: Client-side form validation with React
- **Dynamic Routing**: Dynamic project detail pages
- **SEO Optimized**: Better meta tags and server-side rendering
- **Performance**: Automatic code splitting and image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-nextjs/
├── components/          # React components
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── About.js
│   ├── Projects.js
│   └── Contact.js
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper with global styles
│   ├── index.js        # Home page
│   └── projects/       # Project detail pages
│       └── [slug].js   # Dynamic project pages
├── public/             # Static assets
│   └── assets/         # Images, icons, SVGs
├── styles/             # CSS files
│   ├── globals.css     # Global styles
│   ├── style.css       # Main styles
│   └── responsive.css  # Responsive styles
└── next.config.js      # Next.js configuration
```

## Technologies Used

- **Next.js 16**: React framework with SSR
- **React 19**: UI library
- **CSS3**: Custom styling with animations
- **Next/Image**: Optimized image loading

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

## Improvements Over Original

1. ✅ Component-based architecture for better maintainability
2. ✅ React hooks for state management
3. ✅ Better form validation with React
4. ✅ Dynamic routing for project pages
5. ✅ Improved performance with Next.js optimizations
6. ✅ Better SEO with proper meta tags
7. ✅ Smooth scrolling and animations
8. ✅ No jQuery dependency (pure React)

## Contact

- Email: chiragtank1971@gmail.com
- LinkedIn: [Chirag Tank](https://www.linkedin.com/in/chirag-tank-72220919b/)
- GitHub: [Chirag23Tank](https://github.com/Chirag23Tank)

## License

Copyright 2021. Made by Chirag Tank
