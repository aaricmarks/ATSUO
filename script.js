gsap.registerPlugin(ScrollTrigger);

// Wait for all images to load
window.addEventListener('load', () => {
    const imageContainer = document.querySelector('.image-container');
    
    // Calculate the total width of all images plus gaps
    const totalWidth = Array.from(imageContainer.children).reduce((acc, el) => {
        const style = window.getComputedStyle(el);
        const width = el.offsetWidth;
        const marginRight = parseInt(style.marginRight);
        return acc + width + marginRight;
    }, 0);

    // Create the horizontal scroll animation
    gsap.to('.image-container', {
        x: -totalWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
            trigger: ".gallery",
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
        }
    });

    // Add parallax effect to images
    document.querySelectorAll('.gallery-image').forEach((image, index) => {
        gsap.to(image, {
            scale: 1.1,
            scrollTrigger: {
                trigger: image.parentElement,
                containerAnimation: ScrollTrigger.getById("scrollTrigger"),
                start: "left center",
                end: "right center",
                scrub: true
            }
        });
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
