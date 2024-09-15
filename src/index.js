import loadHomePage from './home';
import loadMenuPage from './menu'; 
import loadAboutPage from './about';
import loadContactPage from './contact';

import "./styles.css";


import '@fortawesome/fontawesome-free/css/all.min.css';

function addNavEventListeners() {
    const homeButton = document.getElementById('home-btn');
    const menuButton = document.getElementById('menu-btn');
    const aboutButton = document.getElementById('about-btn');
    const contactButton = document.getElementById('contact-btn');

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenuPage(); 
    });

    aboutButton.addEventListener('click', () => {
        clearContent();
        loadAboutPage();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        loadContactPage();
    });
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function init() {
    loadHomePage(); 
    addNavEventListeners(); 
   
}

init();