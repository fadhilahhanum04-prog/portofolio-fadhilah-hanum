// Custom JavaScript for Hanum's Communications Portfolio

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Scroll Effect on Navbar & Back to Top Button
    const navbar = document.getElementById('mainNavbar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    }

    // Run initial scroll check
    checkScroll();
    
    // Register scroll event listener
    window.addEventListener('scroll', checkScroll);

    // 2. Back to Top Click Action
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 3. Portfolio Dynamic Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and set it on the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const selectedFilter = this.getAttribute('data-filter');

            // Apply fade-out animation first to hide cards smoothly
            portfolioItems.forEach(item => {
                item.classList.add('fade-out');
                item.classList.remove('fade-in');
            });

            // Wait for the fade-out animation duration, then toggle visibility
            setTimeout(() => {
                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (selectedFilter === 'all' || itemCategory === selectedFilter) {
                        item.style.display = 'block';
                        // Trigger a reflow to restart the animation
                        void item.offsetWidth;
                        item.classList.remove('fade-out');
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 400); // Wait for the 400ms fade-out transition
        });
    });

    // 4. Contact Form Submission Mock Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const alertBox = document.getElementById('formAlert');
            
            // Show the alert box
            alertBox.classList.remove('d-none');
            
            // Do NOT reset the form input fields so the user can copy their message to send via Email/WhatsApp
            
            // Auto-hide alert box after 6 seconds
            setTimeout(() => {
                alertBox.classList.add('d-none');
            }, 6000);
        });
    }
});
