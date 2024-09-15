function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'About Us';
    aboutDiv.appendChild(mainHeading);

    const subHeading = document.createElement('h2');
    subHeading.textContent = "Our Story";
    aboutDiv.appendChild(subHeading);

    const introParagraph = document.createElement('p');
    introParagraph.textContent = "Welcome to Crust & Flame, where every pizza is a masterpiece crafted with love, tradition, and the finest ingredients. Our journey began with a simple idea: to create exceptional pizzas that celebrate the art of pizza-making.";
    aboutDiv.appendChild(introParagraph);

    const missionHeading = document.createElement('h2');
    missionHeading.textContent = "Our Mission";
    aboutDiv.appendChild(missionHeading);

    const missionParagraph = document.createElement('p');
    missionParagraph.innerHTML = "<i class='fas fa-bullseye'></i> At Crust & Flame, our mission is to deliver an unforgettable dining experience by crafting pizzas with a perfect balance of tradition and innovation. We aim to bring people together, one delicious slice at a time.";
    aboutDiv.appendChild(missionParagraph);

    const valuesHeading = document.createElement('h2');
    valuesHeading.textContent = "Our Values";
    aboutDiv.appendChild(valuesHeading);

    const valuesList = document.createElement('ul');
    valuesList.innerHTML = `
        <li><i class='fas fa-handshake'></i> <strong>Quality:</strong> We use only the finest ingredients and time-tested recipes.</li>
        <li><i class='fas fa-heart'></i> <strong>Passion:</strong> Our chefs are dedicated to their craft, ensuring every pizza is perfect.</li>
        <li><i class='fas fa-leaf'></i> <strong>Freshness:</strong> We prioritize fresh, locally-sourced ingredients for the best taste.</li>
        <li><i class='fas fa-users'></i> <strong>Community:</strong> We support local farmers and give back to the community.</li>
    `;
    aboutDiv.appendChild(valuesList);

    const historyHeading = document.createElement('h2');
    historyHeading.textContent = "Our History";
    aboutDiv.appendChild(historyHeading);

    const historyParagraph = document.createElement('p');
    historyParagraph.innerHTML = "<i class='fas fa-history'></i> Our story began with a passion for pizza and a desire to create something truly special. Over the years, we’ve grown from a small pizzeria into a beloved local establishment, known for our dedication to quality and flavor.";
    aboutDiv.appendChild(historyParagraph);

   

    

    content.appendChild(aboutDiv);
}

export default loadAboutPage;
