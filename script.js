const gridBtn = document.querySelector(".view-toggle__grid");
const singleBtn = document.querySelector(".view-toggle__single");
const grid = document.querySelector(".project-grid");
const infoPanel = document.querySelector(".info-panel");
const projectPanel = document.querySelector(".project-panel");
const projectGallery = document.querySelector(".project-gallery");
const projectTitle = document.querySelector(".project-meta__title");
const projectCategories = document.querySelector(".project-meta__categories");
const projectDesc = document.querySelector(".project-meta__desc");
const projectLinks = document.querySelector(".project-meta__links");
const infoLink = document.querySelector(".nav-link--info");
const homeButton = document.querySelector(".site-title__home");
const portfolioLetters = document.querySelectorAll(".site-title__portfolio .letter");
const infoLetters = document.querySelectorAll(".nav-info__word .letter");

const PROJECTS = {
  "objects-general": {
    title: "Objects for General Use ➷",
    categories: "Product, Editorial, Exhibition",
    description:
      "A collection of standardized objects presented as tools for general use. The project examines how systems of measurement, instruction, and handling shape our relationship to everyday objects.",
    media: [
      { type: "image", src: "thumbnails/Objects_General_1.jpg", alt: "Objects for General Use" },
      { type: "video", src: "thumbnails/objects_4.mov" },
      { type: "image", src: "thumbnails/Objects_2.jpg", alt: "Objects for General Use" },
      { type: "image", src: "thumbnails/objects_5.jpg", alt: "Objects for General Use" },
      { type: "image", src: "thumbnails/Objects_6.jpg", alt: "Objects for General Use" },
      { type: "image", src: "thumbnails/Objects_3.jpg", alt: "Objects for General Use" },

    ],
  },
  commencement: {
    title: "RISD Commencement ☞ ",
    categories: "Motion, Identity, Editorial",
    description:
      "Inspired by the gestures of overlap and shared making. Threads, hands, and objects weave together RISD’s cross-disciplinary spirit and celebrate the craft that connects us all. Designed with Li Huang and Minah Kim in collaboration with RISD Marcom team. Special thanks to Alexis Ghansah for lending us her hands!",
    media: [
      { type: "image", src: "thumbnails/Commencement_1.jpg" },
      { type: "video", src: "thumbnails/commencement_2.mp4" },
      { type: "video", src: "thumbnails/Commencement_6.mp4" },
      { type: "image", src: "thumbnails/commencement_10.jpg" },
      { type: "image", src: "thumbnails/Commencement_7.png" },
      { type: "image", src: "thumbnails/commencement_8.jpg" },
      { type: "image", src: "thumbnails/commencement_4.png", alt: "Commencement" },
      { type: "image", src: "thumbnails/Commencement_3.png", alt: "Commencement" },
      { type: "image", src: "thumbnails/commencement_9.jpg" },
      { type: "video", src: "thumbnails/Commencement_5.mp4" },

      
    ],
  },
  "lg-reactions": {
    title: "Lady Gaga’s MAYHEM BALL 🂠",
    categories: "Editorial, Campaign",
    description:
      "During my internship at Yung Studio, I worked across UI/UX, motion, stage design, and front-end development for Lady Gaga’s MAYHEM BALL. I helped shape the hand-drawn identity, interactive stage experience, and LADYGAGA.com takeovers, translating the world of MAYHEM into digital experiences tied to lyrics and merch.",
    media: [
      { type: "image", src: "thumbnails/LG_Reactions.jpg", alt: "LG Reactions" },
      { type: "video", src: "thumbnails/LG_5.mp4" },
      { type: "video", src: "thumbnails/LG_12.mp4", alt: "LG Reactions" },
      { type: "image", src: "thumbnails/LG_11.webp", alt: "LG Reactions" },
      { type: "image", src: "thumbnails/LG_3.png", alt: "LG Reactions" },
      { type: "video", src: "thumbnails/LG_10.mp4", alt: "LG Reactions" },
      { type: "image", src: "thumbnails/LG_7.webp", alt: "LG Reactions" },
      { type: "video", src: "thumbnails/LG_8.mp4" },
      { type: "image", src: "thumbnails/LG_6.png", alt: "LG Reactions" },

    ],
  },
  "plain-sight": {
    title: "In Plain Sight ⌕",
    categories: "Identity, Editorial, Motion, Product",
    description:
      "Visual investigations into what hides in ordinary view.",
    media: [{ type: "video", src: "thumbnails/PlainSight_1.mp4" }],
  },
  tmi: {
    title: "Too Much Information ⏱︎",
    categories: "Identity, Publication, Motion",
    description: `Too Much Information (TMI) is an intergenerational event series centered on shared learning. Daniel Lucas and I have designed its visual identity since the beginning, most recently extending it across the program, print materials, merchandise, and website for its third iteration on ritual and the magic of trusting simple things.`,
    links: [
      {
        before: "Visit TMI: ",
        href: "https://toomuchinformation.info/",
        text: "toomuchinformation.info",
      },
      {
        before: "Learn more about programming: ",
        href: "https://problemlibrary.org/",
        text: "problemlibrary.org",
      },
    ],
    media: [
      { type: "image", src: "thumbnails/TMI_5.jpg", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_6.jpg", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_10.png", alt: "TMI" },
      { type: "video", src: "thumbnails/TMI_9.mp4", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_11.jpg", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_7.jpg", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_4.png", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_3.png", alt: "TMI" },
      { type: "image", src: "thumbnails/TMI_8.png", alt: "TMI" },
    ],
  },
  castle: {
    title: "Castle",
    categories: "Identity, logomark",
    description: `Castle curates furniture, art, and objects that bring character unexpected delight to the home. Its identity centers on a bespoke typeface inspired by Irish letterforms, balancing tradition with a contemporary sensibility. Photography by Danica Taylor.

Visit 238 King Street, San Francisco, or text (415) 797-4006 for sales and appointments.`,
    media: [
      { type: "image", src: "thumbnails/Castle_1.png", alt: "Castle" },
      { type: "image", src: "thumbnails/castle_2.png", alt: "Castle" },
      { type: "video", src: "thumbnails/castle_3.mp4" },
      { type: "image", src: "thumbnails/Castle_6.jpg" },
      { type: "image", src: "thumbnails/castle_4.png" },
      { type: "image", src: "thumbnails/castle_7.png" },


    ],
  },
  "risd-yearbook-2026": {
    title: "RISD Yearbook 2026 ⛰︎",
    categories: "Editorial, Publication, Identity",
    description: "Built around the idea of a companion for wandering, the yearbook follows graduating students as they move beyond RISD and into what comes next. I helped develop its creative identity and direction, shaping how the theme came to life through the book’s imagery, editorial approach, and photography.",
    links: [
      {
        before: "Designed with the ",
        href: "https://www.risdguild.com/",
        text: "RISD Design Guild",
      },
    ],
    media: [
      { type: "image", src: "thumbnails/YB_2.png", alt: "RISD Yearbook 2026" },
      { type: "image", src: "thumbnails/YB_5.jpg", alt: "RISD Yearbook 2026" },
      { type: "video", src: "thumbnails/YB_1.mp4", alt: "RISD Yearbook 2026" },
      { type: "image", src: "thumbnails/YB_1.jpg", alt: "RISD Yearbook 2026" },
      { type: "image", src: "thumbnails/YB_3.jpg", alt: "RISD Yearbook 2026" },
      { type: "image", src: "thumbnails/YB_4.jpg", alt: "RISD Yearbook 2026" },
    ],
  },
  sfmoma: {
    title: "SFMOMA 𖡎",
    categories: "Identity, Editorial, Exhibition",
    description: "Work for the San Francisco Museum of Modern Art.",
    media: [
      { type: "image", src: "thumbnails/sfmoma_5.jpg", alt: "SFMOMA" },
      { type: "image", src: "thumbnails/sfmoma_2.jpg", alt: "SFMOMA" },

      { type: "image", src: "thumbnails/sfmoma_1.jpg", alt: "SFMOMA" },
      { type: "image", src: "thumbnails/sfmoma_8.png", alt: "SFMOMA" },

      { type: "image", src: "thumbnails/sfmoma_4.jpg", alt: "SFMOMA" },
      { type: "image", src: "thumbnails/sfmoma_7.jpg", alt: "SFMOMA" },
      { type: "image", src: "thumbnails/sfmoma_9.png", alt: "SFMOMA" },
    ],
  },
};

