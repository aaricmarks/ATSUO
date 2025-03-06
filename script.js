// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all images with the scroll-image class
    const images = document.querySelectorAll('.scroll-image');

    // Create animation for each image
    images.forEach((image) => {
        // Create a timeline for each image
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image.parentElement, // Use the parent wrapper as trigger
                start: "top center+=20%",
                end: "bottom center-=20%",
                toggleActions: "play none none reverse",
                // markers: true, // Uncomment for debugging
            }
        });

        // Add animations to the timeline
        tl.to(image, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
        });
    });

    // Smooth scroll animation for the hero section
    gsap.from('h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Optional: Add smooth scroll behavior for the entire page
document.documentElement.style.scrollBehavior = 'smooth';
