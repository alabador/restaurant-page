import { hero, heroOverlay } from "./homepage"; 
import { menu } from "./menu";

function nav() {
    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Garland';
    const links = document.createElement('ul');
    const linksArray = navLinks();
    links.append(linksArray[0], linksArray[1]);
    nav.append(logo, links);
    nav.classList.add('nav', 'padding-side');
    return nav;
}

function navLinks() {
    const menu = document.createElement('li');
    const about = document.createElement('li');
    menu.textContent = 'Menu';
    about.textContent = 'About';
    return [menu, about];
}


function initialPageLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.append(nav(), hero(), heroOverlay());
}

function menuLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.append(nav(), menu());
    console.log('it loaded');
}

export {nav, initialPageLoad, menuLoad};