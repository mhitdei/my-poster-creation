// src/themes.js

export const themes = [
  {
    id: 'aurora',
    name: 'Celestial Glow',
    fonts: { heading: "'Playfair Display', serif", body: "'Poppins', sans-serif" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #0D1117, #2c3e50)' },
    particlesConfig: {
      particles: { number: { value: 120 }, color: { value: ["#ffffff", "#00F2FE", "#EC008C"] }, shape: { type: "circle" }, opacity: { value: {min: 0.1, max: 0.8} }, size: { value: {min: 0.5, max: 2.5} }, links: { enable: true, distance: 120, color: "#8B949E", opacity: 0.3, width: 1 }, move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: { default: "out" } } },
      interactivity: { events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } }, modes: { grab: { distance: 140, links: { opacity: 0.7 } }, push: { quantity: 4 } } },
    }
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    fonts: { heading: "'Dancing Script', cursive", body: "'Lato', sans-serif" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #fce4ec, #ffc1e3)' },
    particlesConfig: {
        particles: { number: { value: 30 }, shape: { type: "image", image: { src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23FFB7C5" d="M50 0 C65 0 85 15 85 35 S65 70 50 70 S15 55 15 35 S35 0 50 0 Z M50 20 C55 20 60 25 60 30 S55 40 50 40 S40 35 40 30 S45 20 50 20 Z" /></svg>` } }, opacity: { value: 0.9 }, size: { value: {min: 15, max: 30} }, move: { enable: true, speed: 2, direction: "bottom", straight: false, drift: 2, wobble: {enable: true, distance: 10, speed: 10} } },
    }
  },
  {
    id: 'ocean_breeze',
    name: 'Ocean Breeze',
    fonts: { heading: "'Merriweather', serif", body: "'Montserrat', sans-serif" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)' },
    particlesConfig: {
        particles: { number: { value: 10 }, color: { value: "#ffffff" }, shape: { type: "circle" }, opacity: { value: { min: 0.1, max: 0.3 } }, size: { value: { min: 20, max: 40 } }, move: { enable: true, speed: 1.5, direction: "top", straight: false, drift: 2, wobble: { enable: true, distance: 20, speed: 5 } } },
        interactivity: { events: { onHover: { enable: true, mode: "bubble" } }, modes: { bubble: { distance: 200, size: 50 } } },
    }
  },
  {
    id: 'matrix',
    name: 'Digital Matrix',
    fonts: { heading: "'Roboto Mono', monospace", body: "'Roboto Mono', monospace" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #0f0, #013220)' },
    particlesConfig: {
      particles: { number: { value: 100 }, color: { value: "#00ff00" }, shape: { type: "character", character: { value: ["0", "1"], font: "monospace", style: "", weight: "400" } }, opacity: { value: {min: 0.2, max: 0.8} }, size: { value: {min: 8, max: 16} }, move: { enable: true, speed: 3, direction: "bottom", straight: true }, },
    }
  },
  {
    id: 'sunset_vibe',
    name: 'Sunset Vibe',
    fonts: { heading: "'Playfair Display', serif", body: "'Lato', sans-serif" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #FF6A00, #EE0979)' },
    particlesConfig: {
      particles: { number: { value: 50 }, color: { value: "#FFC300" }, shape: { type: "circle" }, opacity: { value: {min: 0.3, max: 0.8} }, size: { value: {min: 1, max: 3} }, move: { enable: true, speed: 0.8, direction: "top", straight: false } },
    }
  },
  {
    id: 'snowfall',
    name: 'Winter Snow',
    fonts: { heading: "'Merriweather', serif", body: "'Poppins', sans-serif" },
    thumbnailStyle: { background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)' },
    particlesConfig: {
      particles: { number: { value: 200 }, color: { value: "#ffffff" }, shape: { type: "circle" }, opacity: { value: {min: 0.3, max: 0.8} }, size: { value: {min: 1, max: 4} }, move: { enable: true, speed: 2, direction: "bottom", straight: false, drift: 1 } },
    }
  },
];
