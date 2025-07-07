// Fallgard™ Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic functionality with proper error handling
    try {
        initNavigation();
        initContactForm();
        initSmoothScrolling();
        initCTAButtons();
        initTestimonialSlider();
        initBlogsCarousel();
        initPerformanceOptimizations();
        
        // Apply fixes
        setTimeout(() => {
            fixNavigation();
            fixTestimonialSlider();
        }, 500);
        
        // Mark document as loaded
        document.body.classList.add('loaded');
    } catch (error) {
        console.error('Error initializing website functionality:', error);
    }
});


// Enhanced Navigation Fix
function fixNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        console.log('Fixing hamburger menu...');
        
        // Remove any existing event listeners by cloning
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        newHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked - toggling menu');
            
            newHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = newHamburger.querySelectorAll('.bar');
            if (newHamburger.classList.contains('active')) {
                bars.forEach((bar, index) => {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    else if (index === 1) bar.style.opacity = '0';
                    else if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                });
            } else {
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = newHamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!newHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = newHamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    }
}

// 🎯 Revolutionary Interactive Features
function initRevolutionaryFeatures() {
    // Magnetic cursor effect for buttons
    initMagneticCursor();
    
    // 3D tilt effect for cards
    init3DTiltEffect();
    
    // Smart scroll progress indicator
    initScrollProgress();
    
    // Dynamic statistics counter
    initStatsCounter();
    
    // Particle system for hero section
    initParticleSystem();
}

// 💖 Emotional Engagement Features
function initEmotionalEngagement() {
    // Heart pulse animation on hover
    const heartElements = document.querySelectorAll('.fas.fa-heart-pulse, .fas.fa-heart');
    heartElements.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.animation = 'heartbeat 0.5s ease-in-out 3';
        });
    });
    
    // Emotional button responses
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createEmotionalRipple(e, this);
            showTrustMessage();
        });
    });
    
    // Success celebration animation
    function createEmotionalRipple(e, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
}

// 🏆 Trust Building Features
function initTrustBuilders() {
    // Live user counter simulation
    initLiveUserCounter();
    
    // Security badges animation
    initSecurityBadges();
    
    // Social proof notifications
    initSocialProof();
    
    // Real-time activity indicators
    initActivityIndicators();
}

// // 🔥 Magnetic Cursor Effect
// function initMagneticCursor() {
//     const magneticElements = document.querySelectorAll('.cta-primary, .cta-secondary, .feature-card-modern, .trust-indicator');
    
//     magneticElements.forEach(element => {
//         element.addEventListener('mousemove', function(e) {
//             const rect = this.getBoundingClientRect();
//             const x = e.clientX - rect.left - rect.width / 2;
//             const y = e.clientY - rect.top - rect.height / 2;
            
//             this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
//         });
        
//         element.addEventListener('mouseleave', function() {
//             this.style.transform = 'translate(0, 0)';
//         });
//     });
// }

// 🎨 3D Tilt Effect
function init3DTiltEffect() {
    const tiltElements = document.querySelectorAll('.feature-card-modern, .testimonial-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// 📊 Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #FF6B6B, #FFD700, #4ECDC4);
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 2px 10px rgba(255, 107, 107, 0.5);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 🔢 Dynamic Statistics Counter
function initStatsCounter() {
    function animateCounter(element, target, duration = 2000) {
        const start = parseInt(element.textContent) || 0;
        const increment = (target - start) / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '');
            }
        }, 16);
    }
    
    // Animate stats when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.dataset.animated) {
                    statNumber.dataset.animated = 'true';
                    const targetValue = parseInt(statNumber.textContent);
                    animateCounter(statNumber, targetValue);
                }
            }
        });
    });
    
    document.querySelectorAll('.stat-item, .demo-stats .stat-item').forEach(stat => {
        observer.observe(stat);
    });
}

