document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Calculate the total width of all gallery items plus gaps
    const track = document.querySelector('.gallery-track');
    const trackWidth = track.offsetWidth;
    const windowWidth = window.innerWidth;
    
    // Create the horizontal scrolling effect
    gsap.to('.gallery-track', {
        x: -(trackWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".gallery-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
        }
    });

    // Fade in effect for images as they enter the viewport
    const images = gsap.utils.toArray('.gallery-item');
    images.forEach((image) => {
        gsap.fromTo(image, 
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: image,
                    start: "left center",
                    end: "right center",
                    horizontal: true,
                    containerAnimation: gsap.to('.gallery-track', {x: -(trackWidth - windowWidth)}),
                }
            }
        );
    });
});
