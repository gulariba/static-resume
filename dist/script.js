// Toggle job details visibility
var jobs = document.querySelectorAll('.job h3');
jobs.forEach(function (job) {
    job.addEventListener('click', function () {
        var details = job.nextElementSibling;
        if (details.style.display === 'none') {
            details.style.display = 'block';
        }
        else {
            details.style.display = 'none';
        }
    });
});
// Theme switch functionality
var body = document.querySelector('body');
var themeButton = document.createElement('button');
themeButton.textContent = "Switch Theme";
themeButton.style.position = 'fixed';
themeButton.style.top = '10px';
themeButton.style.right = '10px';
body === null || body === void 0 ? void 0 : body.appendChild(themeButton);
themeButton.addEventListener('click', function () {
    body === null || body === void 0 ? void 0 : body.classList.toggle('dark-theme');
});
