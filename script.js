/* =========================
   LOADER (FIXED)
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200);
});

/* Safety fallback (prevents infinite loader) */
setTimeout(() => {
  document.getElementById("loader")?.classList.add("hidden");
}, 5000);

/* =========================
   YEAR FOOTER
========================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
   MOBILE NAV
========================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

/* =========================
   THEME TOGGLE
========================= */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");

    root.setAttribute(
      "data-theme",
      current === "light" ? "dark" : "light"
    );
  });
}

/* =========================
   HEADER SCROLL EFFECT
========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   SCROLL PROGRESS BAR
========================= */
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
});

/* =========================
   REVEAL ON SCROLL
========================= */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* =========================
   SKILL BARS ANIMATION
========================= */
const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.getAttribute("data-width");
        el.style.width = width + "%";
      }
    });
  },
  { threshold: 0.5 }
);

skillFills.forEach(el => skillObserver.observe(el));

/* =========================
   COUNTERS (HERO STATS)
========================= */
const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-count");

        let current = 0;
        const step = Math.ceil(target / 30);

        const timer = setInterval(() => {
          current += step;

          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 40);

        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach(el => counterObserver.observe(el));

/* =========================
   PROJECT FILTER
========================= */
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    projects.forEach(project => {
      const category = project.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });
  });
});

/* =========================
   BACK TO TOP BUTTON
========================= */
const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
  if (!backTop) return;

  if (window.scrollY > 400) {
    backTop.hidden = false;
  } else {
    backTop.hidden = true;
  }
});

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});