
// nav
const navLinks = document.getElementById("navLinks");
const menuBtn = document.querySelector("nav > .fa-bars");
const closeBtn = document.querySelector(".nav-links .fa-times");


// open mobile menu
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.style.right = "0";
    });
}

// close mobile menu
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navLinks.style.right = "-250px";
    });
}

// nav smooth scroll

const navItems = document.querySelectorAll(".nav-links ul li a");

navItems.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        //  # links
        if (targetId && targetId.startsWith("#")) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        }

        // Close mobile menu
        navLinks.style.right = "-250px";
    });

});

// visit btn

const heroButtons = document.querySelectorAll(".visit-btn");

heroButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        const buttonText = this.textContent.trim();

        if (buttonText.includes("Visit Us")) {

            event.preventDefault();

            const courses = document.querySelector("#courses");

            if (courses) {
                courses.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});
// contact btn

heroButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        const buttonText = this.textContent.trim();

        if (buttonText.includes("CONTACT")) {

            event.preventDefault();

            const contact = document.querySelector("#contact");

            if (contact) {
                contact.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});

// background scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});


// sections

const sections = document.querySelectorAll(
    ".course, .departments, .facilities, .testimonial, .cta, .footer"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {
    observer.observe(section);
});