// ✨ Particle System for Hero
function initParticleSystem() {
    const hero = document.querySelector('.revolutionary-hero');
    if (!hero) return;
    
    // Create floating elements
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            z-index: 5;
        `;
        
        hero.appendChild(particle);
    }
}

// 👥 Live User Counter
function initLiveUserCounter() {
    const createNotification = (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            font-size: 14px;
            font-weight: 600;
            color: #333;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            border-left: 4px solid ${type === 'success' ? '#10B981' : '#3B82F6'};
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'users'}" style="color: ${type === 'success' ? '#10B981' : '#3B82F6'};"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    };
    
    // Simulate real user activity
    const messages = [
        "Sarah from California just started her free consultation",
        "Michael from Texas is viewing our testimonials",
        "Emma from New York downloaded our safety guide",
        "David from Florida joined 1000+ protected families",
        "Lisa from Georgia requested a demo"
    ];
    
    let messageIndex = 0;
    setInterval(() => {
        createNotification(messages[messageIndex]);
        messageIndex = (messageIndex + 1) % messages.length;
    }, 8000);
    
    // Show initial message after 3 seconds
    setTimeout(() => {
        createNotification("127 families are currently browsing our solutions");
    }, 3000);
}

// 🎉 Trust Message System
function showTrustMessage() {
    const messages = [
        "🎉 Thank you for choosing your family's safety!",
        "💖 Thousands of families trust Fallgard daily",
        "🏆 You're making the smartest choice for your loved ones",
        "🛡️ Your family's guardian angel is almost here!"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const trustMessage = document.createElement('div');
    trustMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        animation: trust-popup 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    `;
    
    trustMessage.textContent = message;
    document.body.appendChild(trustMessage);
    
    setTimeout(() => {
        trustMessage.style.animation = 'trust-popup 0.3s ease-in reverse forwards';
        setTimeout(() => trustMessage.remove(), 300);
    }, 2500);
}

// 🎯 Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Optimize scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Scroll-based animations here
        }, 10);
    }, { passive: true });
}

// Add required CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-10px); }
        75% { transform: translateY(-30px) translateX(5px); }
    }
    
    @keyframes trust-popup {
        0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); }
        100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    }
    
    @keyframes ripple-effect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.header') || document.getElementById('navbar');

    // Make sure elements exist before adding event listeners
    if (hamburger && navMenu) {
        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    if (navLinks && navMenu && hamburger) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Reset hamburger bars
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });    }// Navbar - static appearance
    if (navbar) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    // Static navigation without active highlights
    navLinks.forEach(link => {
        // Only set active class based on current page
        const currentUrl = window.location.pathname;
        const linkUrl = link.getAttribute('href');
        
        if (linkUrl === currentUrl || 
            (currentUrl.endsWith('/') && linkUrl === currentUrl + 'index.html') ||
            (currentUrl === '/index.html' && linkUrl === '/')) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger effect for grid items
                if (entry.target.classList.contains('features-grid') || 
                    entry.target.classList.contains('team-grid') ||
                    entry.target.classList.contains('challenges-grid')) {
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.feature-card, .challenge-card, .research-card, .team-member, .testimonial-card, .about-content, .section-header');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Observe grid containers
    const gridContainers = document.querySelectorAll('.features-grid, .team-grid, .challenges-grid');
    gridContainers.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease-out';
        });
        observer.observe(grid);
    });
}

// Contact form functionality
// function initContactForm() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', async function(e) {
//             e.preventDefault();
            
//             // Get form data
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const phone = document.getElementById('phone').value;
//             const message = document.getElementById('message').value;
            
//             // Simple validation
//             if (!name || !email || !phone || !message) {
//                 showNotification('Please fill in all fields', 'error');
//                 return;
//             }
            
//             // Validate email
//             if (!isValidEmail(email)) {
//                 showNotification('Please enter a valid email address', 'error');
//                 return;
//             }
            
//             try {
//                 // Show loading state
//                 const submitBtn = contactForm.querySelector('button[type="submit"]');
//                 const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';
//                 if (submitBtn) {
//                     submitBtn.textContent = 'Sending...';
//                     submitBtn.disabled = true;
//                 }
                
//                 // Send data to email service
//                 await emailService.sendToEmail({
//                     name,
//                     email,
//                     phone,
//                     message,
//                     source: 'Contact Form'
//                 });
                
