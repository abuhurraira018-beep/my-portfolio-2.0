/**
 * ====================================================================
 * 📁 PORTFOLIO CONFIGURATION FILE (EASY-TO-EDIT)
 * ====================================================================
 * 
 * 💡 HINT FOR ABU HURRAIRA:
 * You do NOT need to search through hundreds of lines of HTML to change
 * your information! You can easily update your details, texts, photos,
 * skills, and project links right here in this configuration file.
 * 
 * Whenever you want to change:
 * 1. Your photo: Just place your photo in 'assets/img/' and update 'profileImage' below.
 * 2. Your contact info: Update phone, email, and location below.
 * 3. Your skills or projects: Simply edit the arrays below.
 * ====================================================================
 */

const PORTFOLIO_CONFIG = {
  // ------------------------------------------------------------------
  // 👤 1. PERSONAL INFORMATION
  // ------------------------------------------------------------------
  personal: {
    fullName: "Abu Hurraira",
    firstName: "Abu",
    lastName: "Hurraira",
    tagline: "Creative Frontend & React/Next.js Engineer | 3D Web Specialist",
    
    // 💡 HINT: Put your profile picture inside assets/img/ and write its name here:
    profileImage: "assets/img/my-profile-img.jpg",
    
    // 💡 HINT: Hero background image
    heroBackground: "assets/img/hero-bg.jpg",
    
    // Typing animation words in Hero section
    typedRoles: [
      "React & Next.js Developer",
      "Full CRUD API Specialist",
      "Creative UI/UX Designer",
      "3D WebGL Experience Creator",
      "Software Engineering Undergraduate"
    ],
    
    birthDate: "23 August 2006",
    age: "20 Years",
    degree: "BS Software Engineering (2023 - 2027)",
    university: "The Islamia University of Bahawalpur (IUB)",
    college: "Punjab Group of Colleges, Bahawalpur",
    city: "Bahawalpur",
    country: "Pakistan",
    address: "Lalsohanra, Hasilpur Road, Bahawalpur, Postal Code 63100, Pakistan",
    email: "abuhurraira018@gmail.com",
    phone: "+92 346 482 8835",
    whatsapp: "+923464828835",
    freelanceStatus: "Available for Projects",
    
    // Bio summary
    aboutSummary: "Dedicated and detail-oriented Software Engineering student & Frontend Engineer specializing in Next.js, React, full RESTful CRUD API architectures, and interactive 3D WebGL experiences with Three.js. Proven track record building commercial business portfolios, dynamic e-commerce stores, and high-fashion luxury web applications.",
    
    // Social media links
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      whatsapp: "https://wa.me/923464828835",
      email: "mailto:abuhurraira018@gmail.com",
      instagram: "https://instagram.com/"
    }
  },

  // ------------------------------------------------------------------
  // 📊 2. METRICS & COUNTERS
  // ------------------------------------------------------------------
  stats: [
    { label: "Completed Projects", value: 16, icon: "bi-journal-code", suffix: "+" },
    { label: "Hours of Coding", value: 950, icon: "bi-clock-history", suffix: "+" },
    { label: "Happy Clients & Peers", value: 20, icon: "bi-emoji-smile", suffix: "+" },
    { label: "Code Commits", value: 420, icon: "bi-git", suffix: "+" }
  ],

  // ------------------------------------------------------------------
  // ⚡ 3. TECHNICAL SKILLS
  // ------------------------------------------------------------------
  skills: [
    { name: "React.js (React 18 & 19)", level: 94, category: "frontend" },
    { name: "Next.js (App Router Architecture)", level: 90, category: "frontend" },
    { name: "Axios & RESTful CRUD API Operations", level: 92, category: "frontend" },
    { name: "JavaScript (ES6+, Async/Await & DOM)", level: 92, category: "frontend" },
    { name: "TypeScript & Type Safety", level: 85, category: "frontend" },
    { name: "Tailwind CSS & Utility Design", level: 90, category: "frameworks" },
    { name: "Bootstrap 5 & Responsive Layouts", level: 95, category: "frameworks" },
    { name: "Three.js & Interactive 3D WebGL", level: 84, category: "creative" },
    { name: "GSAP & ScrollTrigger Animations", level: 86, category: "creative" },
    { name: "Git, GitHub & Version Control", level: 88, category: "tools" }
  ],

  // ------------------------------------------------------------------
  // 🚀 4. PORTFOLIO SHOWCASE PROJECTS (4 CORE FLAGSHIP PROJECTS)
  // ------------------------------------------------------------------
  projects: [
    {
      id: "project-business-portfolio",
      title: "Nexora Business Commerce & Portfolio",
      category: "nextjs",
      categoryLabel: "Next.js & Full-Stack",
      filterClass: "filter-nextjs",
      image: "assets/img/portfolio/project-business.jpg",
      tagline: "Enterprise Commercial Next.js Platform with 3D Visuals & Auth Portal",
      description: "Flagship enterprise commerce and corporate portfolio built with Next.js 14 (App Router), TypeScript, Three.js 3D hero scene, and GSAP. Features corporate B2B and evaluator demo authentication gateways, dynamic hardware catalog, real-time stock alerts, reactive cart, and wishlist.",
      techStack: ["Next.js 14", "React 18", "TypeScript", "Three.js", "GSAP", "Bootstrap 5"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-eshop",
      title: "E-Shope Modern Digital Marketplace",
      category: "react",
      categoryLabel: "React E-Commerce",
      filterClass: "filter-react",
      image: "assets/img/portfolio/project-eshop.jpg",
      tagline: "Full-Featured React & Vite Online Shopping Experience",
      description: "Comprehensive e-commerce application developed with React, Vite, and React Router. Incorporates dynamic category routing, sliding cart drawer, detailed product modals with color/size pickers, customer checkout flow, and Lucide React icons.",
      techStack: ["React 18", "Vite", "React Router 7", "Lucide React", "Context API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-solara",
      title: "SOLARA — Luxury Sunglasses Atelier",
      category: "luxury",
      categoryLabel: "Luxury Eyewear & UI/UX",
      filterClass: "filter-luxury",
      image: "assets/img/portfolio/project-solara.jpg",
      tagline: "High-Fashion Handcrafted Eyewear Boutique & Concierge",
      description: "Bespoke luxury eyewear digital flagship featuring handcrafted Italian bio-acetate frames and Japanese titanium optics. Includes custom frame material selection, polarized lens specifications, boutique shopping cart, VIP concierge, and high-fashion editorial styling.",
      techStack: ["HTML5", "Modern CSS3", "JavaScript ES6+", "Responsive Architecture"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-crud",
      title: "Shopping Hub — REST API CRUD Application",
      category: "crud",
      categoryLabel: "CRUD & REST API",
      filterClass: "filter-crud",
      image: "assets/img/portfolio/project-crud.jpg",
      tagline: "Complete RESTful CRUD Platform with Axios & DummyJSON API",
      description: "Full-stack style CRUD web application powered by React 19, Axios, and Bootstrap 5. Features real-time API data fetching, Create new products via modal form, Read/filter items, Delete records with live state updates, responsive dark/light mode, and live cart counter.",
      techStack: ["React 19", "Axios", "REST API", "Bootstrap 5.3", "React Router 7"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  // ------------------------------------------------------------------
  // 🛠️ 5. SERVICES OFFERED
  // ------------------------------------------------------------------
  services: [
    {
      title: "Next.js & React Web Applications",
      icon: "bi-laptop",
      description: "Building fast, SEO-friendly, and scalable web apps using Next.js App Router, React 18/19, TypeScript, and modern component architecture."
    },
    {
      title: "RESTful API Integration & Full CRUD",
      icon: "bi-database-check",
      description: "Connecting web frontends to backend APIs using Axios and Fetch. Implementing robust Create, Read, Update, and Delete operations with validation."
    },
    {
      title: "Interactive 3D Web & Animations",
      icon: "bi-box",
      description: "Crafting captivating 3D web scenes with Three.js and WebGL, enriched with GSAP ScrollTrigger for cinematic scroll-driven storytelling."
    },
    {
      title: "Tailwind CSS & Modern UI Systems",
      icon: "bi-palette",
      description: "Designing sleek, consistent UI components and design systems with Tailwind CSS, Bootstrap 5, and custom design tokens."
    },
    {
      title: "E-Commerce & Commercial Portals",
      icon: "bi-cart-check",
      description: "Architecting high-converting online stores, product catalogs, shopping carts, and client portal authentication gateways."
    },
    {
      title: "Frontend Optimization & Speed Tuning",
      icon: "bi-speedometer2",
      description: "Auditing and optimizing Core Web Vitals, asset compression, lazy loading, and rendering performance for butter-smooth 60 FPS experiences."
    }
  ],

  // ------------------------------------------------------------------
  // 🎨 6. THEMES & EASTER EGG CONFIGURATION
  // 💡 HINT: Pull down the profile photo or click it to cycle through these themes!
  // ------------------------------------------------------------------
  themes: [
    {
      id: "theme-cyber",
      name: "Cyber Neon",
      icon: "bi-cpu",
      accent: "#00f2fe",
      description: "High-tech cyberpunk aesthetic with deep obsidian and electric cyan glow."
    },
    {
      id: "theme-gold",
      name: "Imperial Gold",
      icon: "bi-gem",
      accent: "#f5b700",
      description: "Luxury dark aesthetic with champagne gold accents and warm amber glows."
    },
    {
      id: "theme-emerald",
      name: "Matrix Emerald",
      icon: "bi-terminal",
      accent: "#00f5a0",
      description: "Futuristic terminal theme with deep dark slate and neon emerald mint."
    },
    {
      id: "theme-arctic",
      name: "Arctic Studio",
      icon: "bi-sun",
      accent: "#2563eb",
      description: "Clean, ultra-crisp modern light portfolio with crisp typography and deep indigo contrast."
    }
  ]
};

// Make config globally accessible
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
