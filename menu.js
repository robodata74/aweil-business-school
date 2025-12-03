// menu.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aweil School website loaded.");

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    // Optional: Close menu when a link is clicked (mobile)
    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("active")) {
                mainNav.classList.remove("active");
            }
        });
    });
});
