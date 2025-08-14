# Hepta Website

A modern, responsive luxury hotel website built with React, TypeScript, and Tailwind CSS. This project showcases a complete replica of the Hepta hotel template with enhanced animations and modern web technologies.

## 🚀 Live Demo

Visit the live website: [hepta-website.vercel.app](https://hepta-website.vercel.app)

## ✨ Features

- **Modern React 18** with TypeScript
- **Responsive Design** - Mobile-first approach
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **AOS (Animate On Scroll)** for scroll-triggered animations
- **React Router DOM** for client-side routing
- **Vite** for fast development and building
- **Luxury Hotel Theme** with professional design

## 🏗️ Project Structure

```
hepta-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Responsive navigation
│   │   ├── HeroSection.tsx # Hero section component
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   └── Footer.tsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Complete homepage
│   │   ├── Hotels.tsx      # Hotels listing page
│   │   ├── About.tsx       # About page
│   │   ├── Gallery.tsx     # Gallery page
│   │   ├── News.tsx        # News page
│   │   └── Contact.tsx     # Contact page
│   ├── router/             # Routing configuration
│   │   └── Router.tsx      # React Router setup
│   ├── animations/         # Animation presets
│   │   └── presets.ts      # Framer Motion variants
│   ├── styles/             # Custom styles
│   ├── assets/             # Images, icons, etc.
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── dist/                   # Build output
└── configuration files     # Various config files
```

## 🎨 Design Features

### Homepage Sections
1. **Hero Section** - Full-screen background with CTA
2. **Intro Section** - 2-column layout with image and text
3. **Services Section** - Grid of 6 service cards
4. **Featured Hotels** - Auto-rotating carousel
5. **Gallery Section** - Image grid with hover effects
6. **Testimonials** - Auto-rotating testimonials slider
7. **Latest News** - Blog cards with images
8. **Call-to-Action** - Gradient background with CTA

### Animations
- **AOS Animations** - Fade-up, zoom-in, slide effects
- **Framer Motion** - Hover effects, micro-interactions
- **Smooth Transitions** - Between pages and components
- **Auto-rotating Sliders** - For hotels and testimonials

### Responsive Design
- **Mobile-first** approach
- **Breakpoints** for tablet and desktop
- **Touch-friendly** interactions
- **Optimized** for all screen sizes

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.2** - Build tool and dev server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **AOS 2.3.4** - Animate On Scroll library
- **React Router DOM 7.8.0** - Client-side routing
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MalikBasit45/hepta-website.git
   cd hepta-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Routes

- `/` - Homepage with all sections
- `/hotels` - Hotels listing with cards
- `/about` - About Us page
- `/gallery` - Photo gallery
- `/news` - Latest news and blog
- `/contact` - Contact information

## 🎯 Key Features

### Navigation
- **Responsive Navbar** with hamburger menu
- **Active link highlighting**
- **Smooth scroll transitions**
- **Transparent to solid background**

### Animations
- **Scroll-triggered animations** with AOS
- **Hover effects** with Framer Motion
- **Image zoom effects** on gallery items
- **Staggered animations** for cards

### Performance
- **Optimized images** from Unsplash
- **Efficient animations** with proper cleanup
- **Fast loading** with Vite
- **SEO-friendly** structure

## 🌐 Deployment

This project is configured for deployment on Vercel with the following files:

- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment
- `DEPLOYMENT.md` - Detailed deployment guide

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite framework
3. Build command: `npm run build`
4. Output directory: `dist`

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Author

**Malik Basit**
- GitHub: [@MalikBasit45](https://github.com/MalikBasit45)
- Live Demo: [hepta-website.vercel.app](https://hepta-website.vercel.app)

## 🤝 Contributing

This is a demo project, but feel free to fork and modify for your own use.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
