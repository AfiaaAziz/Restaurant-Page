import margherita from './images/margherita.jpg';
import Pepperoni from './images/pepperoni.jpg';
import BBQChicken from './images/BBQ Chicken.jpg';
import VeggieSpecial from './images/Veggie Special.jpg';
import SmokedChickenPizza from './images/Smoked Chicken Pizza.jpg';
import SpicyChickenPizza from './images/Spicy Chicken Pizza.jpg';
import AlfredoChickenPizza from './images/Alfredo Chicken Pizza.jpg';
import FourCheesePizza from './images/Four Cheese Pizza.jpg';

function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    menuDiv.appendChild(title); 

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container'); 

    const pizzas = [
        {
            name: 'Margherita',
            description: 'A timeless classic, the Margherita pizza features a simple and flavorful combination of fresh tomatoes, mozzarella cheese, and basil, all atop a light tomato sauce.',
            image: margherita
        },
        {
            name: 'Pepperoni',
            description: 'One of the most popular pizza choices worldwide, this pizza features slices of spicy, savory pepperoni on a cheesy and saucy base. Made Halal with certified beef or turkey pepperoni.',
            image: Pepperoni
        },
        {
            name: 'BBQ Chicken',
            description: 'A rich, smoky, and tangy pizza loaded with grilled chicken and barbecue sauce, balanced with fresh veggies and melted cheese.',
            image: BBQChicken
        },
        {
            name: 'Veggie Special',
            description: 'Colorful and healthy pizza packed with a mix of vegetables, perfect for vegetarians or anyone looking for a lighter option.',
            image: VeggieSpecial
        },
        {
            name: 'Smoked Chicken Pizza',
            description: 'This pizza brings the rich, smoky flavor of chicken together with caramelized onions and a light tomato base.',
            image: SmokedChickenPizza
        },
        {
            name: 'Spicy Chicken Pizza',
            description: 'A pizza with a kick! This flavor is popular for those who love spicy food, featuring spiced chicken and a mix of fresh vegetables.',
            image: SpicyChickenPizza
        },
        {
            name: 'Alfredo Chicken Pizza',
            description: 'A creamy, cheesy pizza made with an Alfredo sauce base, perfect for those who love rich, savory flavors.',
            image: AlfredoChickenPizza
        },
        {
            name: 'Four Cheese Pizza',
            description: 'A creamy, cheesy delight for cheese lovers, combining four types of cheese for a rich and gooey pizza experience.',
            image: FourCheesePizza
        },
    ];

    pizzas.forEach(pizza => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const pizzaImage = document.createElement('img');
        pizzaImage.src = pizza.image;
        pizzaImage.alt = pizza.name;
        menuItem.appendChild(pizzaImage);

        const pizzaName = document.createElement('h3');
        pizzaName.textContent = pizza.name;
        menuItem.appendChild(pizzaName);

        const pizzaDescription = document.createElement('p');
        pizzaDescription.textContent = pizza.description;
        menuItem.appendChild(pizzaDescription);

        menuContainer.appendChild(menuItem);
    });

    menuDiv.appendChild(menuContainer);

    content.appendChild(menuDiv);
}

export default loadMenuPage;
