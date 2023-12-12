
// Active NavLink
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.bodyNavLink a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.bodyNavLink a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let dropBody = document.querySelector(".dropdown-body");
let dropContent = document.querySelector(".dropdown-content-body");
