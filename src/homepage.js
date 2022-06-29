function nav() {
    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Garland';
    const links = document.createElement('ul');
    const linksArray = navLinks();
    links.append(linksArray[0], linksArray[1]);
    nav.append(logo, links);
    nav.classList.add('nav', 'margin-side');
    return nav;
}

function navLinks() {
    const menu = document.createElement('li');
    const about = document.createElement('li');
    menu.textContent = 'Menu';
    about.textContent = 'About';
    return [menu, about];
}

function hero() {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero', 'side-margin');
    const heroTitle = document.createElement('h2');
    heroTitle.classList.add('hero-title');
    const heroText = document.createElement('p');
    heroText.classList.add('hero-text');
    const heroBtn = document.createElement('button');
    heroBtn.classList.add('hero-button', 'cta');

    heroTitle.textContent = 'Experience the Authentic Taste of Cebu';
    heroText.textContent = 'Serving Cebu since 2022';
    heroBtn.textContent = 'Order Now';

    heroDiv.append(heroTitle, heroText, heroBtn);
    return heroDiv;
}

export {nav, hero}



