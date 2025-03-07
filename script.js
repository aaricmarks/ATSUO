gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const images = gsap.utils.toArray('.image-frame');
    const totalImages = images.length;
    const scrollHeight = (totalImages + 0.5) * 100; // Reduced extra space since last image stays

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

        if (i === images.length - 1) {
            // Last image: fade in and stay visible
            tl.to(image, {
                opacity: 1,
                scale: 1,
                duration: duration / 2,
                ease: "power2.inOut"
            }, delay);
        } else {
            // All other images: fade in and out
            tl.to(image, {
                opacity: 1,
                scale: 1,
                duration: duration / 2,
                ease: "power2.inOut"
            }, delay)
            .to(image, {
                opacity: 0,
                scale: 1.1,
                duration: duration / 2,
                ease: "power2.inOut"
            }, delay + duration / 2);
        }
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
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

    // Ensure images maintain aspect ratio
    const preloadImages = () => {
        const imageElements = document.querySelectorAll('.sequence-image');
        imageElements.forEach(img => {
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.style.width = 'auto';
            img.style.height = 'auto';
        });
    };

    // Run after images are loaded
    window.addEventListener('load', preloadImages);
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
