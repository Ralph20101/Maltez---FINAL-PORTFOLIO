AOS.init();

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform any desired action with the form data (e.g., send an email)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form
  contactForm.reset();

  // Reset form validation
  resetFormValidation();
});

// Form Validation
function validateForm() {
  let isValid = true;

  const formControls = document.querySelectorAll('.form-control');

  formControls.forEach(formControl => {
    const input = formControl.querySelector('input, textarea');
    const errorMessage = formControl.querySelector('.error-message');

    if (input.value.trim() === '') {
      formControl.classList.add('invalid');
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      formControl.classList.remove('invalid');
      errorMessage.style.display = 'none';
    }
  });

  return isValid;
}

function resetFormValidation() {
  const formControls = document.querySelectorAll('.form-control');

  formControls.forEach(formControl => {
    formControl.classList.remove('invalid');
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.style.display = 'none';
  });
}

contactForm.addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Page Transition Animation
const pageTransition = document.querySelector('.page-transition');

window.addEventListener('load', function() {
  pageTransition.classList.add('active');

  setTimeout(function() {
    pageTransition.classList.remove('active');
  }, 1000);
});

// Interactive Gradient Background
const interactiveGradient = document.createElement('div');
interactiveGradient.classList.add('interactive-gradient');
document.body.appendChild(interactiveGradient);

// Advanced Image Hover Effects
const imageHoverElements = document.querySelectorAll('.image-hover');

imageHoverElements.forEach(imageHoverElement => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const content = document.createElement('div');
  content.classList.add('content');

  const h3 = document.createElement('h3');
  h3.textContent = 'Project Title';

  const p = document.createElement('p');
  p.textContent = 'Project Description';

  content.appendChild(h3);
  content.appendChild(p);
  overlay.appendChild(content);
  imageHoverElement.appendChild(overlay);
});