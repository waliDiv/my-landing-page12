    (function() {
            // smooth scroll for anchor links (including navbar)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    // close mobile menu after click (if open)
                    const navLinks = document.getElementById('navLinks');
                    if (navLinks.classList.contains('show')) {
                        navLinks.classList.remove('show');
                    }
                });
            });

            // mobile menu toggle
            const toggleBtn = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navLinks.classList.toggle('show');
                });
            }

            // optional: close menu if click outside (simple)
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.navbar') && navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            });
        })();