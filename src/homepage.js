
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

    heroDiv.append(heroTitle, heroText, heroBtn);
    return heroDiv;
}

export {hero}