//                 // Show success notification
//                 showNotification('Thank you! Your message has been sent successfully.', 'success');
                
//                 // Reset form
//                 contactForm.reset();
                
//                 // Reset button
//                 if (submitBtn) {
//                     submitBtn.textContent = originalBtnText;
//                     submitBtn.disabled = false;
//                 }
//             } catch (error) {
//                 console.error('Form submission error:', error);
//                 showNotification('Failed to send your message. Please try again later.', 'error');
                
//                 // Reset button
//                 const submitBtn = contactForm.querySelector('button[type="submit"]');
//                 if (submitBtn) {
//                     submitBtn.textContent = 'Submit';
//                     submitBtn.disabled = false;
//                 }
//             }
//         });
//     }
// }

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 400px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let index = 0;
    const typeText = () => {
        if (index < text.length) {
            heroTitle.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeText, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeText, 1000);
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-img ');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Stats counter animation
function initStatsCounter() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h3');
                const finalNumber = parseInt(statNumber.textContent);
                animateCounter(statNumber, 0, finalNumber, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Counter animation helper
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const isPercentage = element.textContent.includes('%');
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        element.textContent = current + (isPercentage ? '%' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Easing function
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Dark mode toggle (optional feature)
function initDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Testimonial slider functionality
function initTestimonialSlider() {
    console.log("Initializing testimonial slider");
    const testimonials = document.querySelectorAll('.testimonial-card');
    const navDots = document.querySelectorAll('.testimonial-nav .nav-dot');
    const progressContainer = document.querySelector('.testimonial-progress-container');
    const progressBar = document.querySelector('.testimonial-progress-bar');
    
    let currentIndex = 0;
    let testimonialInterval;
    
    // Make sure we have testimonials to work with
    if (!testimonials.length) {
        console.error("No testimonial cards found");
        return;
    }
    
    // Show progress container
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }
    
    // Function to show testimonial by index
    function showTestimonial(index) {
        // Validate index
        if (index >= testimonials.length) {
            index = 0;
        } else if (index < 0) {
            index = testimonials.length - 1;
        }
        
        // Update current index
        currentIndex = index;
        
        // Hide all testimonials
        testimonials.forEach(card => card.classList.remove('active'));
        
        // Show current testimonial
        testimonials[currentIndex].classList.add('active');
        
        // Update active dot
        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        console.log(`Showing testimonial ${currentIndex + 1}`);
    }
    
    // Start progress bar animation
    function startProgressBar() {
        if (!progressBar) return;
        
        // Reset progress bar
        progressBar.style.width = '0';
        progressBar.style.transition = 'none';
        
        // Force reflow
        progressBar.offsetHeight;
          // Start animation
        progressBar.style.transition = 'width 8s linear';
        progressBar.style.width = '100%';
    }
    
    // Setup automatic rotation
    function startAutoRotation() {
        // Clear any existing interval
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
        }
        
        // Start progress bar
        startProgressBar();
        
        // Set interval
        testimonialInterval = setInterval(() => {
            // Move to next testimonial
            showTestimonial(currentIndex + 1);
            
            // Restart progress bar
            startProgressBar();
        }, 8000);
    }
    
    // Add click handlers to nav dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            startAutoRotation();
        });
    });
    
    // Handle mouse hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        // Pause on hover
        testimonialSection.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
            
            if (progressBar) {
                // Get current progress
                const width = progressBar.offsetWidth;
                const totalWidth = progressContainer ? progressContainer.offsetWidth : 100;
                
                // Pause animation
                progressBar.style.transition = 'none';
                progressBar.style.width = `${width}px`;
            }
        });
        
        // Resume on mouse leave
        testimonialSection.addEventListener('mouseleave', () => {
            if (progressBar) {                // Calculate remaining time
                const width = progressBar.offsetWidth;
                const totalWidth = progressContainer ? progressContainer.offsetWidth : 100;
                const percentComplete = width / totalWidth;
                const remainingTime = Math.max(500, 8000 * (1 - percentComplete));
                
                // Resume animation
                progressBar.style.transition = `width ${remainingTime}ms linear`;
                progressBar.style.width = '100%';
                
                // Schedule next slide
                clearInterval(testimonialInterval);
                setTimeout(() => {
                    showTestimonial(currentIndex + 1);
                    startAutoRotation();
                }, remainingTime);
            } else {
                startAutoRotation();
            }
        });
    }
    
    // Start rotation
    startAutoRotation();
}

