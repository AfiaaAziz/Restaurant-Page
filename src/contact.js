function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Contact Us';
    contactDiv.appendChild(mainHeading);

    const subHeading = document.createElement('h2');
    subHeading.textContent = "We'd Love to Hear from You!";
    contactDiv.appendChild(subHeading);

    const introParagraph = document.createElement('p');
    introParagraph.textContent = "At Crust & Flame, your satisfaction is our priority. Whether you have questions about our menu, need to place a special order, or simply want to give us feedback, we're here for you. Feel free to reach out using any of the methods below, and we'll get back to you as soon as possible.";
    contactDiv.appendChild(introParagraph);

    const visitUsHeading = document.createElement('h2');
    visitUsHeading.textContent = "Visit Us";
    contactDiv.appendChild(visitUsHeading);

    const restaurantName = document.createElement('h3');
    restaurantName.textContent = "Crust & Flame - Woodfired Pizzeria";
    contactDiv.appendChild(restaurantName);

    const addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = "<i class='fas fa-map-marker-alt'></i> 123 Pizza Lane, Flavor Town, NY 10001 <br/>📍 <a href='#'>Get Directions</a>";
    contactDiv.appendChild(addressParagraph);

    const callUsHeading = document.createElement('h2');
    callUsHeading.textContent = "Call Us";
    contactDiv.appendChild(callUsHeading);

    const callUsParagraph = document.createElement('p');
    callUsParagraph.innerHTML = "<i class='fas fa-phone'></i> Have a quick question? Give us a call: <br/><strong>(123) 456-7890</strong>";
    contactDiv.appendChild(callUsParagraph);

    const openingHoursHeading = document.createElement('h2');
    openingHoursHeading.textContent = "Opening Hours";
    contactDiv.appendChild(openingHoursHeading);

    const openingHoursParagraph = document.createElement('p');
    openingHoursParagraph.textContent = "We're open 7 days a week:";
    contactDiv.appendChild(openingHoursParagraph);

    const weekdayHours = document.createElement('p');
    weekdayHours.innerHTML = "<i class='far fa-clock'></i> <strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM";
    contactDiv.appendChild(weekdayHours);

    const weekendHours = document.createElement('p');
    weekendHours.innerHTML = "<i class='far fa-clock'></i> <strong>Saturday - Sunday:</strong> 12:00 PM - 11:00 PM";
    contactDiv.appendChild(weekendHours);

    const emailHeading = document.createElement('h2');
    emailHeading.textContent = "Email Us";
    contactDiv.appendChild(emailHeading);

    const emailParagraph = document.createElement('p');
    emailParagraph.innerHTML = "<i class='fas fa-envelope'></i> Prefer to write to us? Email us at: <br/><a href='mailto:info@crustandflame.com'>info@crustandflame.com</a>";
    contactDiv.appendChild(emailParagraph);

    const socialMediaHeading = document.createElement('h2');
    socialMediaHeading.textContent = "Connect with Us";
    contactDiv.appendChild(socialMediaHeading);

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');
    socialMediaDiv.innerHTML = `
        <a href='#'><i class='fab fa-facebook-f'></i> Facebook</a> |
        <a href='#'><i class='fab fa-instagram'></i> Instagram</a> |
        <a href='#'><i class='fab fa-twitter'></i> Twitter</a>
    `;
    contactDiv.appendChild(socialMediaDiv);

    content.appendChild(contactDiv);
}

export default loadContactPage;
