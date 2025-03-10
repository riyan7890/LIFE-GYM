// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic content loading for services and products
const services = [
  { title: 'Service 1', description: 'Description of Service 1.' },
  { title: 'Service 2', description: 'Description of Service 2.' },
  { title: 'Service 3', description: 'Description of Service 3.' }
];

const products = [
  { title: 'Product 1', description: 'Description of Product 1.' },
  { title: 'Product 2', description: 'Description of Product 2.' },
  { title: 'Product 3', description: 'Description of Product 3.' }
];

const serviceContainer = document.querySelector('.service-container');
const productContainer = document.querySelector('.product-container');

services.forEach(service => {
  const serviceItem = document.createElement('div');
  serviceItem.classList.add('service-item');
  serviceItem.innerHTML = `
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  serviceContainer.appendChild(serviceItem);
});

products.forEach(product => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
    <h3>${product.title}</h3>
    <p>${product.description}</p>
  `;
  productContainer.appendChild(productItem);
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    formStatus.textContent = 'Message sent successfully!';
    formStatus.style.color = 'green';
    contactForm.reset();
  } else {
    formStatus.textContent = 'Please fill out all fields.';
    formStatus.style.color = 'red';
  }
});






// Add interactivity to all icons
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = () => {
  for (let i = 0; i < revealElements.length; i++) {
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      revealElements[i].classList.add("revealed");
    }
  }
};

window.addEventListener("scroll", revealOnScroll);