// Fixed Navigation Function - Replaces broken ones above
function fixNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.header') || document.getElementById('navbar');

    // Make sure elements exist before adding event listeners
    if (hamburger && navMenu) {
        // Clear existing event listeners by cloning elements
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        // Mobile menu toggle
        newHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked');
            
            newHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = newHamburger.querySelectorAll('.bar');
            if (newHamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking nav links
    if (navLinks && navMenu && hamburger) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const activeHamburger = document.getElementById('hamburger');
                if (activeHamburger) {
                    activeHamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    
                    // Reset hamburger bars
                    const bars = activeHamburger.querySelectorAll('.bar');
                    bars.forEach(bar => bar.style.transform = 'none');
                    bars[1].style.opacity = '1';
                }
            });
        });
    }

    // Navbar styling
    if (navbar) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    console.log('Navigation fixed and initialized');
}

// Fixed Testimonial Slider Function
function fixTestimonialSlider() {
    console.log("Fixing testimonial slider");
    const testimonials = document.querySelectorAll('.testimonial-card');
    const navDots = document.querySelectorAll('.testimonial-nav .nav-dot');
    const progressContainer = document.querySelector('.testimonial-progress-container');
    const progressBar = document.querySelector('.testimonial-progress-bar');
    
    if (!testimonials.length) {
        console.log('No testimonials found');
        return;
    }
    
    console.log(`Found ${testimonials.length} testimonials`);
    
    let currentIndex = 0;
    let autoSlideInterval;
    let isHovered = false;
    
    // Show progress container
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }
    
    function showTestimonial(index) {
        if (index >= testimonials.length) index = 0;
        if (index < 0) index = testimonials.length - 1;
        
        currentIndex = index;
        
        // Update testimonials
        testimonials.forEach((card, i) => {
            card.classList.toggle('active', i === currentIndex);
            card.style.display = i === currentIndex ? 'block' : 'none';
        });
        
        // Update dots
        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        console.log(`Showing testimonial ${currentIndex + 1} of ${testimonials.length}`);
    }
    
    function startProgressBar() {
        if (!progressBar) return;
        
        progressBar.style.width = '0%';
        progressBar.style.transition = 'none';
        
        // Force reflow
        progressBar.offsetWidth;
        
        setTimeout(() => {
            progressBar.style.transition = 'width 10s linear';
            progressBar.style.width = '100%';
        }, 50);
    }
    
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        
        if (!isHovered) {
            startProgressBar();
            
            autoSlideInterval = setInterval(() => {
                if (!isHovered) {
                    showTestimonial(currentIndex + 1);
                    startProgressBar();
                }
            }, 8000); // 8 second intervals
        }
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
        }
    }
    
    // Add dot navigation
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            stopAutoSlide();
            setTimeout(startAutoSlide, 100);
        });
    });
    
    // Pause on hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', () => {
            isHovered = true;
            stopAutoSlide();
        });
        
        testimonialSection.addEventListener('mouseleave', () => {
            isHovered = false;
            startAutoSlide();
        });
    }
    
    // Initialize
    showTestimonial(0);
    setTimeout(startAutoSlide, 1000);
    
    console.log('Testimonial slider fixed and started');
}

// Call the fixed functions immediately
document.addEventListener('DOMContentLoaded', function() {
    // Call fixes
    setTimeout(fixNavigation, 100);
    setTimeout(fixTestimonialSlider, 500);
});

// Also call on window load as backup
window.addEventListener('load', function() {
    setTimeout(fixNavigation, 100);
    setTimeout(fixTestimonialSlider, 500);
});

console.log('Fixed functions loaded and ready');

// ===== FINAL WORKING FIXES =====
// Override all broken functions with working versions

