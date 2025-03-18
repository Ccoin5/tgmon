const Telegram = window.Telegram.WebApp;

Telegram.ready();

const navButtons = document.querySelectorAll('nav button');
const tabContents = document.querySelectorAll('.tab-content');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        document.getElementById(tabId).style.display = 'block';
    });
});

// Optional: Initialize the first tab as active
document.getElementById('tab1').style.display = 'block';

//Example of using the Telegram API
console.log(Telegram.initDataUnsafe);
