const Telegram = window.Telegram.WebApp;

Telegram.ready();

const navButtons = document.querySelectorAll('nav button');
const tabContents = document.querySelectorAll('.tab-content');

function activateTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Remove 'active' class from all buttons
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    navButtons.forEach(button => {
        if (button.getAttribute('data-tab') === tabId) {
            button.classList.add('active');
        }
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        activateTab(tabId);
    });
});

// Initialize the first tab as active
activateTab('tab1');

//Example of using the Telegram API
console.log(Telegram.initDataUnsafe);
