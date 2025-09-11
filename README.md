# Data Scientist Portfolio

A beautiful, responsive portfolio website for data scientists built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🌐 **Multilingual Support**: EN/FR language toggle with localStorage persistence
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI**: Dark theme with blue gradient accents and warm paper cards
- 🖼️ **Image Gallery**: Project modals with carousel navigation and captions
- ♿ **Accessible**: High contrast, keyboard navigation, and screen reader friendly
- 🚀 **Performance**: Optimized images and smooth animations

## Pages

- **Home (/)**: Hero section with projects grid
- **About (/about)**: Bio, skills, experience, and education
- **Contact (/contact)**: Email, LinkedIn, and GitHub contact cards

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- shadcn/ui for component library
- Lucide React for icons
- React Router for navigation

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization Guide

### Adding a New Project

1. **Add project images** to `public/images/<project-slug>/`:
   - `cover.jpg` - Main project image (800x600px recommended)
   - `gallery-1.jpg`, `gallery-2.jpg`, etc. - Gallery images (1200x800px recommended)

2. **Edit** `src/data/projects.ts` and add your project:
   ```typescript
   {
     id: "3",
     slug: "your-project-slug",
     title: {
       en: "Your Project Title",
       fr: "Titre de Votre Projet"
     },
     summary: {
       en: "Brief project description for the card",
       fr: "Brève description du projet pour la carte"
     },
     overview: {
       en: "Detailed project description for the modal",
       fr: "Description détaillée du projet pour le modal"
     },
     tags: ["Machine Learning", "Python", "Data Analysis"],
     stack: ["Python", "Pandas", "Scikit-learn"],
     coverImage: "/images/your-project-slug/cover.jpg",
     gallery: [
       {
         src: "/images/your-project-slug/gallery-1.jpg",
         caption: {
           en: "Description of this image",
           fr: "Description de cette image"
         }
       }
     ],
     repoUrl: "https://github.com/username/repo"
   }
   ```

### Editing Translations

Update text content in:
- `src/i18n/en.ts` - English translations
- `src/i18n/fr.ts` - French translations

Example:
```typescript
// src/i18n/en.ts
export const en = {
  hero: {
    name: "Your Name",
    title: "Your Professional Title",
    // ... other translations
  }
}
```

### Customizing Colors and Design

Edit the design system in `src/index.css`:

```css
:root {
  /* Core colors */
  --bg: 221 44% 7%;           /* Main background */
  --primary-900: 216 100% 14%; /* Darkest blue */
  --primary-600: 195 75% 34%;  /* Main blue */
  --paper: 24 100% 97%;        /* Card background */
}
```

### Adding New Skills

Edit the `skillsData` object in `src/pages/About.tsx`:

```typescript
const skillsData = {
  languages: ['Python', 'R', 'SQL', 'Your Language'],
  frameworks: ['TensorFlow', 'Your Framework'],
  // ... other categories
};
```

### Updating Contact Information

Edit the translations in `src/i18n/en.ts` and `src/i18n/fr.ts`:

```typescript
contact: {
  emailAddress: "your.email@domain.com",
  linkedinUrl: "linkedin.com/in/yourprofile",
  githubUrl: "github.com/yourusername",
}
```

## Deployment

This project is ready for deployment on:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The built files in the `dist` folder can be served by any static hosting service.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProjectCard.tsx # Project grid cards
│   ├── ProjectDialog.tsx # Project detail modal
│   └── Tag.tsx         # Skill/tech tags
├── data/
│   └── projects.ts     # Project data and types
├── i18n/               # Internationalization
│   ├── provider.tsx    # i18n context provider
│   ├── en.ts          # English translations
│   └── fr.ts          # French translations
├── pages/              # Route components
│   ├── Index.tsx      # Home page
│   ├── About.tsx      # About page
│   ├── Contact.tsx    # Contact page
│   └── NotFound.tsx   # 404 page
└── lib/
    └── utils.ts       # Utility functions
```

## Design System

The portfolio uses a carefully crafted design system with:

- **Dark Background**: #0B1220 for main areas
- **Blue Gradients**: Primary brand colors with professional feel
- **Warm Paper Cards**: #FFF7F4 for high contrast content areas
- **Semantic Tokens**: All colors defined in CSS variables
- **Consistent Spacing**: Based on Tailwind's spacing scale
- **Smooth Animations**: Subtle transitions for better UX

## Accessibility Features

- High contrast color combinations
- Keyboard navigation support
- Screen reader friendly markup
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!
