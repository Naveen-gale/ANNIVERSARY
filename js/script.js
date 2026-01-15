$(document).ready(function () {

  // Check fullpage loaded
  if (!$.fn.fullpage) {
    console.error("fullPage.js not loaded");
    return;
  }

  // Init fullpage
  $('#fullpage-s').fullpage({
    navigation: true,
    scrollingSpeed: 700
  });

  const audio = document.getElementById("bg-audio");
  const btn = document.querySelector(".btn-music");

  audio.muted = true;
  audio.volume = 0.8;

  // Try autoplay (muted)
  audio.play().then(() => {
    console.log("Music started muted");
  }).catch(() => {
    console.log("Waiting for user interaction");
  });

  // First interaction enables sound
  function enableSound() {
    audio.muted = false;
    audio.play();
    btn.classList.remove("paused");
    document.removeEventListener("click", enableSound);
    document.removeEventListener("touchstart", enableSound);
  }

  document.addEventListener("click", enableSound);
  document.addEventListener("touchstart", enableSound);

  // Button toggle
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // stop conflict with enableSound

    if (audio.paused) {
      audio.play();
      btn.classList.remove("paused");
    } else {
      audio.pause();
      btn.classList.add("paused");
    }
  });

});
