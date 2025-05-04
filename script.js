// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Job Card Hover Effect
const jobCards = document.querySelectorAll('.job-card');
jobCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-btn');

if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Here you would typically make an API call to search for jobs
            console.log('Searching for:', searchTerm);
            alert(`Searching for jobs matching: ${searchTerm}`);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Mobile Navigation Toggle
const createMobileNav = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-nav-toggle')) {
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            navbar.insertBefore(mobileNavToggle, navLinks);
            
            mobileNavToggle.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

// Initialize mobile navigation
window.addEventListener('load', createMobileNav);
window.addEventListener('resize', createMobileNav); 