const PORTFOLIO_STEP = { x: 0.44, y: 0.4 };
const SCROLL_RANGE_RATIO = 0.7;
const INFO_ANIM_MS = 900;

// Whole-page smooth scroll ease: lower = floatier, higher = snappier (try 0.04–0.15)
const SMOOTH_SCROLL_EASE = 0.5;
// Project gallery: how strongly vertical trackpad scroll maps to horizontal movement
const PROJECT_GALLERY_SCROLL_SPEED = 2.4;

const motionEnabled = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let isInfoMode = false;
let isProjectMode = false;
let currentProjectId = null;
let isAnimating = false;
let animFrame = null;
let decorativeAmount = 0;

let scrollTarget = window.scrollY;
let scrollCurrent = window.scrollY;
let smoothScrollRaf = null;
let ignoreNativeScroll = false;

function isOverlayMode() {
  return isInfoMode || isProjectMode;
}

function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function getMaxScroll() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function setScrollPosition(y, instant = false) {
  const next = clamp(y, 0, getMaxScroll());
  scrollTarget = next;
  if (instant || !motionEnabled) {
    scrollCurrent = next;
    ignoreNativeScroll = true;
    window.scrollTo(0, next);
    ignoreNativeScroll = false;
  }
}

function tickSmoothScroll() {
  smoothScrollRaf = null;

  if (!motionEnabled || isOverlayMode()) {
    scrollCurrent = window.scrollY;
    scrollTarget = scrollCurrent;
    return;
  }

  const max = getMaxScroll();
  scrollTarget = clamp(scrollTarget, 0, max);
  scrollCurrent = lerp(scrollCurrent, scrollTarget, SMOOTH_SCROLL_EASE);

  if (Math.abs(scrollTarget - scrollCurrent) < 0.15) {
    scrollCurrent = scrollTarget;
  }

  ignoreNativeScroll = true;
  window.scrollTo(0, scrollCurrent);
  ignoreNativeScroll = false;

  updateScrollTypography();

  if (scrollCurrent !== scrollTarget) {
    smoothScrollRaf = requestAnimationFrame(tickSmoothScroll);
  }
}

