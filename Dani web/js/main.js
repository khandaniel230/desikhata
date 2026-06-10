// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Category Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const calculatorCards = document.querySelectorAll('.calculator-card');
    
    if (tabButtons.length && calculatorCards.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Show/hide calculator cards based on category
                calculatorCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Search Functionality
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"], input[type="text"][placeholder*="calculate"]');
    const searchButtons = document.querySelectorAll('#search-btn, .search-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    // Hide search elements if needed
    searchButtons.forEach((e) => {
        e.style.display = "none";
    });
    
    searchInputs.forEach((e) => {
        e.style.display = "none";
    });
    
    // Enhanced search functionality
    if (searchInput && searchBtn) {
        // Function to perform search with highlighting
        function performSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (!searchTerm) {
                // If search is empty, show all calculators
                calculatorCards.forEach(card => {
                    card.style.display = 'flex';
                    // Remove any previous highlights
                    const title = card.querySelector('h3');
                    const description = card.querySelector('p');
                    if (title) title.innerHTML = title.textContent;
                    if (description) description.innerHTML = description.textContent;
                });
                return;
            }
            
            let foundResults = false;
            
            calculatorCards.forEach(card => {
                const title = card.querySelector('h3, h4');
                const description = card.querySelector('p');
                
                if (!title || !description) return;
                
                const titleText = title.textContent.toLowerCase();
                const descriptionText = description.textContent.toLowerCase();
                
                if (titleText.includes(searchTerm) || descriptionText.includes(searchTerm)) {
                    card.style.display = 'flex';
                    foundResults = true;
                    
                    // Highlight the matching text
                    if (titleText.includes(searchTerm)) {
                        title.innerHTML = titleText.replace(
                            new RegExp(searchTerm, 'gi'), 
                            match => `<span class="search-highlight">${match}</span>`
                        );
                    }
                    
                    if (descriptionText.includes(searchTerm)) {
                        description.innerHTML = descriptionText.replace(
                            new RegExp(searchTerm, 'gi'), 
                            match => `<span class="search-highlight">${match}</span>`
                        );
                    }
                } else {
                    card.style.display = 'none';
                    // Remove any previous highlights
                    title.innerHTML = title.textContent;
                    description.innerHTML = description.textContent;
                }
            });
            
            // Show no results message if needed
            const existingNoResults = document.querySelector('.no-results');
            if (existingNoResults) {
                existingNoResults.remove();
            }
            
            if (!foundResults) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No calculators found</h3>
                    <p>Try different search terms or browse by category</p>
                `;
                
                const calculatorGrid = document.querySelector('.calculator-grid');
                if (calculatorGrid) {
                    calculatorGrid.appendChild(noResults);
                }
            }
        }
        
        // Add event listeners
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Animate statistics counting
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

// Feedback functionality (moved outside the main DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() {
    const starInputs = document.querySelectorAll('.rating-stars input');
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const submitButton = document.querySelector('.submit-feedback-btn');
    
    if (starInputs.length) {
        starInputs.forEach(star => {
            star.addEventListener('change', function() {
                if (feedbackForm) {
                    feedbackForm.style.display = 'block';
                }
            });
        });
    }
    
    if (submitButton) { 
        submitButton.addEventListener('click', function() {
            const selectedRating = document.querySelector('input[name="rating"]:checked');
            const feedbackTextarea = document.querySelector('.feedback-form textarea');
            const feedbackText = feedbackTextarea ? feedbackTextarea.value : '';
            
            // Here you would typically send this data to your server
            console.log('Rating:', selectedRating ? selectedRating.value : 'None');
            console.log('Feedback:', feedbackText);
            
            // Show thank you message
            if (feedbackForm) feedbackForm.style.display = 'none';
            if (thankYouMessage) thankYouMessage.style.display = 'block';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                if (thankYouMessage) thankYouMessage.style.display = 'none';
                document.querySelectorAll('input[name="rating"]').forEach(input => {
                    input.checked = false;
                });
                if (feedbackTextarea) feedbackTextarea.value = '';
            }, 3000);
        });
    }
});