document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:Sa3ed7asanOfficial@gmail.com?subject=Message from ${name}&body=%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});