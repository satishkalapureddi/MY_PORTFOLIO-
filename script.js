/*=====================================
    PORTFOLIO JAVASCRIPT
======================================*/

//======================
// PRELOADER
//======================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

//======================
// TYPING EFFECT
//======================

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI Designer",
    "JavaScript Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 100);

}

typeEffect();

//======================
// STICKY HEADER
//======================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 50
    );

});

//======================
// BACK TO TOP
//======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

//======================
// SMOOTH LINKS
//======================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

//======================
// SCROLL REVEAL
//======================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    "section"
).forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

//======================
// MOBILE MENU
//======================

const menuBtn =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.right = "20px";

        nav.style.background = "#111827";

        nav.style.padding = "20px";

        nav.style.borderRadius = "12px";

    }

});

//======================
// ACTIVE MENU
//======================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        PORTFOLIO SCRIPT - PART 2
==========================================*/

// ======================
// PARTICLE BACKGROUND
// ======================

const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 8 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDuration =
        Math.random() * 8 + 6 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 14000);

}

setInterval(createParticle, 250);

// ======================
// SKILL BAR ANIMATION
// ======================

const bars =
document.querySelectorAll(".progress span");

const skillObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=
entry.target.style.width;

}

});

});

bars.forEach(bar=>{

skillObserver.observe(bar);

});

// ======================
// BUTTON RIPPLE
// ======================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.clientX-
this.getBoundingClientRect().left;

const y=e.clientY-
this.getBoundingClientRect().top;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ======================
// HERO IMAGE ROTATION
// ======================

const profile=document.querySelector(".profile-card");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

profile.style.transform=

`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

// ======================
// NAV LINK ACTIVE
// ======================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

// ======================
// SCROLL FADE
// ======================

window.addEventListener("scroll",()=>{

document.querySelectorAll(".card").forEach(card=>{

const rect=card.getBoundingClientRect();

if(rect.top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

// ======================
// INITIAL STATE
// ======================

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="0.8s";

});

// ======================
// FLOATING EFFECT
// ======================

const floatElements=document.querySelectorAll(
".skill,.info div"
);

floatElements.forEach((item,index)=>{

item.style.animation=

`floating 4s ease-in-out infinite`;

item.style.animationDelay=

(index*0.2)+"s";

});

// ======================
// DYNAMIC YEAR
// ======================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()}
 Kalapureddi Satish.
 All Rights Reserved.`;

}

// ======================
// CONSOLE MESSAGE
// ======================

console.log(
"%cPortfolio Developed by Kalapureddi Satish",
"color:#00E5FF;font-size:18px;font-weight:bold;"
);

// ======================
// END
// ======================


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send(
        "service_v9zl39l",
        "template_wdv8s0s",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
    ).then(() => {

        alert("Message sent successfully!");

        form.reset();

    }).catch((error) => {

        alert("Failed to send message.");

        console.error(error);

    });

});