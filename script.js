let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');  
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            let target = document.querySelector('header nav a[href*=' + id + ']');
            if (target) {
                target.classList.add('active');
            }
        }
    });
};

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    navlinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}
