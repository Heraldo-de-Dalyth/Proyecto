/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessaje = document.getElementById('contact-messaje'),
    messaje = document.getElementById('messaje');

const sendEmail = (e) => {
    e.preventDefault();

    if {
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessaje.value === ''
    } {
        messaje.textContent = 'Write all the input fields';
        messaje.classList.remove('color-first');
        messaje.classList.add('color-red');

        setTimeout(() => {
            messaje.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm(
            'service_8e9v3eh',
            'template_938293k',
            '#contact-form',
            'KGifXeFSFt6XI5WvD'
        )
        .then(
            () => {
                messaje.textContent = 'Message send ✓';
                messaje.classList.add('color-first');

                setTimeout(() => {
                    messaje.textContent = '';
                }, 5000);
            },
            (error) => {
                alter('OOPs! SOMETHIMG WENT WRONG...', error);
            }
        );

        contactName.value '';
        contactEmail.value '';
        contactSubject.value '';
        contactMessaje.value '';
    }
}

    contactForm.addEventListener('submit', sendEmail)