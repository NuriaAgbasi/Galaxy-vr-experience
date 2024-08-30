
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
    duration: 1.5,
    y: -50,
    opacity: 0
});

gsap.from(".hero-content p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5
});
gsap.from(".book-now-btn, .discover-btn", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    delay: 1,
    onComplete: function () {
        gsap.set(".book-now-btn, .discover-btn", { opacity: 1, scale: 1 });
    }
});




gsap.from(".card", {
    scrollTrigger: ".card",
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.3
});
