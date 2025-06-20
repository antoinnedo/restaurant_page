function createMenuPage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    content.appendChild(headline);

    // Menu Item 1
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const title1 = document.createElement('h2');
    title1.textContent = 'Viking\'s Feast';
    const description1 = document.createElement('p');
    description1.textContent = 'A hearty platter of roasted meats, seasonal vegetables, and rustic bread.';
    menuItem1.appendChild(title1);
    menuItem1.appendChild(description1);
    content.appendChild(menuItem1);

    // Menu Item 2
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const title2 = document.createElement('h2');
    title2.textContent = 'Asgardian Salad';
    const description2 = document.createElement('p');
    description2.textContent = 'A fresh mix of greens, berries, nuts, and a light vinaigrette dressing, fit for the gods.';
    menuItem2.appendChild(title2);
    menuItem2.appendChild(description2);
    content.appendChild(menuItem2);
}

export default createMenuPage;
