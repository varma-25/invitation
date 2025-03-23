document.addEventListener("DOMContentLoaded", function () {
    // Curtain Effect
    setTimeout(() => {
        document.querySelectorAll(".curtain").forEach(curtain => {
            curtain.style.width = "0";
            curtain.style.visibility = "hidden";
        });
    }, 2000);

    // Play Sound After User Click
    const backgroundMusic = new Audio("music.mp3");
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.7; // Adjust volume

    function playMusic() {
        backgroundMusic.play().catch(err => console.log("Audio Error:", err));
        document.body.removeEventListener("click", playMusic);
    }

    document.body.addEventListener("click", playMusic);

    // Petal Effect
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        document.querySelector(".petals").appendChild(petal);
        setTimeout(() => petal.remove(), 5000);
    }

    // Generate petals continuously
    setInterval(createPetal, 500);

    // Smoothly Fade-in Text Elements
    const fadeElements = document.querySelectorAll(".fade-in-sequence");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("fade-in");
        }, (index + 1) * 500);
    });

    // QR Code Hover Effect
    document.querySelectorAll(".qr-codes img").forEach(qr => {
        qr.addEventListener("mouseenter", () => {
            qr.style.transform = "scale(1.2)";
        });
        qr.addEventListener("mouseleave", () => {
            qr.style.transform = "scale(1)";
        });
    });
});