function requestSmoothScrollTick() {
  if (!motionEnabled || isOverlayMode() || smoothScrollRaf) return;
  smoothScrollRaf = requestAnimationFrame(tickSmoothScroll);
}

function onWheelSmoothScroll(event) {
  if (isProjectMode && projectGallery) {
    event.preventDefault();
    const dominant =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    projectGallery.scrollLeft += dominant * PROJECT_GALLERY_SCROLL_SPEED;
  }
}

if (true) {
  window.addEventListener("wheel", onWheelSmoothScroll, { passive: false });
}

function getScrollProgress() {
  const range = Math.max(window.innerHeight * SCROLL_RANGE_RATIO, 1);
  return clamp(window.scrollY / range, 0, 1);
}

function getArcOffset(index, total) {
  const mid = (total - 1) / 2;
  const u = mid === 0 ? 0 : (index - mid) / mid;
  const radius = clamp(window.innerWidth * 0.028, 18, 32);

  return {
    x: u * radius * 0.42,
    y: -(1 - u * u) * radius * 0.62,
  };
}

function getSafeScale(maxOffsetX, maxOffsetY) {
  const scaleX = maxOffsetX > 0 ? clamp((window.innerWidth * 0.1) / maxOffsetX, 0.55, 1) : 1;
  const scaleY = maxOffsetY > 0 ? clamp((window.innerHeight * 0.05) / maxOffsetY, 0.55, 1) : 1;
  return Math.min(scaleX, scaleY);
}

