(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=a[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("intro");const n=document.createElement("h1");n.textContent="Welcome to Crust & Flame";const a=document.createElement("p");a.textContent="At Crust & Flame, we believe that great pizza starts with two essentials: a perfectly crafted crust and the intense heat of a traditional flame oven. Our signature dough is handmade daily, resulting in a crispy yet tender crust that pairs perfectly with our fresh, flavorful toppings. Whether you're craving a classic Margherita or something more adventurous, every pizza we make is a delicious fusion of tradition and innovation, baked to perfection in our firebrick ovens. Come savor the taste of passion, quality, and authenticity in every slice.",t.appendChild(n),t.appendChild(a);const i=document.createElement("div");i.classList.add("hero");const o=document.createElement("h2");o.textContent="Discover the Art of Pizza";const r=document.createElement("p");r.textContent="Fresh Ingredients. Perfect Crust. Fire-Baked to Perfection.",i.appendChild(o),i.appendChild(r);const s=document.createElement("section");s.id="why-choose-us",s.classList.add("why-choose-us");const c=document.createElement("h2");c.textContent="Why Choose Crust & Flame?",s.appendChild(c);const d=document.createElement("p");d.innerHTML="At <strong>Crust & Flame</strong>, we are dedicated to offering a pizza experience like no other. Here’s why you should choose us:",s.appendChild(d);const l=document.createElement("ul");return["Handcrafted Perfection: Every pizza we serve is made from scratch, using the finest ingredients and time-tested recipes to ensure a perfect bite every time.","Authentic Flame-Baked Pizzas: Our pizzas are baked in traditional firebrick ovens, giving them a crispy crust and smoky flavor that’s hard to beat.","Fresh Ingredients: We believe in quality, which is why we use only the freshest vegetables, meats, and cheeses in every pizza we make.","Innovative Flavors: While we love the classics, we also take pride in offering unique, gourmet pizzas that push the boundaries of flavor.","Passionate Team: Our chefs are passionate about pizza-making, pouring their creativity and expertise into every pie.","Cozy Atmosphere: Whether you dine in or take out, our warm and welcoming restaurant provides the perfect backdrop for enjoying a great meal.","Customer-Centered Service: We go above and beyond to ensure every customer has a memorable experience, from order to the last slice.","Customization Options: We offer a variety of options to personalize your pizza, catering to all tastes and dietary needs.","Locally Sourced: We support local farmers by sourcing our ingredients locally, ensuring freshness while giving back to the community.","Consistent Quality: Every pizza, every time – we maintain the highest standards so that you can expect the best, every visit."].forEach((e=>{const t=document.createElement("li");t.innerHTML=`<strong>${e.split(":")[0]}:</strong> ${e.split(":")[1]}`,l.appendChild(t)})),s.appendChild(l),e.appendChild(t),e.appendChild(i),e.appendChild(s),e}())},n=e.p+"images/margherita.jpg",a=e.p+"images/pepperoni.jpg",i=e.p+"images/BBQ Chicken.jpg",o=e.p+"images/Veggie Special.jpg",r=e.p+"images/Smoked Chicken Pizza.jpg",s=e.p+"images/Spicy Chicken Pizza.jpg",c=e.p+"images/Alfredo Chicken Pizza.jpg",d=e.p+"images/Four Cheese Pizza.jpg";function l(){document.getElementById("content").innerHTML=""}t(),function(){const e=document.getElementById("home-btn"),p=document.getElementById("menu-btn"),m=document.getElementById("about-btn"),h=document.getElementById("contact-btn");e.addEventListener("click",(()=>{l(),t()})),p.addEventListener("click",(()=>{l(),function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.classList.add("menu");const l=document.createElement("h1");l.textContent="Our Menu",t.appendChild(l);const p=document.createElement("div");p.classList.add("menu-container"),[{name:"Margherita",description:"A timeless classic, the Margherita pizza features a simple and flavorful combination of fresh tomatoes, mozzarella cheese, and basil, all atop a light tomato sauce.",image:n},{name:"Pepperoni",description:"One of the most popular pizza choices worldwide, this pizza features slices of spicy, savory pepperoni on a cheesy and saucy base. Made Halal with certified beef or turkey pepperoni.",image:a},{name:"BBQ Chicken",description:"A rich, smoky, and tangy pizza loaded with grilled chicken and barbecue sauce, balanced with fresh veggies and melted cheese.",image:i},{name:"Veggie Special",description:"Colorful and healthy pizza packed with a mix of vegetables, perfect for vegetarians or anyone looking for a lighter option.",image:o},{name:"Smoked Chicken Pizza",description:"This pizza brings the rich, smoky flavor of chicken together with caramelized onions and a light tomato base.",image:r},{name:"Spicy Chicken Pizza",description:"A pizza with a kick! This flavor is popular for those who love spicy food, featuring spiced chicken and a mix of fresh vegetables.",image:s},{name:"Alfredo Chicken Pizza",description:"A creamy, cheesy pizza made with an Alfredo sauce base, perfect for those who love rich, savory flavors.",image:c},{name:"Four Cheese Pizza",description:"A creamy, cheesy delight for cheese lovers, combining four types of cheese for a rich and gooey pizza experience.",image:d}].forEach((e=>{const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("img");n.src=e.image,n.alt=e.name,t.appendChild(n);const a=document.createElement("h3");a.textContent=e.name,t.appendChild(a);const i=document.createElement("p");i.textContent=e.description,t.appendChild(i),p.appendChild(t)})),t.appendChild(p),e.appendChild(t)}()})),m.addEventListener("click",(()=>{l(),function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.classList.add("about");const n=document.createElement("h1");n.textContent="About Us",t.appendChild(n);const a=document.createElement("h2");a.textContent="Our Story",t.appendChild(a);const i=document.createElement("p");i.textContent="Welcome to Crust & Flame, where every pizza is a masterpiece crafted with love, tradition, and the finest ingredients. Our journey began with a simple idea: to create exceptional pizzas that celebrate the art of pizza-making.",t.appendChild(i);const o=document.createElement("h2");o.textContent="Our Mission",t.appendChild(o);const r=document.createElement("p");r.innerHTML="<i class='fas fa-bullseye'></i> At Crust & Flame, our mission is to deliver an unforgettable dining experience by crafting pizzas with a perfect balance of tradition and innovation. We aim to bring people together, one delicious slice at a time.",t.appendChild(r);const s=document.createElement("h2");s.textContent="Our Values",t.appendChild(s);const c=document.createElement("ul");c.innerHTML="\n        <li><i class='fas fa-handshake'></i> <strong>Quality:</strong> We use only the finest ingredients and time-tested recipes.</li>\n        <li><i class='fas fa-heart'></i> <strong>Passion:</strong> Our chefs are dedicated to their craft, ensuring every pizza is perfect.</li>\n        <li><i class='fas fa-leaf'></i> <strong>Freshness:</strong> We prioritize fresh, locally-sourced ingredients for the best taste.</li>\n        <li><i class='fas fa-users'></i> <strong>Community:</strong> We support local farmers and give back to the community.</li>\n    ",t.appendChild(c);const d=document.createElement("h2");d.textContent="Our History",t.appendChild(d);const l=document.createElement("p");l.innerHTML="<i class='fas fa-history'></i> Our story began with a passion for pizza and a desire to create something truly special. Over the years, we’ve grown from a small pizzeria into a beloved local establishment, known for our dedication to quality and flavor.",t.appendChild(l),e.appendChild(t)}()})),h.addEventListener("click",(()=>{l(),function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.classList.add("contact");const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const a=document.createElement("h2");a.textContent="We'd Love to Hear from You!",t.appendChild(a);const i=document.createElement("p");i.textContent="At Crust & Flame, your satisfaction is our priority. Whether you have questions about our menu, need to place a special order, or simply want to give us feedback, we're here for you. Feel free to reach out using any of the methods below, and we'll get back to you as soon as possible.",t.appendChild(i);const o=document.createElement("h2");o.textContent="Visit Us",t.appendChild(o);const r=document.createElement("h3");r.textContent="Crust & Flame - Woodfired Pizzeria",t.appendChild(r);const s=document.createElement("p");s.innerHTML="<i class='fas fa-map-marker-alt'></i> 123 Pizza Lane, Flavor Town, NY 10001 <br/>📍 <a href='#'>Get Directions</a>",t.appendChild(s);const c=document.createElement("h2");c.textContent="Call Us",t.appendChild(c);const d=document.createElement("p");d.innerHTML="<i class='fas fa-phone'></i> Have a quick question? Give us a call: <br/><strong>(123) 456-7890</strong>",t.appendChild(d);const l=document.createElement("h2");l.textContent="Opening Hours",t.appendChild(l);const p=document.createElement("p");p.textContent="We're open 7 days a week:",t.appendChild(p);const m=document.createElement("p");m.innerHTML="<i class='far fa-clock'></i> <strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM",t.appendChild(m);const h=document.createElement("p");h.innerHTML="<i class='far fa-clock'></i> <strong>Saturday - Sunday:</strong> 12:00 PM - 11:00 PM",t.appendChild(h);const u=document.createElement("h2");u.textContent="Email Us",t.appendChild(u);const f=document.createElement("p");f.innerHTML="<i class='fas fa-envelope'></i> Prefer to write to us? Email us at: <br/><a href='mailto:info@crustandflame.com'>info@crustandflame.com</a>",t.appendChild(f);const g=document.createElement("h2");g.textContent="Connect with Us",t.appendChild(g);const y=document.createElement("div");y.classList.add("social-media"),y.innerHTML="\n        <a href='#'><i class='fab fa-facebook-f'></i> Facebook</a> |\n        <a href='#'><i class='fab fa-instagram'></i> Instagram</a> |\n        <a href='#'><i class='fab fa-twitter'></i> Twitter</a>\n    ",t.appendChild(y),e.appendChild(t)}()}))}()})();