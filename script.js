// ======================================
// SMARTAPPS STUDIO
// script.js
// Part 1
// ======================================

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {

themeBtn.innerHTML = "☀️";

localStorage.setItem("theme", "dark");

} else {

themeBtn.innerHTML = "🌙";

localStorage.setItem("theme", "light");

}

});

}

// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark");

if (themeBtn) {

themeBtn.innerHTML = "☀️";

}

}



// ======================================
// Back To Top
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (!topBtn) return;

if (window.scrollY > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

if (topBtn) {

topBtn.style.display = "none";

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// ======================================
// Navbar Active Link
// ======================================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link=>{

const href = link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

});



// ======================================
// Console Message
// ======================================

console.log("SmartApps Studio Website Loaded Successfully");
// ======================================
// Mobile Menu
// ======================================

const menuBtn = document.querySelector(".menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

        menuBtn.innerHTML =
            navbar.classList.contains("show") ? "✖" : "☰";

    });

}

// ======================================
// Scroll Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(

".why-card, .app-card, .faq-item, .stat-item, .about-home, .cta"

);

const revealOnScroll = () => {

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================================
// Animated Counter
// ======================================

const counters = document.querySelectorAll(".stat-item h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (!isNaN(number)) {

        let count = 0;

        const update = () => {

            count++;

            counter.innerText = count + "%";

            if (count < number) {

                requestAnimationFrame(update);

            }

        };

        update();

    }

});


// ======================================
// Footer Year
// ======================================

const yearElement = document.querySelector(".copyright p");

if (yearElement) {

    const year = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${year} SmartApps Studio. All Rights Reserved.`;

}


// ======================================
// Page Loaded
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Welcome to SmartApps Studio 🚀");

});
