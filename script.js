// DOM Elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Toggle Mobile Menu
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-xmark');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}

// Active Nav Link on Scroll (ScrollSpy)
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || window.scrollY;

    sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Close mobile nav on desktop scroll if open
    if (window.innerWidth > 768 && navbar && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        if (menuIcon) menuIcon.classList.remove('fa-xmark');
    }
});
