

function contact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    contactDiv.append(contactHeader(), contactInfo());
    return contactDiv;
}

function contactHeader() {
    const contactHeader = document.createElement('div');
    const contactTitle = document.createElement('h2');

    contactHeader.classList.add('contact-header');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact Us';
    contactHeader.append(contactTitle);

    return contactHeader;
}

function contactInfo() {
    const contactInfoDiv = document.createElement('div');
    const contactInfoText = document.createElement('p');
    const phone = document.createElement('h3');
    contactInfoDiv.classList.add('contact-info-div');
    contactInfoText.classList.add('contact-info-text');
    phone.classList.add('phone');

    contactInfoText.textContent = 'To make a reservation by phone, please call:';
    phone.textContent = '(000) 000-0000';

    contactInfoDiv.append(contactInfoText, phone);
    return contactInfoDiv;
}

export {contact};