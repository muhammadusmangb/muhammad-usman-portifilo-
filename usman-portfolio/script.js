const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a[href^='#']");
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`));
}), { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));

// Hero title and focus text gently rotate every few seconds.
const titles = ["Web Developer", "Frontend Developer", "Creative Problem Solver", "Computer Science Student"];
const focuses = ["Web Development", "Responsive Design", "JavaScript Practice", "Building Projects"];
let titleIndex = 0;
const changingTitle = document.getElementById("changingTitle");
const focusText = document.getElementById("focusText");
setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  changingTitle.classList.add("fade-out");
  setTimeout(() => {
    changingTitle.textContent = titles[titleIndex];
    focusText.textContent = focuses[titleIndex];
    changingTitle.classList.remove("fade-out");
  }, 250);
}, 3200);

// Subtle accent colour rotation every few seconds.
const palettes = [
  { blue: "#48a5ff", cyan: "#6de4ff", glow: "rgba(72,165,255,.22)" },
  { blue: "#8b7bff", cyan: "#c4b5fd", glow: "rgba(139,123,255,.22)" },
  { blue: "#26c6a6", cyan: "#80f5d5", glow: "rgba(38,198,166,.20)" },
  { blue: "#ff9a5a", cyan: "#ffd19a", glow: "rgba(255,154,90,.18)" }
];
let paletteIndex = 0;
setInterval(() => {
  paletteIndex = (paletteIndex + 1) % palettes.length;
  const palette = palettes[paletteIndex];
  const root = document.documentElement;
  root.style.setProperty("--blue", palette.blue);
  root.style.setProperty("--cyan", palette.cyan);
  root.style.setProperty("--glow", palette.glow);
}, 5200);

// Project links stay as placeholders until you add your real deployed URLs.
document.querySelectorAll(".project-live-link").forEach(link => {
  link.addEventListener("click", event => {
    if (link.href.includes("example.com")) {
      event.preventDefault();
      alert("Add your real live project URL to this link in index.html first.");
    }
  });
});
