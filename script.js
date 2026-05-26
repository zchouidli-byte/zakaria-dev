// Theme toggle and contact form handling
(function(){
  // Theme toggle with local storage
const btn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('site-theme');

if (savedTheme === 'light') {
    body.classList.add('light-mode');
    btn.textContent = 'Light mode';
} else {
    body.classList.remove('light-mode');
    btn.textContent = 'Dark mode';
}

btn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('site-theme', 'light');
        btn.textContent = 'Light mode';
    } else {
        localStorage.setItem('site-theme', 'dark');
        btn.textContent = 'Dark mode';
    }
}); 

    // Simple contact form handling — validate and open mail client via mailto:
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    function showStatus(text, ok){
        status.hidden = false;
        status.textContent = text;
        status.style.color = ok ? 'var(--accent)' : '#ff6b6b';
        setTimeout(()=>{ status.hidden = true; }, 5000);
    }

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if(!name || !email || !message){
                showStatus('Please complete all fields.', false);
                return;
            }

            // basic email regex
            const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if(!emailRe.test(email)){
                showStatus('Please enter a valid email.', false);
                return;
            }

            // Build mailto link
            const subject = encodeURIComponent('Contact from portfolio: ' + name);
            const bodyText = encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">");
            const mailto = `mailto:zchouidli@cfasants.com?subject=${subject}&body=${bodyText}`;

            // Open mail client
            window.location.href = mailto;
            showStatus('Opening your mail client...', true);
            form.reset();
        });
    }
})();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

