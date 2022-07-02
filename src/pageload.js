import { hero, heroOverlay } from "./homepage"; 
import { menu } from "./menu";
import { contact } from "./contact";
import { clearPage } from ".";

function nav() {
    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Garland';

    logo.addEventListener('click', clearPage);
    logo.addEventListener('click', initialPageLoad);

    const links = document.createElement('ul');
    const linksArray = navLinks();
    links.append(linksArray[0], linksArray[1]);
    nav.append(logo, links);
    nav.classList.add('nav', 'padding-side');
    return nav;
}

function navLinks() {
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    menu.classList.add('menu');
    contact.classList.add('contact');

    menu.addEventListener('click', clearPage);
    menu.addEventListener('click', menuLoad);
    contact.addEventListener('click', clearPage);
    contact.addEventListener('click', contactLoad);
    return [menu, contact];
}


function initialPageLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.append(nav(), hero(), heroOverlay());
}
function menuLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.append(nav(), menu());
}
function contactLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.append(nav(), contact());
}

export {nav, initialPageLoad, menuLoad};