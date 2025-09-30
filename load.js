// Responsive Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Countdown Timer from 2 days (48 hours)
const countdown = () => {
  const countdownDuration = 2 ; // 2 days in milliseconds
  const startTime = Date.now();

  const updateTimer = () => {
    const now = Date.now();
    const elapsed = now - startTime;
    const remaining = countdownDuration - elapsed;

    if (remaining <= 0) {
      document.getElementById('countdown').innerHTML = '<p>Sorry, the time is completed. Better luck next time.</p>';
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  };

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
};

countdown();

// Contact form mailto handler
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const subject = encodeURIComponent(`TechFest 2025 Inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  // Replace with your actual email address
  const mailtoLink = `mailto:contact@techfest2025.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
});