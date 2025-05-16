document.addEventListener('DOMContentLoaded', function () {
    // Animation du logo au chargement
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('animate');
    }

    // Toggle menu mobile
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('open');
        });
    }

    // Fermer le menu mobile au clic sur un lien
    const navLinks = document.querySelectorAll('#navList a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navList) {
                navList.classList.remove('open');
            }
        });
    });

    // Révéler les sections au scroll (fade-in)
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

    // Soumission du formulaire de contact
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

    // Positionnement automatique des faces du carousel 3D
    const faces = document.querySelectorAll('.carousel-3d__face');
    const total = faces.length;
    if (total > 0) {
        const angle = 360 / total;
        const width = 246; // largeur d'une face en px (adapter selon ton CSS)
        const radius = Math.round((width / 2) / Math.tan(Math.PI / total));
        faces.forEach((face, i) => {
            let scale = 1;
            if (face.classList.contains('face-fraise')) {
                scale = 0.9;
            }
            face.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px) scale(${scale})`;
        });
    }
});

 document.addEventListener('DOMContentLoaded', () => {
     const siretInput = document.getElementById('siret');
     const quantiteInput = document.getElementById('quantite');
     const prixTotal = document.getElementById('prixTotal');

     function isValidSIRET(siret) {
         return /^\d{14}$/.test(siret);
     }

     function calculerPrix() {
         const qte = parseInt(quantiteInput.value, 10) || 0;
         const siret = siretInput.value.trim();
         const tarifUnitaire = isValidSIRET(siret) ? 3 : 5;
         prixTotal.textContent = (qte * tarifUnitaire).toFixed(2) + ' €';
     }

     siretInput.addEventListener('input', calculerPrix);
     quantiteInput.addEventListener('input', calculerPrix);

     calculerPrix();

     // Affichage conditionnel de l'information tarif pro
     const prixInfo = document.getElementById('prixInfo');

     function updateTarifInfo(siret) {
         if (prixInfo) {
             if (/^\d{14}$/.test(siret)) {
                 prixInfo.innerHTML = 'Tarif pro activé : <strong>3€ par unité</strong> (SIRET valide).';
             } else {
                 prixInfo.innerHTML = prixInfo.dataset.default;
             }
         }
     }

     siretInput.addEventListener('input', () => updateTarifInfo(siretInput.value));
     updateTarifInfo(siretInput.value);

 });

 document.addEventListener("DOMContentLoaded", function () {
     const hiddenSections = document.querySelectorAll(".hidden");
     const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
             if (entry.isIntersecting) {
                 entry.target.classList.remove("hidden");
                 observer.unobserve(entry.target);
             }
         });
     });

     hiddenSections.forEach((section) => observer.observe(section));
 });
