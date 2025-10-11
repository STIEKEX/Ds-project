const images = document.querySelectorAll('.banner_image');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000); 

images[currentIndex].classList.add('active');




// Google apis ---connected



// document.addEventListener('DOMContentLoaded', function() {
//  fetch('https://www.googleapis.com/books/v1/volumes?q=romance&maxResults=8')

//     .then(res => res.json())
//     .then(data => {
//       const grid = document.getElementById('category_items');
//       grid.innerHTML = '';
//       (data.items || []).forEach(item => {
//         const vi = item.volumeInfo;
//         if (vi.imageLinks && vi.imageLinks.thumbnail) {
//           const a = document.createElement('a');
//           a.href = "#"; // link to details if wanted
//           const img = document.createElement('img');
//           img.className = 'trending-books';
//           img.src = vi.imageLinks.thumbnail;
//           img.alt = vi.title;
//           a.appendChild(img);
//           grid.appendChild(a);
//         }
//       });
//     });
// });





// Load Google Identity Services script in <head> or before this script
// <script src="https://accounts.google.com/gsi/client" async defer></script>


document.getElementById('signInBtn').addEventListener('click', () => {
  window.location.href = '../signin/sign-in.html';
});
document.getElementById('signUpBtn').addEventListener('click', () => {
  window.location.href = '../signin/sign-in.html';
});
