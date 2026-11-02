# 🚀 Abu Hurraira — Premium 3D Portfolio & Web Experience

> **Award-Winning, Interactive 3D Portfolio** built for Abu Hurraira, Software Engineering Undergraduate & Creative Frontend Developer. Featuring Three.js interactive 3D WebGL scenes, 4 dynamic aesthetic themes, glassmorphism UI, and the signature **Pull-Down Profile Photo Theme Switcher**.

---

## 🌟 Key Features

1. **Signature Interaction: Pull-Down Photo Theme Switcher**
   - Click and **drag/pull down** your profile picture in the sidebar or top bar.
   - Elastic spring resistance physics with dynamic SVG progress ring and stretching tether cord.
   - When pulled past threshold (or simply clicked), triggers a high-tech synthesized melodic chime chord (via browser Web Audio API, zero audio files needed!), creates a luminous particle ripple, and smoothly morphs the entire website and 3D scene across **4 hand-crafted themes**:
     - ⚡ **Cyber Neon** (Obsidian dark, neon cyan & violet)
     - 👑 **Imperial Gold** (Luxury charcoal, royal gold & amber glow)
     - 🌿 **Matrix Emerald** (Futuristic terminal, deep slate & neon mint)
     - ☀️ **Arctic Studio** (Crisp executive light mode, deep sapphire contrast)
   - Saves user preference automatically in `localStorage`.

2. **Interactive Three.js 3D Background Engine**
   - Floating 3D Geometric Torus Knot & Icosahedron wireframe mesh with glowing nodes.
   - 800-particle dynamic cyber constellation.
   - Smooth mouse parallax tracking and scroll-reactive orbit rotation.
   - Automatically re-tints particle and mesh lighting when switching themes.
   - GPU-optimized (pauses rendering when browser tab is inactive to preserve battery).

3. **Curated Showcase of Your 4 Core Flagship Projects**
   - 🏢 **Nexora Business Commerce & Portfolio** (`bussiness protfolio`):
     - Enterprise Next.js 14 (App Router) commerce platform with TypeScript, Three.js 3D hero, GSAP, and B2B corporate authentication portal.
   - 🛍️ **E-Shope Modern Digital Marketplace** (`e-shop`):
     - Full-featured React 18 & Vite online store with dynamic category routing, sliding cart drawer, modal previews, and Lucide React icons.
   - 🕶️ **SOLARA — Luxury Sunglasses Atelier** (`solara luxury sunglasses project`):
     - High-fashion luxury eyewear brand website with handcrafted bio-acetate frames, polarized lens specs, custom color pickers, and VIP concierge.
   - ⚡ **Shopping Hub — REST API CRUD Application** (`CRUD project`):
     - Full-stack style CRUD web application powered by React 19, Axios, and Bootstrap 5.3 with live DummyJSON REST API data fetching, Create (POST), Read (GET), and Delete (DELETE) operations with state synchronization.
   - Category filtering (`All Projects`, `Next.js & Business`, `React E-Commerce`, `Luxury Eyewear`, `CRUD & REST API`).
   - 3D perspective card tilt on hover.
   - GLightbox integration for full-resolution screenshot zoom.

4. **100% Mobile, Tablet & Desktop Responsive**
   - Smooth slide-out mobile drawer with hamburger toggle.
   - Floating bottom-right quick theme switcher & audio toggle for instant mobile accessibility.

5. **Direct WhatsApp & Instant Contact Integration**
   - One-click WhatsApp button to start chatting directly with `+92 346 4828835` with pre-filled greeting.
   - One-click copy email button with feedback toast.
   - Contact form with client-side feedback and validation.

---

## 💡 Developer Hints & Easy Customization Guide

### 1. How to Change Your Profile Photo 📸
> **When you are ready to put your new photo:**
1. Save your photo into `assets/img/` (for example: `assets/img/my-profile-img.jpg` or `assets/img/abu-new.jpg`).
2. Open `assets/js/portfolio-config.js` and update line 26:
   ```javascript
   profileImage: "assets/img/your-new-photo.jpg",
   ```
3. Or in `index.html`, look for `id="sidebar-profile-img"` (around line 52):
   ```html
   <img src="assets/img/your-new-photo.jpg" alt="Abu Hurraira" id="sidebar-profile-img">
   ```
4. That's it! The pull-down theme switcher will immediately work with your new photo!

---

### 2. How to Edit Text, Skills, or Projects in 2 Minutes 📝
You do **NOT** have to search through hundreds of lines of code. Everything is centralized in **`assets/js/portfolio-config.js`**:

- **Personal Info**: Update name, bio, email, phone, location, and social links in `PORTFOLIO_CONFIG.personal`.
- **Skills**: Add or adjust skill levels (0 to 100) in `PORTFOLIO_CONFIG.skills`.
- **Stats**: Update completed projects, hours of coding, or commits in `PORTFOLIO_CONFIG.stats`.
- **Projects**: Add new projects, titles, screenshots, and live demo links in `PORTFOLIO_CONFIG.projects`.

---

### 3. File Structure

```
d:\portfolio\
├── index.html                           # Main portfolio HTML with developer hints
├── README.md                            # Documentation and customization guide
├── forms/                               # Contact form scripts
└── assets/
    ├── css/
    │   ├── main.css                     # Base template styles
    │   └── custom-3d-portfolio.css      # 3D canvas, 4 themes, pull-down photo styles
    ├── js/
    │   ├── portfolio-config.js          # Centralized configuration (easy edits!)
    │   ├── custom-3d-portfolio.js       # Three.js 3D scene, pull-down interaction, audio synth
    │   └── main.js                      # Template scripts
    ├── img/
    │   ├── my-profile-img.jpg           # Your profile photo (replaceable)
    │   ├── hero-bg.jpg                  # Hero section background
    │   └── portfolio/                   # All 7 real project screenshots
    └── vendor/                          # Bootstrap 5, AOS, GLightbox, Swiper, etc.
```

---

## 🚀 How to Run & Preview Locally

### Option A: Direct Browser Preview (Fastest)
Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, Brave, or Firefox.

### Option B: VS Code Live Server (Recommended)
1. Open the folder `d:\portfolio` in VS Code.
2. Install the **Live Server** extension if not already installed.
3. Right-click on `index.html` and click **"Open with Live Server"**.

### Option C: Using Node.js / npx
Open PowerShell in `d:\portfolio` and run:
```powershell
npx serve .
```
Then visit `http://localhost:3000`.

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages (100% Free):
1. Push this folder to a GitHub repository named `portfolio` or `username.github.io`.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website is live worldwide at `https://yourusername.github.io/portfolio/`!

### Deploy to Vercel or Netlify:
- Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant deployment with free HTTPS and custom domain support.

---

### 👑 Credits & Engineering
- **Developer**: Abu Hurraira
- **Stack**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Three.js (WebGL), GLightbox, AOS
