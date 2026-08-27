function configureAutoplayVideo(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.controls = false;
  video.setAttribute("muted", "true");
  video.setAttribute("playsinline", "true");
  video.setAttribute("webkit-playsinline", "true");
  video.setAttribute("loop", "");
  video.setAttribute("autoplay", "");
  video.removeAttribute("controls");

  const tryPlay = () => {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener("loadeddata", tryPlay, { once: true });
    video.addEventListener("canplay", tryPlay, { once: true });
  }
}

document.querySelectorAll("video").forEach(configureAutoplayVideo);

document.addEventListener(
  "touchstart",
  () => {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.play().catch(() => {});
    });
  },
  { once: true, passive: true }
);
