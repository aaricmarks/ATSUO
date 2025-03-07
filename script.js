gsap.registerPlugin(ScrollTrigger);

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
            end: "+=250%", // Reduced from 300% for faster scrolling
            scrub: 0.8, // Smoother scrub effect
            pin: true,
            anticipatePin: 1,
        }
    });

    // Add subtle floating effect to images
    document.querySelectorAll('.gallery-image').forEach((image, index) => {
        gsap.to(image, {
            scale: 0.95, // Smaller scale change for subtle effect
            y: -10, // Slight vertical movement
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

// Optional: Add a subtle parallax effect to the images
document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 5;
        const yPercent = (y / rect.height - 0.5) * 5;
        
        gsap.to(wrapper.querySelector('.gallery-image'), {
            duration: 0.5,
            x: xPercent,
            y: yPercent,
            ease: 'power2.out'
        });
    });
    
    wrapper.addEventListener('mouseleave', () => {
        gsap.to(wrapper.querySelector('.gallery-image'), {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: 'power2.out'
        });
    });
});
