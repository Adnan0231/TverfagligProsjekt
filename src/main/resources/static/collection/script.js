// Henter referanser til HTML-elementene som er involvert i koden
const registrationForm = document.getElementById('registrationForm');
const nameEl = document.getElementById('name');
const lastnameEl = document.getElementById('lastname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const utskriftEl = document.getElementById('utskrift');

// Legger til en hendelseslytter for klikk på registreringsknappen
document.getElementById('Enter').addEventListener('click', register);

// Definerer funksjonen register()
function register() {
    // Implement your registration logic here
    // For simplicity, I'll just show a success message and redirect to the login page
    utskriftEl.innerHTML = 'Registrering vellykket!';
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login page after 2 seconds
    }, 2000);
}
