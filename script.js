// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all image containers
    const images = document.querySelectorAll('.image-container');

    // Create animation for each image
    images.forEach((image) => {
        gsap.fromTo(image, 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top bottom-=100",
                    end: "top center",
                    toggleActions: "play none none reverse",
                    // markers: true, // Enable for debugging
                }
            }
        );
    });
});
