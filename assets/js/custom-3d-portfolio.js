/**
 * ====================================================================
 * 🚀 CUSTOM 3D PORTFOLIO JAVASCRIPT ENGINE
 * ====================================================================
 * 
 * 💡 DEVELOPER HINTS & ARCHITECTURE:
 * 1. THEME ENGINE & SIGNATURE PULL-DOWN PHOTO:
 *    - Allows users to drag/pull down the profile picture to cycle through themes.
 *    - Also supports simple clicking on the badge or photo.
 * 2. THREE.JS 3D BACKGROUND SCENE:
 *    - Interactive 3D particle constellation & wireframe geometric mesh.
 *    - Reacts to mouse movement and scroll depth.
 *    - Colors smoothly morph when theme changes.
 * 3. WEB AUDIO SYNTHESIZER:
 *    - Generates crystalline chime sounds using browser Web Audio API.
 *    - No external audio files needed!
 * 4. 3D CARD PERSPECTIVE TILT:
 *    - Lightweight hover tilt on project cards.
 * ====================================================================
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // 1. STATE & GLOBAL CONFIGURATION
  // ------------------------------------------------------------------
  const state = {
    currentThemeIndex: 0,
    soundEnabled: true,
    isPulling: false,
    startY: 0,
    currentY: 0,
    pullThreshold: 60, // pixels downward to trigger theme switch
    themes: [
      { id: "theme-cyber", name: "Cyber Neon", accent: "#00f2fe", threeColor: 0x00f2fe },
      { id: "theme-gold", name: "Imperial Gold", accent: "#f5b700", threeColor: 0xf5b700 },
      { id: "theme-emerald", name: "Matrix Emerald", accent: "#00f5a0", threeColor: 0x00f5a0 },
      { id: "theme-arctic", name: "Arctic Studio", accent: "#2563eb", threeColor: 0x2563eb }
    ]
  };

  // ------------------------------------------------------------------
  // 2. WEB AUDIO API SYNTHESIZER (No audio files needed!)
  // ------------------------------------------------------------------
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Play a pleasant, melodic chord chime when the theme switches
  function playThemeChime() {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio

      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + index * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.45);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.5);
      });
    } catch (e) {
      console.warn("Audio chime prevented or unsupported:", e);
    }
  }

  // Quick subtle click blip
  function playClickBlip() {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  // ------------------------------------------------------------------
  // 3. THEME CONTROLLER & PERSISTENCE
  // ------------------------------------------------------------------
  function applyTheme(themeIndex, playAudio = true) {
    state.currentThemeIndex = themeIndex % state.themes.length;
    const theme = state.themes[state.currentThemeIndex];

    // Remove old theme classes from body
    state.themes.forEach(t => document.body.classList.remove(t.id));
    document.body.classList.add(theme.id);

    // Save preference to localStorage
    try {
      localStorage.setItem("abu_portfolio_theme", theme.id);
    } catch (e) {}

    // Update active theme badge indicators
    const themeLabels = document.querySelectorAll(".active-theme-name");
    themeLabels.forEach(el => el.textContent = theme.name);

    const themeDots = document.querySelectorAll(".theme-dot-indicator");
    themeDots.forEach(dot => dot.style.background = theme.accent);

    // Trigger visual pulse ripple
    createThemeRipple();

    // Trigger audio
    if (playAudio) {
      playThemeChime();
    }

    // Show toast message
    showToast(`🎨 Theme switched to: ${theme.name}`);

    // Update Three.js 3D scene colors if initialized
    if (window.updateThreeColors) {
      window.updateThreeColors(theme.threeColor);
    }
  }

  function cycleTheme() {
    const nextIndex = (state.currentThemeIndex + 1) % state.themes.length;
    applyTheme(nextIndex, true);
  }

  function createThemeRipple() {
    const ripple = document.createElement("div");
    ripple.className = "theme-switch-ripple";
    document.body.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }

  function showToast(message) {
    let toast = document.querySelector(".toast-cyber");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-cyber";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="bi bi-magic"></i> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // ------------------------------------------------------------------
  // 4. SIGNATURE INTERACTION: "PULL-DOWN PHOTO TO CHANGE THEME"
  // ------------------------------------------------------------------
  function initPullDownPhoto() {
    const photoCard = document.querySelector(".pull-photo-card");
    const progressCircle = document.querySelector(".pull-progress-circle");
    const tether = document.querySelector(".elastic-tether");
    const hintBadge = document.querySelector(".pull-hint-badge");

    if (!photoCard) return;

    let startY = 0;
    let currentPull = 0;
    let isDragging = false;

    // Radius calculations for SVG progress ring
    const totalCircumference = 377; // 2 * PI * r (r=60)

    function updatePullVisuals(pullDistance) {
      // Damped spring resistance: pullDistance grows slower as distance increases
      const dampedDistance = Math.min(pullDistance * 0.55, 95);
      
      photoCard.style.transform = `translateY(${dampedDistance}px) scale(${1 + dampedDistance * 0.0015})`;

      // Calculate percentage to threshold
      const progress = Math.min(pullDistance / state.pullThreshold, 1);
      const dashOffset = totalCircumference - (totalCircumference * progress);

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = dashOffset;
      }

      if (tether) {
        tether.style.height = `${dampedDistance}px`;
        tether.style.opacity = progress > 0.05 ? "1" : "0";
      }

      if (hintBadge) {
        if (progress >= 1) {
          hintBadge.innerHTML = `<i class="bi bi-lightning-charge-fill"></i> Release to Switch Theme!`;
          hintBadge.style.borderColor = "var(--accent-color)";
        } else {
          hintBadge.innerHTML = `<i class="bi bi-arrow-down"></i> Pull Down Photo to Switch Theme`;
          hintBadge.style.borderColor = "var(--border-color)";
        }
      }
    }

    function resetPhotoPosition(triggered = false) {
      photoCard.classList.add("spring-back");
      photoCard.style.transform = "translateY(0px) scale(1)";

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = totalCircumference;
      }
      if (tether) {
        tether.style.height = "0px";
        tether.style.opacity = "0";
      }
      if (hintBadge) {
        hintBadge.innerHTML = `<i class="bi bi-arrow-down"></i> Pull Down Photo to Switch Theme`;
        hintBadge.style.borderColor = "var(--border-color)";
      }

      setTimeout(() => {
        photoCard.classList.remove("spring-back");
      }, 650);

      if (triggered) {
        cycleTheme();
      }
    }

    // --- MOUSE EVENTS ---
    photoCard.addEventListener("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      currentPull = 0;
      photoCard.classList.remove("spring-back");
      initAudio();
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const rawDistance = e.clientY - startY;
      if (rawDistance > 0) {
        currentPull = rawDistance;
        updatePullVisuals(currentPull);
      }
    });

    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      const shouldTrigger = currentPull >= state.pullThreshold;
      resetPhotoPosition(shouldTrigger);
    });

    // --- TOUCH EVENTS (Mobile & Tablet Support) ---
    photoCard.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startY = e.touches[0].clientY;
        currentPull = 0;
        photoCard.classList.remove("spring-back");
        initAudio();
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const rawDistance = e.touches[0].clientY - startY;
      if (rawDistance > 0) {
        currentPull = rawDistance;
        updatePullVisuals(currentPull);
      }
    }, { passive: true });

    window.addEventListener("touchend", () => {
      if (!isDragging) return;
      isDragging = false;
      const shouldTrigger = currentPull >= state.pullThreshold;
      resetPhotoPosition(shouldTrigger);
    });

    // --- ACCESSIBILITY / DIRECT CLICK FALLBACK ---
    // If user clicks or taps without dragging, also toggle the theme smoothly!
    photoCard.addEventListener("click", (e) => {
      if (currentPull < 10) {
        cycleTheme();
      }
    });

    if (hintBadge) {
      hintBadge.addEventListener("click", () => {
        cycleTheme();
      });
    }
  }

  // ------------------------------------------------------------------
  // 5. THREE.JS INTERACTIVE 3D BACKGROUND
  // ------------------------------------------------------------------
  function initThreeScene() {
    const container = document.getElementById("three-canvas-container");
    if (!container || typeof THREE === "undefined") {
      console.warn("Three.js not found or container missing, continuing gracefully.");
      return;
    }

    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Initial Accent Color
    let activeColor = state.themes[state.currentThemeIndex].threeColor;

    // 1. Create Floating 3D Geometric Tech Mesh (Torus Knot Wireframe with Nodes)
    const geometry = new THREE.TorusKnotGeometry(9, 2.6, 120, 24);
    
    // Wireframe lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: activeColor,
      transparent: true,
      opacity: 0.28
    });
    const wireframeMesh = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      lineMaterial
    );
    scene.add(wireframeMesh);

    // Glowing vertex points
    const pointsMaterial = new THREE.PointsMaterial({
      color: activeColor,
      size: 0.18,
      transparent: true,
      opacity: 0.75
    });
    const pointsMesh = new THREE.Points(geometry, pointsMaterial);
    scene.add(pointsMesh);

    // Position mesh slightly to the right for cinematic composition
    wireframeMesh.position.set(10, 0, -5);
    pointsMesh.position.set(10, 0, -5);

    // 2. Floating Cyber Particle Constellation (800 dynamic particles)
    const particleCount = 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleVel = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 80;
      particlePos[i + 1] = (Math.random() - 0.5) * 80;
      particlePos[i + 2] = (Math.random() - 0.5) * 60;
      particleVel.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: activeColor,
      size: 0.22,
      transparent: true,
      opacity: 0.55
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    }, { passive: true });

    // Scroll Reaction
    let scrollY = 0;
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    }, { passive: true });

    // Global color update hook when theme switches
    window.updateThreeColors = function (newHexColor) {
      if (lineMaterial) lineMaterial.color.setHex(newHexColor);
      if (pointsMaterial) pointsMaterial.color.setHex(newHexColor);
      if (particleMat) particleMat.color.setHex(newHexColor);
    };

    // Render Loop
    let isVisible = true;
    document.addEventListener("visibilitychange", () => {
      isVisible = !document.hidden;
    });

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Wireframe Mesh
      wireframeMesh.rotation.x = elapsedTime * 0.12 + targetY * 1.5;
      wireframeMesh.rotation.y = elapsedTime * 0.18 + targetX * 1.5;
      pointsMesh.rotation.x = wireframeMesh.rotation.x;
      pointsMesh.rotation.y = wireframeMesh.rotation.y;

      // Scroll-driven vertical drift
      wireframeMesh.position.y = -scrollY * 0.012;
      pointsMesh.position.y = wireframeMesh.position.y;

      // Slow drift for particle constellation
      particleCloud.rotation.y = elapsedTime * 0.03;
      particleCloud.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    }

    animate();

    // Throttled Resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // ------------------------------------------------------------------
  // 6. 3D CARD PERSPECTIVE TILT EFFECT
  // ------------------------------------------------------------------
  function init3DCardTilt() {
    const cards = document.querySelectorAll(".project-card-3d");

    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });
  }

  // ------------------------------------------------------------------
  // 7. QUICK THEME FLOATER & CONTROLS
  // ------------------------------------------------------------------
  function initControls() {
    // Quick Theme Switch Button
    const themeBtn = document.querySelector(".quick-theme-switch-trigger");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        cycleTheme();
      });
    }

    // Sound Mute Toggle
    const soundToggle = document.querySelector(".sound-toggle-btn");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        state.soundEnabled = !state.soundEnabled;
        soundToggle.classList.toggle("sound-on", state.soundEnabled);
        soundToggle.innerHTML = state.soundEnabled 
          ? `<i class="bi bi-volume-up"></i>` 
          : `<i class="bi bi-volume-mute"></i>`;
        showToast(state.soundEnabled ? "🔊 Sound FX Enabled" : "🔇 Sound FX Muted");
        if (state.soundEnabled) playClickBlip();
      });
    }

    // Direct WhatsApp Chat Trigger
    const whatsappBtns = document.querySelectorAll(".whatsapp-chat-trigger");
    whatsappBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const phone = "923464828835";
        const message = encodeURIComponent("Hello Abu Hurraira! I explored your 3D portfolio and would love to collaborate on a project.");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
      });
    });

    // Copy Email to Clipboard
    const copyEmailBtn = document.querySelector(".copy-email-btn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("abuhurraira018@gmail.com").then(() => {
          showToast("📋 Email copied to clipboard: abuhurraira018@gmail.com");
          playClickBlip();
        });
      });
    }

    // Contact Form submission handler
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status"></span> Sending...`;
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = `<i class="bi bi-check-circle"></i> Sent Successfully!`;
          showToast("🚀 Thank you! Your message has been sent successfully.");
          playThemeChime();
          contactForm.reset();

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 4000);
        }, 1200);
      });
    }
  }

  // ------------------------------------------------------------------
  // 8. RESTORE SAVED THEME ON STARTUP
  // ------------------------------------------------------------------
  function restoreSavedTheme() {
    try {
      const savedThemeId = localStorage.getItem("abu_portfolio_theme");
      if (savedThemeId) {
        const foundIndex = state.themes.findIndex(t => t.id === savedThemeId);
        if (foundIndex !== -1) {
          applyTheme(foundIndex, false);
          return;
        }
      }
    } catch (e) {}

    // Default to Cyber Neon (Index 0)
    applyTheme(0, false);
  }

  // ------------------------------------------------------------------
  // 9. INITIALIZE ON DOM READY
  // ------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    restoreSavedTheme();
    initPullDownPhoto();
    initThreeScene();
    init3DCardTilt();
    initControls();
  });

})();
