function createHomePage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to The Odin Restaurant!';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Serving the most delicious and authentic dishes since 2021. Our ingredients are locally sourced and our recipes are time-tested. We believe in food that brings people together.';
    
    const image = document.createElement('img');
    // You can replace this with a real image URL or a local image
    image.src = 'https://placehold.co/600x400/333/fff?text=Delicious+Food'; 
    image.alt = 'A delicious dish from our restaurant';

    content.appendChild(headline);
    content.appendChild(paragraph);
    content.appendChild(image);
}

export default createHomePage;
