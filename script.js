// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.service-card, .gallery-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Create message with all form details
    const message = `New enquiry from website:\n\nName: ${data.name || 'Not provided'}\nEmail: ${data.email || 'Not provided'}\nPhone: ${data.phone || 'Not provided'}\nService: ${data.service || 'Not specified'}\nMessage: ${data.message || 'No message'}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Facebook Messenger link - using the page ID from the Facebook link in footer
    const messengerLink = `https://m.me/100054419772372?text=${encodedMessage}`;
    
    // Open Facebook Messenger with pre-filled message
    window.open(messengerLink, '_blank');
    
    // Show success message
    alert('Thank you! Your message has been sent to our Facebook Messenger. We\'ll respond as soon as possible.');
    contactForm.reset();
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').innerHTML = `&copy; ${currentYear} Magee Groundworks. All rights reserved.`;

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = 0.5;
    
    parallax.style.transform = `translateY(${scrolled * speed}px)`;
});

// Animated Counter for Stats
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            
            const counters = entry.target.querySelectorAll('.stat h3');
            counters.forEach(counter => {
                const value = parseInt(counter.textContent);
                counter.dataset.suffix = counter.textContent.replace(/\d+/g, '');
                animateValue(counter, 0, value, 2000);
            });
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Hamburger Animation
hamburger.addEventListener('click', function() {
    const bars = this.querySelectorAll('.bar');
    bars[0].style.transform = this.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
    bars[1].style.opacity = this.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = this.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
});

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Load More Gallery Items
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenGalleryItems = [];

// Initially hide some gallery items (show first 12)
galleryItems.forEach((item, index) => {
    if (index >= 12) {
        item.classList.add('hidden');
        hiddenGalleryItems.push(item);
    }
});

// Show/hide load more button based on hidden items
if (hiddenGalleryItems.length === 0) {
    loadMoreBtn.style.display = 'none';
}

loadMoreBtn.addEventListener('click', () => {
    const itemsToShow = hiddenGalleryItems.splice(0, 6); // Show 6 more items
    
    itemsToShow.forEach(item => {
        item.classList.remove('hidden');
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Hide button if no more items
    if (hiddenGalleryItems.length === 0) {
        loadMoreBtn.style.display = 'none';
    }
});