```javascript
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for all images to load
window.addEventListener('load', () => {
    // Animate header on page load
    gsap.from('header', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate images on scroll
    const images = document.querySelectorAll('.image-container');
    
    images.forEach((container, index) => {
        gsap.to(container, {
            scrollTrigger: {
                trigger: container,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1
        });

        // Add parallax effect
        gsap.to(container.querySelector('.gallery-image'), {
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: 50,
            ease: 'none'
        });
    });

    // Fade header on scroll
    ScrollTrigger.create({
        start: 'top top',
        end: '+=100',
        onUpdate: (self) => {
            gsap.to('header', {
                opacity: 1 - self.progress,
                duration: 0.1
            });
        }
    });
});

// Optional: Add smooth scrolling for better experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```
