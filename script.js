// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener('load', () => {
    gsap.to('.loader', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector('.loader').style.display = 'none';
        }
    });
});

// Initialize scroll animations
function initScrollAnimations() {
    // Animate images on scroll
    const images = document.querySelectorAll('.scroll-image');
    
    images.forEach((image) => {
        gsap.fromTo(image,
            {
                opacity: 0,
                scale: 1.1
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            }
        );
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

// Smooth scroll behavior for the entire page
document.documentElement.style.scrollBehavior = 'smooth';
