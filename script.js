// Create floating particles animation
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  
  document.querySelector('.bg-animation').appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 10000);
}

// Create particles periodically
setInterval(createParticle, 800);

// Add smooth scrolling for better experience
document.addEventListener('DOMContentLoaded', function() {
  // Add entrance animations with stagger
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = (index * 0.2) + 's';
  });
});

// Add hover effect to logo for extra interactivity
document.querySelector('.logo').addEventListener('mouseenter', function() {
  this.style.filter = 'brightness(1.2) saturate(1.2)';
});

document.querySelector('.logo').addEventListener('mouseleave', function() {
  this.style.filter = 'brightness(1) saturate(1)';
});