function applyTypography(amount) {
  const portfolioScale = getSafeScale(
    (portfolioLetters.length - 1) * PORTFOLIO_STEP.x * 16,
    (portfolioLetters.length - 1) * PORTFOLIO_STEP.y * 16
  );

  portfolioLetters.forEach((letter, index) => {
    const x = index * PORTFOLIO_STEP.x * amount * portfolioScale;
    const y = index * PORTFOLIO_STEP.y * amount * portfolioScale;
    letter.style.transform = `translate(${x}em, ${y}em)`;
  });

  let maxInfoX = 0;
  let maxInfoUp = 0;

  infoLetters.forEach((_, index) => {
    const offset = getArcOffset(index, infoLetters.length);
    maxInfoX = Math.max(maxInfoX, Math.abs(offset.x));
    maxInfoUp = Math.max(maxInfoUp, Math.abs(offset.y));
  });

  const infoScale = getSafeScale(maxInfoX, maxInfoUp);

  infoLetters.forEach((letter, index) => {
    const offset = getArcOffset(index, infoLetters.length);
    const x = offset.x * amount * infoScale;
    const y = offset.y * amount * infoScale;
    letter.style.transform = `translate(${x}px, ${y}px)`;
  });
}

function updateScrollTypography() {
  if (!motionEnabled || isOverlayMode() || isAnimating) return;
  decorativeAmount = easeInOutSine(getScrollProgress());
  applyTypography(decorativeAmount);
}

function animateDecorative(toValue) {
  return new Promise((resolve) => {
    if (!motionEnabled) {
      decorativeAmount = toValue;
      applyTypography(decorativeAmount);
      resolve();
      return;
    }

    if (animFrame) cancelAnimationFrame(animFrame);

    const from = decorativeAmount;
    const start = performance.now();
    isAnimating = true;

    function tick(now) {
      const t = clamp((now - start) / INFO_ANIM_MS, 0, 1);
      decorativeAmount = lerp(from, toValue, easeInOutSine(t));
      applyTypography(decorativeAmount);

      if (t < 1) {
        animFrame = requestAnimationFrame(tick);
        return;
      }

      animFrame = null;
      decorativeAmount = toValue;
      applyTypography(decorativeAmount);
      isAnimating = false;
      resolve();
    }

    animFrame = requestAnimationFrame(tick);
  });
}

function configureAutoplayVideo(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("loop", "");
  video.setAttribute("autoplay", "");

  const tryPlay = () => {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener("loadeddata", tryPlay, { once: true });
  }
}

function renderProjectLinks(project) {
  if (!projectLinks) return;

  projectLinks.innerHTML = "";

  const hasCredit = Boolean(project.credit);
  const hasLinks = Boolean(project.links && project.links.length);

  if (!hasCredit && !hasLinks) {
    projectLinks.hidden = true;
    return;
  }

  if (hasCredit) {
    projectLinks.appendChild(document.createTextNode(project.credit));
  }

  if (hasLinks) {
    project.links.forEach((link, index) => {
      if (hasCredit || index > 0) projectLinks.appendChild(document.createElement("br"));
      if (link.before) projectLinks.appendChild(document.createTextNode(link.before));

      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.text || link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      projectLinks.appendChild(anchor);
    });
  }

  projectLinks.hidden = false;
}

function renderProjectMedia(project) {
  if (!projectGallery) return;
  projectGallery.innerHTML = "";

  project.media.forEach((item) => {
    const wrap = document.createElement("div");
    wrap.className = "project-gallery__item";

    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      configureAutoplayVideo(video);
      wrap.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || project.title;
      wrap.appendChild(img);
    }

    projectGallery.appendChild(wrap);
  });

  projectGallery.scrollLeft = 0;
}

