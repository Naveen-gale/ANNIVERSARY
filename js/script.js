$(function () {

    $('#fullpage-s').fullpage();

    const audio = document.getElementById("bg-audio");

    // Try auto-play muted
    audio.play().then(() => {
        console.log("Autoplay started (muted)");
    }).catch(err => {
        console.log("Autoplay blocked:", err);
    });

    // On first user interaction, unmute and continue
    document.addEventListener("click", function autoUnmute() {
        audio.muted = false;
        audio.play();
        console.log("Music unmuted and playing");
        document.removeEventListener("click", autoUnmute);
    });

    // Music button toggle
    $(document).on("click", ".btn-music", function () {
        if (audio.paused) {
            audio.play();
            $(this).removeClass("paused");
        } else {
            audio.pause();
            $(this).addClass("paused");
        }
    });

});
