// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });                
        };
    });

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// scroll reveal

ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// contact form js
const scriptURL = 'https://script.google.com/macros/s/AKfycbxsWjTNU04lGM7fOdUF15UiWlSwSyQmiFPJm2n5TO1BysjhmlcfukRv9ET_ezRi53Y/exec';
const form = document.forms['contact-form'];
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Show loading message
    statusMessage.innerHTML = 'Submitting form...';
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        statusMessage.innerHTML = 'Thank you! Form has been submitted successfully.';
        form.reset(); // Clear the form
        setTimeout(() => {
            window.location.reload();
        }, 2000); // Reload after 2 seconds
    })
    .catch(error => {
        console.error('Error!', error.message);
        statusMessage.innerHTML = 'Error submitting form. Please try again.';
    });
});


// download cv
document.getElementById('downloadCV').addEventListener('click', function(event) {
    event.preventDefault(); 

    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'AbishekCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });



  // Contact me 
function sendMail(){
    let params = {
        name: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        phone: document.getElementById("mobile-number").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_jg2ftjl","template_ajsizh9",params);
}