gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const images = gsap.utils.toArray('.image-frame');
    const totalImages = images.length;
    const scrollHeight = (totalImages + 1) * 100; // Extra 100vh for smooth ending

    // Set up the scroll container
    document.body.style.height = `${scrollHeight}vh`;

    // Create timeline for image sequence
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".gallery",
            start: "top top",
            end: `+=${scrollHeight}vh`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
        }
    });

    // Set initial state
    gsap.set(images, { opacity: 0, scale: 0.8 });

    // Create animations for each image
    images.forEach((image, i) => {
        const duration = 1 / totalImages;
        const delay = i * duration;

        tl.to(image, {
            opacity: 1,
            scale: 1,
            duration: duration / 2,
        }, delay)
        .to(image, {
            opacity: 0,
            scale: 1.2,
            duration: duration / 2,
        }, delay + duration / 2);
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: white;
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Update progress bar
    ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: `+=${scrollHeight}vh`,
        onUpdate: (self) => {
            progressBar.style.width = `${self.progress * 100}%`;
        }
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
