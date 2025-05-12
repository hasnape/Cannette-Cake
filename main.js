document.addEventListener('DOMContentLoaded', function () {
    // Logo animation on page load
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('animate');
    }

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('open');
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('#navList a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navList) {
                navList.classList.remove('open');
            }
        });
    });

    // Reveal sections on scroll (fade-in effect)
    const hiddenSections = document.querySelectorAll('section.hidden');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    hiddenSections.forEach(function (section) {
        observer.observe(section);
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            alert('Merci, votre message a bien été envoyé ! Nous vous répondrons sous peu.');
            contactForm.reset();
        });
    }

    // Position automatique des faces du carousel 3D
    const faces = document.querySelectorAll('.carousel-3d__face');
    const total = faces.length;
    const angle = 360 / total;
    const width = 246; // largeur en px (doit correspondre au CSS)
    const radius = Math.round((width / 2) / Math.tan(Math.PI / total));

    faces.forEach((face, i) => {
        let scale = 1;
        if (face.classList.contains('face-fraise')) {
            scale = 0.9; // réduction uniquement pour la face fraise-vanille
        }
        face.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px) scale(${scale})`;
    });
});
