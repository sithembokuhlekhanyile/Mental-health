// Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        testimonialSlides[index].classList.add('active');
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function () {
            currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
            showSlide(currentSlide);
        });

        nextButton.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        });

        // Auto-rotate testimonials
        setInterval(function () {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Hero Video Play Button Logic
    document.addEventListener('DOMContentLoaded', () => {
        const video = document.querySelector('.hero-video video');
        const playBtn = document.querySelector('.play-button');

        if (video && playBtn) {
            playBtn.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playBtn.style.display = 'none'; // Hide play button
                } else {
                    video.pause();
                    playBtn.style.display = 'flex';
                }
            });
        }
    });

    // Sticky Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });