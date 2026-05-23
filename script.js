 document.querySelector('.btn').addEventListener('click', () => {
    alert('Thank you for choosing me! Let\'s build something amazing together.');
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
const message = document.querySelector('textarea').value;
    alert(`Hi, ${name}! Your message has been sent successfully. I'll contact you at ${email} soon!`);
    form.reset();
});
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});


