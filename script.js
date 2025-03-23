document.addEventListener("DOMContentLoaded", function () {
    // 🎭 Curtain Effect
    setTimeout(() => {
        document.querySelectorAll(".curtain").forEach(curtain => {
            curtain.style.width = "0";
            curtain.style.visibility = "hidden";
        });
    }, 2000);

    // 🎵 Background Music
    const backgroundMusic = document.getElementById("background-music");
    const playButton = document.getElementById("play-music-btn");

    // Try to play music with fallback
    function playMusic() {
        if (!backgroundMusic) return;

        backgroundMusic.volume = 0.7; // Set volume
        backgroundMusic.muted = true; // Start muted for smooth entry

        // Attempt autoplay
        backgroundMusic.play().then(() => {
            setTimeout(() => {
                backgroundMusic.muted = false; // Unmute after 1 second
            }, 1000);
        }).catch(() => {
            // Autoplay blocked: show the play button
            console.warn("Autoplay blocked. Displaying play button.");
            playButton.style.display = "block";
        });
    }

    // Start autoplay attempt
    playMusic();

    // Allow manual play on button click
    playButton.addEventListener("click", () => {
        backgroundMusic.play();
        playButton.style.display = "none"; // Hide button after play
    });

    // 🌸 Petal Effect
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        document.querySelector(".petals").appendChild(petal);
        setTimeout(() => petal.remove(), 5000);
    }

    setInterval(createPetal, 500);

    // 📜 Auto-Scroll Effect
    function autoScroll() {
        const scrollContainer = document.querySelector(".scroll-container");
        const scrollSpeed = 1; // Pixels per step
        const scrollDelay = 30; // Delay between steps (in ms)
        const pauseTime = 3000; // Pause at bottom before scrolling up

        function scrollStep() {
            if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
                setTimeout(() => {
                    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
                }, pauseTime);
            } else {
                scrollContainer.scrollBy(0, scrollSpeed);
                setTimeout(scrollStep, scrollDelay);
            }
        }

        scrollStep();
    }

    setTimeout(autoScroll, 3000); // Start scrolling after 3s

    // 📷 QR Code Hover Effect
    document.querySelectorAll(".qr-codes img").forEach(qr => {
        qr.addEventListener("mouseenter", () => {
            qr.style.transform = "scale(1.2)";
        });
        qr.addEventListener("mouseleave", () => {
            qr.style.transform = "scale(1)";
        });
    });

    // 👆 Fallback: Play music if user interacts with the page
    document.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            playMusic();
        }
    });
});
