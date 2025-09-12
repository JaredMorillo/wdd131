// Set current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu functionality
const hambutton = document.getElementById('hambutton');
const navmenu = document.getElementById('navmenu');

hambutton.addEventListener('click', () => {
  navmenu.classList.toggle('show');
  hambutton.classList.toggle('show');
});

// Navigation active state
const navLinks = navmenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});