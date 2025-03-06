// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from('h1', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.subtitle', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});

// Gallery images animation
const images = document.querySelectorAll('.image-wrapper');

images.forEach((image) => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