// Working Navigation Function
(function() {
    console.log('🔧 Applying navigation fix...');
    
    function initWorkingNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (!hamburger || !navMenu) {
            console.log('❌ Navigation elements not found');
            return;
        }
        
        console.log('✅ Navigation elements found, setting up...');
        
        // Remove all existing event listeners by cloning
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        // Add fresh event listener
        newHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🍔 Hamburger clicked!');
            
            const isActive = newHamburger.classList.contains('active');
            
            if (isActive) {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                console.log('📱 Menu closed');
            } else {
                newHamburger.classList.add('active');
                navMenu.classList.add('active');
                console.log('📱 Menu opened');
            }
            
            // Animate hamburger bars
            const bars = newHamburger.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (newHamburger.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const currentHamburger = document.getElementById('hamburger');
                if (currentHamburger) {
                    currentHamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    
                    const bars = currentHamburger.querySelectorAll('.bar');
                    bars.forEach(bar => {
                        bar.style.transform = 'none';
                        bar.style.opacity = '1';
                    });
                }
            });
        });
        
        console.log('✅ Navigation fixed successfully!');
    }
    
    // Working Testimonial Slider
    function initWorkingTestimonialSlider() {
        console.log('🔧 Applying testimonial slider fix...');
        
        const testimonials = document.querySelectorAll('.testimonial-card');
        const navDots = document.querySelectorAll('.testimonial-nav .nav-dot');
        const progressBar = document.querySelector('.testimonial-progress-bar');
        
        if (!testimonials.length) {
            console.log('❌ No testimonials found');
            return;
        }
        
        console.log(`✅ Found ${testimonials.length} testimonials`);
        
        let currentIndex = 0;
        let autoSlideInterval;
        let isHovered = false;
        
        function showTestimonial(index) {
            if (index >= testimonials.length) index = 0;
            if (index < 0) index = testimonials.length - 1;
            
            currentIndex = index;
            
            // Update testimonial visibility
            testimonials.forEach((card, i) => {
                if (i === currentIndex) {
                    card.classList.add('active');
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.classList.remove('active');
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
            
            // Update dots
            navDots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            console.log(`📋 Showing testimonial ${currentIndex + 1}/${testimonials.length}`);
        }
        
        function startProgressBar() {
            if (!progressBar) return;
            
            progressBar.style.width = '0%';
            progressBar.style.transition = 'none';
            
            requestAnimationFrame(() => {
                progressBar.style.transition = 'width 8s linear';
                progressBar.style.width = '100%';
            });
        }
        
        function startAutoSlide() {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            
            if (!isHovered) {
                startProgressBar();
                
                autoSlideInterval = setInterval(() => {
                    if (!isHovered) {
                        showTestimonial(currentIndex + 1);
                        startProgressBar();
                    }
                }, 8000); // 8 seconds
            }
        }
        
        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
            }
        }
        
        // Add dot navigation
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                stopAutoSlide();
                setTimeout(startAutoSlide, 500);
            });
        });
        
        // Hover controls
        const testimonialSection = document.querySelector('.testimonials');
        if (testimonialSection) {
            testimonialSection.addEventListener('mouseenter', () => {
                isHovered = true;
                stopAutoSlide();
            });
            
            testimonialSection.addEventListener('mouseleave', () => {
                isHovered = false;
                startAutoSlide();
            });
        }
        
        // Initialize
        showTestimonial(0);
        setTimeout(startAutoSlide, 1000);
        
        console.log('✅ Testimonial slider fixed and running!');
    }
    
    // Apply fixes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initWorkingNavigation, 200);
            setTimeout(initWorkingTestimonialSlider, 600);
        });
    } else {
        setTimeout(initWorkingNavigation, 200);
        setTimeout(initWorkingTestimonialSlider, 600);
    }
    
    // Also apply on window load as backup
    window.addEventListener('load', () => {
        setTimeout(initWorkingNavigation, 200);
        setTimeout(initWorkingTestimonialSlider, 600);
    });
    
    console.log('🚀 Working fixes loaded and scheduled!');
})();