function openProject(projectId) {
  const project = PROJECTS[projectId];
  if (!project || !projectPanel) return;

  if (isInfoMode) {
    isInfoMode = false;
    document.body.classList.remove("is-info");
    document.documentElement.classList.remove("is-info");
    if (infoPanel) infoPanel.setAttribute("aria-hidden", "true");
    if (infoLink) {
      infoLink.classList.remove("is-active");
      infoLink.removeAttribute("aria-current");
    }
  }

  currentProjectId = projectId;
  isProjectMode = true;
  document.body.classList.add("is-project");
  document.documentElement.classList.add("is-project");
  projectPanel.setAttribute("aria-hidden", "false");

  if (projectTitle) projectTitle.textContent = project.title;
  if (projectCategories) projectCategories.textContent = project.categories;
  if (projectDesc) projectDesc.textContent = project.description;
  renderProjectLinks(project);
  renderProjectMedia(project);

  document.title = `${project.title} — Nadine Macapagal's Portfolio`;
  history.replaceState(null, "", `#project/${projectId}`);
  setScrollPosition(0, true);
  animateDecorative(1);
}

function closeProject() {
  if (!isProjectMode) return;

  isProjectMode = false;
  currentProjectId = null;
  document.body.classList.remove("is-project");
  document.documentElement.classList.remove("is-project");
  if (projectPanel) projectPanel.setAttribute("aria-hidden", "true");
  if (projectGallery) projectGallery.innerHTML = "";
  if (projectLinks) {
    projectLinks.innerHTML = "";
    projectLinks.hidden = true;
  }

  document.title = "Nadine Macapagal's Portfolio";
  history.replaceState(null, "", window.location.pathname + window.location.search);
  setScrollPosition(0, true);
  animateDecorative(0);
}

async function setInfoMode(next) {
  if (next === isInfoMode || isAnimating) return;

  if (next && isProjectMode) {
    closeProject();
  }

  isInfoMode = next;
  document.body.classList.toggle("is-info", isInfoMode);
  document.documentElement.classList.toggle("is-info", isInfoMode);
  document.title = isInfoMode
    ? "Information — Nadine Macapagal's Portfolio"
    : "Nadine Macapagal's Portfolio";

  if (infoPanel) {
    infoPanel.setAttribute("aria-hidden", String(!isInfoMode));
  }

  if (infoLink) {
    infoLink.classList.toggle("is-active", isInfoMode);
    if (isInfoMode) {
      infoLink.setAttribute("aria-current", "page");
    } else {
      infoLink.removeAttribute("aria-current");
    }
  }

  if (isInfoMode) {
    history.replaceState(null, "", "#information");
    const current = decorativeAmount;
    setScrollPosition(0, true);
    decorativeAmount = current;
    applyTypography(decorativeAmount);
    await animateDecorative(1);
  } else {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setScrollPosition(0, true);
    await animateDecorative(0);
  }
}

function setViewMode(isSingle) {
  if (!grid || !gridBtn || !singleBtn) return;

  grid.classList.toggle("is-single", isSingle);
  gridBtn.classList.toggle("is-active", !isSingle);
  singleBtn.classList.toggle("is-active", isSingle);
  gridBtn.setAttribute("aria-pressed", String(!isSingle));
  singleBtn.setAttribute("aria-pressed", String(isSingle));
}

function firstSentence(text) {
  if (!text) return "";
  const cleaned = String(text).replace(/\s+/g, " ").trim();
  const match = cleaned.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : cleaned;
}

function populateCardExcerpts() {
  document.querySelectorAll(".project-card[data-project]").forEach((card) => {
    const projectId = card.dataset.project;
    const project = PROJECTS[projectId];
    const hit = card.querySelector(".project-card__hit");
    const title = card.querySelector(".card-title");
    if (!project || !hit || !title) return;

    let excerpt = card.querySelector(".card-excerpt");
    if (!excerpt) {
      excerpt = document.createElement("p");
      excerpt.className = "card-excerpt";
      title.insertAdjacentElement("afterend", excerpt);
    }
    excerpt.textContent = firstSentence(project.description);
  });
}

