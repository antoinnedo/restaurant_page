function createContactPage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    content.appendChild(headline);

    // Phone Info
    const phoneInfo = document.createElement('div');
    phoneInfo.classList.add('contact-info');
    const phoneTitle = document.createElement('h2');
    phoneTitle.textContent = 'Phone';
    const phoneText = document.createElement('p');
    phoneText.textContent = '123-456-7890';
    phoneInfo.appendChild(phoneTitle);
    phoneInfo.appendChild(phoneText);
    content.appendChild(phoneInfo);

    // Address Info
    const addressInfo = document.createElement('div');
    addressInfo.classList.add('contact-info');
    const addressTitle = document.createElement('h2');
    addressTitle.textContent = 'Address';
    const addressText = document.createElement('p');
    addressText.textContent = '123 Valhalla Lane, Asgard, Realm Eternal';
    addressInfo.appendChild(addressTitle);
    addressInfo.appendChild(addressText);
    content.appendChild(addressInfo);
}

export default createContactPage;
