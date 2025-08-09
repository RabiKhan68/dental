document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });
});

// document.getElementById('commentForm').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const name = document.getElementById('commentName').value;
//   const comment = document.getElementById('commentText').value;
//   const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;

//   if (!name || !comment || rating == 0) {
//     alert('Please fill in all fields and select a rating.');
//     return;
//   }

//   const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

//   const reviewContainer = document.querySelector('.reviews');
//   const newReview = document.createElement('div');
//   newReview.classList.add('review-card');
//   newReview.innerHTML = `
//     <div class="stars">${stars}</div>
//     <p>"${comment}"</p>
//     <span>- ${name}</span>
//   `;

//   reviewContainer.appendChild(newReview);

//   // Reset form
//   document.getElementById('commentForm').reset();
// });