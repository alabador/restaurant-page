function nav() {
    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Garland';
    const links = document.createElement('ul');
    const linksArray = navLinks();
    links.append(linksArray[0], linksArray[1]);
    nav.append(logo, links);
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

}

export {nav, hero}



