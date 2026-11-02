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
    tagline: "Creative Frontend Engineer & 3D Web Specialist",
    
    // 💡 HINT: Put your profile picture inside assets/img/ and write its name here:
    profileImage: "assets/img/my-profile-img.jpg",
    
    // 💡 HINT: Hero background image (optional)
    heroBackground: "assets/img/hero-bg.jpg",
    
    // Typing animation words in Hero section
    typedRoles: [
      "Creative Frontend Developer",
      "UI/UX Designer",
      "3D Web Experience Creator",
      "Software Engineering Student",
      "Modern Web Architect"
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
    aboutSummary: "Dedicated and detail-oriented Frontend Engineer & Software Engineering student passionate about crafting high-performance, visually immersive, and user-centric web applications. Blending modern CSS architecture, interactive 3D WebGL experiences with Three.js, and clean JavaScript engineering to bring digital visions to life.",
    
    // Social media links (replace '#' with your real profiles when ready)
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/"
    }
  },

  // ------------------------------------------------------------------
  // 📊 2. METRICS & COUNTERS
  // ------------------------------------------------------------------
  stats: [
    { label: "Completed Projects", value: 12, icon: "bi-journal-code", suffix: "+" },
    { label: "Hours of Coding", value: 850, icon: "bi-clock-history", suffix: "+" },
    { label: "Happy Clients & Peers", value: 15, icon: "bi-emoji-smile", suffix: "+" },
    { label: "Code Commits", value: 340, icon: "bi-git", suffix: "+" }
  ],

  // ------------------------------------------------------------------
  // ⚡ 3. TECHNICAL SKILLS
  // ------------------------------------------------------------------
  skills: [
    { name: "HTML5 & Semantic Web", level: 98, category: "frontend" },
    { name: "CSS3 / Modern Layouts & Flexbox/Grid", level: 95, category: "frontend" },
    { name: "JavaScript (ES6+ & DOM)", level: 90, category: "frontend" },
    { name: "Bootstrap 5 & UI Frameworks", level: 92, category: "frameworks" },
    { name: "Tailwind CSS", level: 88, category: "frameworks" },
    { name: "Interactive 3D / Three.js & WebGL", level: 82, category: "creative" },
    { name: "GSAP & ScrollTrigger Animations", level: 85, category: "creative" },
    { name: "Responsive & Mobile-First Design", level: 95, category: "frontend" },
    { name: "Git, GitHub & Version Control", level: 85, category: "tools" },
    { name: "Microsoft Office Suite", level: 90, category: "tools" }
  ],

  // ------------------------------------------------------------------
  // 🚀 4. PORTFOLIO SHOWCASE PROJECTS
  // 💡 HINT: These reference the real screenshots in your assets/img/portfolio/ folder!
  // ------------------------------------------------------------------
  projects: [
    {
      id: "project-1",
      title: "Modern E-Commerce Storefront",
      category: "ecommerce",
      categoryLabel: "E-Commerce & SaaS",
      filterClass: "filter-ecommerce",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-wabsite-html-2026-03-04-11_17_37.png",
      tagline: "Full-Featured Online Store with Dynamic Cart & Filter System",
      description: "A comprehensive e-commerce user interface with interactive product filtering, product detail modals, live cart calculation, and responsive customer checkout flow.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-2",
      title: "Tailwind CSS SaaS Landing Page",
      category: "apps",
      categoryLabel: "Web Applications",
      filterClass: "filter-apps",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-tailwind-html-2026-03-04-11_18_48.png",
      tagline: "Modern Dark/Light Utility-Driven SaaS Marketing Experience",
      description: "A high-conversion landing page engineered using utility-first Tailwind CSS principles. Features glassmorphism cards, micro-interactions, responsive hero grid, and pricing matrix.",
      techStack: ["Tailwind CSS", "JavaScript", "HTML5", "Responsive Grid"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-3",
      title: "Dynamic Interactive Navigation System",
      category: "uiux",
      categoryLabel: "UI/UX & Components",
      filterClass: "filter-uiux",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-nav-html-2026-03-04-11_20_11.png",
      tagline: "Multi-Level Responsive Header with Smooth State Transitions",
      description: "An advanced navigation component architecture supporting multi-tier dropdown menus, responsive off-canvas drawer for mobile, search bar triggers, and keyboard accessibility.",
      techStack: ["CSS Animations", "JavaScript DOM", "Accessible HTML"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-4",
      title: "Multimedia Player & Streaming Interface",
      category: "apps",
      categoryLabel: "Web Applications",
      filterClass: "filter-apps",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-mm-html-2026-03-04-11_20_26.png",
      tagline: "Custom Audio/Video Dashboard with Dark Mode Aesthetic",
      description: "An immersive multimedia dashboard featuring custom audio/video player controls, interactive playlists, volume dials, progress scrubbers, and sleek dark neon visualization.",
      techStack: ["JavaScript Audio API", "CSS Flexbox", "Bootstrap Icons"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-5",
      title: "Enterprise Multi-Section Portal Layout",
      category: "ecommerce",
      categoryLabel: "E-Commerce & SaaS",
      filterClass: "filter-ecommerce",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-longlayout-html-2026-03-04-11_20_47.png",
      tagline: "Full-Length Scalable Web Layout with Sticky Navigation",
      description: "A complex multi-section web portal layout designed for large content sets, featuring sticky side navigation, section scrolling spy, card grids, and responsive data tables.",
      techStack: ["CSS Grid & Flex", "ScrollSpy", "HTML5 Semantic"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-6",
      title: "Interactive Client Showcase Demo",
      category: "uiux",
      categoryLabel: "UI/UX & Components",
      filterClass: "filter-uiux",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-demo-html-2026-03-04-11_23_34.png",
      tagline: "High-Fidelity Component Prototype with Real-Time Updates",
      description: "A production-grade client showcase showcasing stateful UI elements, interactive modals, tabs, form validations, and smooth visual feedback on every user action.",
      techStack: ["JavaScript ES6", "Bootstrap 5", "CSS3 Transitions"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-7",
      title: "CSS Box Model & Layout Architecture Visualizer",
      category: "uiux",
      categoryLabel: "UI/UX & Components",
      filterClass: "filter-uiux",
      image: "assets/img/portfolio/screencapture-127-0-0-1-5500-boxmodel-html-2026-03-04-11_24_11.png",
      tagline: "Educational Deep-Dive Visualizer for CSS Box Sizing & Margins",
      description: "An educational visualizer that demonstrates margin, border, padding, and content dimensions dynamically, serving as a master demonstration of CSS box-model mechanics.",
      techStack: ["CSS Box Model", "DOM Manipulation", "Visual Diagrams"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  // ------------------------------------------------------------------
  // 🛠️ 5. SERVICES OFFERED
  // ------------------------------------------------------------------
  services: [
    {
      title: "Responsive Web Development",
      icon: "bi-laptop",
      description: "Building fast, cross-browser compatible, and mobile-first websites utilizing semantic HTML5, modern CSS3, and modern JavaScript."
    },
    {
      title: "Interactive 3D Web & Animations",
      icon: "bi-box",
      description: "Crafting engaging 3D scenes using Three.js and WebGL, integrated with GSAP ScrollTrigger for cinematic scroll-driven storytelling."
    },
    {
      title: "Tailwind CSS & Modern UI Systems",
      icon: "bi-palette",
      description: "Designing sleek, consistent UI components and design systems with Tailwind CSS, Bootstrap 5, and custom design tokens."
    },
    {
      title: "Frontend Optimization & Speed",
      icon: "bi-speedometer2",
      description: "Auditing and optimizing Core Web Vitals, asset compression, lazy loading, and rendering performance for smooth 60 FPS experiences."
    },
    {
      title: "UI/UX Prototyping & Figma to Code",
      icon: "bi-layers",
      description: "Transforming design prototypes and ideas into pixel-perfect, clean, accessible, and maintainable production-ready web interfaces."
    },
    {
      title: "Website Redesign & Modernization",
      icon: "bi-arrow-repeat",
      description: "Revamping outdated websites into cutting-edge, high-conversion, professional portfolios and business applications."
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