populateCardExcerpts();

if (gridBtn && singleBtn && grid) {
  gridBtn.addEventListener("click", () => setViewMode(false));
  singleBtn.addEventListener("click", () => setViewMode(true));
}

document.querySelectorAll(".project-card[data-project]").forEach((card) => {
  const hit = card.querySelector(".project-card__hit");
  const projectId = card.dataset.project;
  if (!hit || !projectId || card.classList.contains("project-card--disabled") || hit.disabled) {
    return;
  }
  hit.addEventListener("click", () => openProject(projectId));
});

if (infoLink) {
  infoLink.addEventListener("click", (event) => {
    if (!infoPanel) return;
    event.preventDefault();
    setInfoMode(true);
  });
}

if (homeButton) {
  homeButton.addEventListener("click", () => {
    if (isProjectMode) {
      closeProject();
      return;
    }
    if (isInfoMode) setInfoMode(false);
  });
}

function syncFromHash() {
  const hash = window.location.hash;

  if (hash === "#information") {
    if (isProjectMode) closeProject();
    if (!isInfoMode) setInfoMode(true);
    return;
  }

  const projectMatch = hash.match(/^#project\/(.+)$/);
  if (projectMatch && PROJECTS[projectMatch[1]]) {
    openProject(projectMatch[1]);
    return;
  }

  if (isProjectMode) closeProject();
  if (isInfoMode) setInfoMode(false);
}

window.addEventListener("hashchange", syncFromHash);

let ticking = false;

window.addEventListener(
  "scroll",
  () => {
    if (ignoreNativeScroll) return;

    if (!isOverlayMode()) {
      scrollTarget = window.scrollY;
      scrollCurrent = window.scrollY;
    }

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateScrollTypography();
        ticking = false;
      });
    }
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  scrollTarget = clamp(scrollTarget, 0, getMaxScroll());
  scrollCurrent = clamp(window.scrollY, 0, getMaxScroll());

  if (!isOverlayMode() && !isAnimating) {
    decorativeAmount = easeInOutSine(getScrollProgress());
  }
  applyTypography(decorativeAmount);
});

if (window.location.hash === "#information" || window.location.hash.startsWith("#project/")) {
  syncFromHash();
} else {
  if (infoPanel) infoPanel.setAttribute("aria-hidden", "true");
  if (projectPanel) projectPanel.setAttribute("aria-hidden", "true");
  updateScrollTypography();
}

document.querySelectorAll("video").forEach(configureAutoplayVideo);

function waitForGridMedia(el) {
  if (el.tagName === "IMG") {
    if (el.complete && el.naturalWidth > 0) return Promise.resolve();
    return new Promise((resolve) => {
      el.addEventListener("load", resolve, { once: true });
      el.addEventListener("error", resolve, { once: true });
    });
  }

  if (el.tagName === "VIDEO") {
    if (el.readyState >= 2) return Promise.resolve();
    return new Promise((resolve) => {
      el.addEventListener("loadeddata", resolve, { once: true });
      el.addEventListener("error", resolve, { once: true });
    });
  }

  return Promise.resolve();
}

function revealHomepageWhenGridReady() {
  const gridMedia = document.querySelectorAll(".project-grid .card-image img, .project-grid .card-image video");
  if (!gridMedia.length) {
    document.body.classList.remove("is-loading");
    return;
  }

  const loader = document.querySelector(".page-loader");
  const timeout = new Promise((resolve) => setTimeout(resolve, 8000));

  Promise.race([
    Promise.all([...gridMedia].map(waitForGridMedia)),
    timeout,
  ]).then(() => {
    document.body.classList.remove("is-loading");
    if (loader) {
      loader.setAttribute("aria-busy", "false");
      window.setTimeout(() => {
        loader.hidden = true;
      }, 700);
    }
  });
}

revealHomepageWhenGridReady();
