// Toggle job details visibility
const jobs = document.querySelectorAll('.job h3');

jobs.forEach(job => {
    job.addEventListener('click', () => {
        const details = job.nextElementSibling as HTMLUListElement;
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});

// Theme switch functionality
const body = document.querySelector('body');
const themeButton = document.createElement('button');
themeButton.textContent = "Switch Theme";
themeButton.style.position = 'fixed';
themeButton.style.top = '10px';
themeButton.style.right = '10px';
body?.appendChild(themeButton);

themeButton.addEventListener('click', () => {
    body?.classList.toggle('dark-theme');
});
