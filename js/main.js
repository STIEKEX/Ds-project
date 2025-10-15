const images = document.querySelectorAll('.banner_image'); 
let currentIndex = 0; 

function showNextImage() { 
    images[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].classList.add('active'); 
} 

setInterval(showNextImage, 5000); 
images[currentIndex].classList.add('active'); 

// SIGN IN/UP BUTTON NAVIGATION - Updated for folder structure
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

if(signInBtn) {
    signInBtn.addEventListener('click', () => { 
        window.location.href = 'Login page/signin.html';  // Updated path
    }); 
}

if(signUpBtn) {
    signUpBtn.addEventListener('click', () => { 
        window.location.href = 'Login page/signin.html';  // Updated path
    });
}

// // SEARCH FUNCTIONALITY
// const searchInput = document.getElementById('searchInput');
// const bookCards = document.querySelectorAll('.book-card');

// if(searchInput) {
//     searchInput.addEventListener('input', function(e) {
//         const searchTerm = e.target.value.toLowerCase().trim();
        
//         bookCards.forEach(card => {
//             const bookDescription = card.querySelector('.book-description');
//             if(bookDescription) {
//                 const title = bookDescription.querySelector('p:nth-child(1)').textContent.toLowerCase();
//                 const author = bookDescription.querySelector('p:nth-child(2)').textContent.toLowerCase();
//                 const description = bookDescription.querySelector('p:nth-child(3)').textContent.toLowerCase();
                
//                 // Check if search term matches title, author, or description
//                 if (title.includes(searchTerm) || 
//                     author.includes(searchTerm) || 
//                     description.includes(searchTerm)) {
//                     card.style.display = 'block';
//                     card.style.animation = 'fadeIn 0.5s ease';
//                 } else {
//                     card.style.display = 'none';
//                 }
//             }
//         });
        
//         // If search is empty, show all books
//         if (searchTerm === '') {
//             bookCards.forEach(card => {
//                 card.style.display = 'block';
//             });
//         }
//     });
// }

// // Add fade-in animation
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(20px); }
//         to { opacity: 1; transform: translateY(0); }
//     }
// `;
// document.head.appendChild(style);






// // SEARCH FUNCTIONALITY

//  searchInput = document.getElementById('searchInput');

// if (searchInput) {
//     let searchTimeout;
    
//     searchInput.addEventListener('input', function() {
//         clearTimeout(searchTimeout);
//         const query = this.value.trim();
        
//         if (query.length < 2) return;
        
//         searchTimeout = setTimeout(() => {
//             performSearch(query);
//         }, 500);
//     });
    
//     searchInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             const query = this.value.trim();
//             if (query.length >= 2) {
//                 performSearch(query);
//             }
//         }
//     });
// }

// function performSearch(query) {
//     console.log('Searching for:', query);
//     window.location.href = `pages/search-results.html?q=${encodeURIComponent(query)}`;
// }


// ==========================================
// CATEGORY FILTER FUNCTIONALITY
// ==========================================

// document.addEventListener('DOMContentLoaded', function() {
//     const categoryLinks = document.querySelectorAll('.dropdown-content a');
    
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const category = this.getAttribute('data-category');
//             filterByCategory(category);
            
//             // Update active state
//             categoryLinks.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });
// });



// ==========================================
// CATEGORY DROPDOWN TOGGLE (CLICK TO OPEN/CLOSE)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const categoriesBtn = document.querySelector('.categories-dropdown .Categories');
    const dropdownContent = document.querySelector('.dropdown-content');
    const categoryLinks = document.querySelectorAll('.dropdown-content a');
    
    // Toggle dropdown on click
    if (categoriesBtn && dropdownContent) {
        categoriesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active class
            dropdownContent.classList.toggle('active');
            categoriesBtn.classList.toggle('active');
            
            console.log('Dropdown toggled:', dropdownContent.classList.contains('active'));
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.categories-dropdown')) {
            dropdownContent.classList.remove('active');
            categoriesBtn.classList.remove('active');
        }
    });
    
    // Filter categories when clicking on an option
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Close dropdown after selection
            dropdownContent.classList.remove('active');
            categoriesBtn.classList.remove('active');
            
            // Update active state on links
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});





function filterByCategory(category) {
    const bookCards = document.querySelectorAll('.book-card');
    const categoryHeadings = document.querySelectorAll('.category_heading');
    const categoryContainers = document.querySelectorAll('.category_items');
    
    console.log('Filtering by category:', category);
    
    if (category === 'all') {
        // Show all books
        bookCards.forEach(card => {
            card.style.display = 'block';
        });
        categoryHeadings.forEach(heading => {
            heading.style.display = 'block';
        });
        categoryContainers.forEach(container => {
            container.style.display = 'grid';
        });
        return;
    }
    
    // Hide all first
    bookCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show only matching category
    categoryHeadings.forEach((heading, index) => {
        const headingText = heading.textContent.toLowerCase();
        const container = categoryContainers[index];
        
        if (headingText.includes(category) || 
            (category === 'trending' && headingText.includes('trending')) ||
            (category === 'self-help' && headingText.includes('self help'))) {
            
            heading.style.display = 'block';
            container.style.display = 'grid';
            
            // Show books in this container
            const booksInContainer = container.querySelectorAll('.book-card');
            booksInContainer.forEach(card => {
                card.style.display = 'block';
            });
        } else {
            heading.style.display = 'none';
            container.style.display = 'none';
        }
    });
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
