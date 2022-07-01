import { clearPage } from ".";
import { menuLoad } from "./pageload";

function hero() {
    const heroDiv = document.createElement('div');
    const heroTitle = document.createElement('h2');
    const heroText = document.createElement('p');
    const heroBtn = document.createElement('button');

    heroDiv.classList.add('hero', 'padding-side');
    heroTitle.classList.add('hero-title');
    heroText.classList.add('hero-text');
    heroBtn.classList.add('hero-button', 'cta');

    heroTitle.textContent = 'Experience the Authentic Taste of Cebu';
    heroText.textContent = 'Serving the best goat dishes in the Visayas';
    heroBtn.textContent = 'Order Now';

    heroBtn.addEventListener('click', clearPage);
    heroBtn.addEventListener('click', menuLoad);

    heroDiv.append(heroTitle, heroText, heroBtn);
    return heroDiv;
}

function heroOverlay() {
    const heroOverlayDiv = document.createElement('div');
    heroOverlayDiv.classList.add('overlay');
    return heroOverlayDiv;
}



export {hero, heroOverlay}



