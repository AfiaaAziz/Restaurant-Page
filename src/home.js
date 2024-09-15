function homePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    // Intro Section
    const intro = document.createElement("div");
    intro.classList.add("intro");

    const title1 = document.createElement("h1");
    title1.textContent = "Welcome to Crust & Flame";

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "At Crust & Flame, we believe that great pizza starts with two essentials: a perfectly crafted crust and the intense heat of a traditional flame oven. Our signature dough is handmade daily, resulting in a crispy yet tender crust that pairs perfectly with our fresh, flavorful toppings. Whether you're craving a classic Margherita or something more adventurous, every pizza we make is a delicious fusion of tradition and innovation, baked to perfection in our firebrick ovens. Come savor the taste of passion, quality, and authenticity in every slice.";

    // Append title and paragraph to intro
    intro.appendChild(title1);
    intro.appendChild(paragraph1);

    // Hero Section
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const title2 = document.createElement("h2");
    title2.textContent = "Discover the Art of Pizza";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Fresh Ingredients. Perfect Crust. Fire-Baked to Perfection.";

    // Append title2 and paragraph2 to hero
    hero.appendChild(title2);
    hero.appendChild(paragraph2);

    

    // Why Choose Us Section
    const whyChooseUs = document.createElement("section");
    whyChooseUs.id = "why-choose-us";
    whyChooseUs.classList.add("why-choose-us");


    const whyTitle = document.createElement("h2");
    whyTitle.textContent = "Why Choose Crust & Flame?";
    whyChooseUs.appendChild(whyTitle);

    const whyParagraph = document.createElement("p");
    whyParagraph.innerHTML = "At <strong>Crust & Flame</strong>, we are dedicated to offering a pizza experience like no other. Here’s why you should choose us:";
    whyChooseUs.appendChild(whyParagraph);

    const whyList = document.createElement("ul");

    const reasons = [
        "Handcrafted Perfection: Every pizza we serve is made from scratch, using the finest ingredients and time-tested recipes to ensure a perfect bite every time.",
        "Authentic Flame-Baked Pizzas: Our pizzas are baked in traditional firebrick ovens, giving them a crispy crust and smoky flavor that’s hard to beat.",
        "Fresh Ingredients: We believe in quality, which is why we use only the freshest vegetables, meats, and cheeses in every pizza we make.",
        "Innovative Flavors: While we love the classics, we also take pride in offering unique, gourmet pizzas that push the boundaries of flavor.",
        "Passionate Team: Our chefs are passionate about pizza-making, pouring their creativity and expertise into every pie.",
        "Cozy Atmosphere: Whether you dine in or take out, our warm and welcoming restaurant provides the perfect backdrop for enjoying a great meal.",
        "Customer-Centered Service: We go above and beyond to ensure every customer has a memorable experience, from order to the last slice.",
        "Customization Options: We offer a variety of options to personalize your pizza, catering to all tastes and dietary needs.",
        "Locally Sourced: We support local farmers by sourcing our ingredients locally, ensuring freshness while giving back to the community.",
        "Consistent Quality: Every pizza, every time – we maintain the highest standards so that you can expect the best, every visit."
    ];

    reasons.forEach(reason => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${reason.split(":")[0]}:</strong> ${reason.split(":")[1]}`;
        whyList.appendChild(listItem);
    });

   
    
    whyChooseUs.appendChild(whyList);

    home.appendChild(intro);
    home.appendChild(hero);
    home.appendChild(whyChooseUs);

    return home;
}

function loadHomePage() {
    const container = document.getElementById("content");
    container.innerHTML = "";
    container.appendChild(homePage());
}

export default loadHomePage;
