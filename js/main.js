document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:Sa3ed7asanOfficial@gmail.com?subject=Message from ${name}&body=%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});


const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5"> <circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" /> </svg> Dark Mode';
const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5"> <path d="m8 3 4 8 5-5 5 15H2L8 3z" /> </svg> Light Mode';
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

function change_mode() {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'bg-dark');
    document.querySelectorAll('.bg-light').forEach(element => {
      element.classList.replace('bg-light', 'bg-dark');
    });
    document.querySelectorAll('.text-dark').forEach(element => {
      element.classList.replace('text-dark', 'text-light');
    });
    document.querySelectorAll('p.text-muted').forEach(element => {
      element.classList.replace('text-muted', 'text-light');
    });
    document.querySelectorAll('.card').forEach(element => {
      element.classList.add('bg-dark', 'text-light');
    });
    footer = document.querySelector('footer');
    footer.classList.replace('bg-dark', 'bg-light');
    footer.classList.replace('text-light', 'text-dark');
    themeToggleBtn.innerHTML = moonIcon;
    themeToggleBtn.classList.add('text-light')
    localStorage.setItem('theme', 'bg-dark');
  } else {
    body.classList.replace('bg-dark', 'light');
    document.querySelectorAll('.bg-dark').forEach(element => {
      element.classList.replace('bg-dark', 'bg-light');
    });
    document.querySelectorAll('.text-light').forEach(element => {
      element.classList.replace('text-light', 'text-dark');
    });
    document.querySelectorAll('p.text-light').forEach(element => {
      element.classList.replace('text-light', 'text-muted');
    });
    document.querySelectorAll('.card').forEach(element => {
      element.classList.remove('bg-dark', 'text-light');
    });
    footer = document.querySelector('footer');
    footer.classList.replace('bg-light', 'bg-dark');
    footer.classList.replace('text-dark', 'text-light');
    themeToggleBtn.innerHTML = sunIcon;
    themeToggleBtn.classList.remove('text-light');
    localStorage.setItem('theme', 'light');
  }
}

if (currentTheme) {
  body.classList.add(currentTheme);
  change_mode();
}

themeToggleBtn.addEventListener('click', change_mode);