import './style.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

// Function to clear the content div
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// Function to set the active button style
function setActiveButton(button) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        if (btn === button) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Event Listeners for tab switching
const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const contactButton = document.getElementById('contact-btn');

homeButton.addEventListener('click', () => {
    clearContent();
    createHomePage();
    setActiveButton(homeButton);
});

menuButton.addEventListener('click', () => {
    clearContent();
    createMenuPage();
    setActiveButton(menuButton);
});

contactButton.addEventListener('click', () => {
    clearContent();
    createContactPage();
    setActiveButton(contactButton);
});

// Initial page load
function initialize() {
    createHomePage();
    setActiveButton(homeButton);
}

// Run initialization on page load
initialize();
