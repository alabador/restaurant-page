
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
    heroText.textContent = 'Serving Cebu since 2022';
    heroBtn.textContent = 'Order Now';

    heroDiv.append(heroTitle, heroText, heroBtn);
    return heroDiv;
}

function split() {
    const splitDiv = document.createElement('div');
    const splitDivText = document.createElement('div');
    const splitDivImg = document.createElement('div');
    
}

export {hero}



