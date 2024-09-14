// Change header background color on scroll
const dynamicNav = document.getElementById("head");

function changeBackColor() {
    if (window.scrollY > 20) {
        dynamicNav.classList.add("head-active");
    } else {
        dynamicNav.classList.remove("head-active");
    }
}

window.addEventListener("scroll", changeBackColor);

// Document ready
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const navBar = document.getElementById('navBar');
    const closeButton = document.getElementById('close');
    
    // Toggle the mobile menu
    menuButton.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
    
    // Close the mobile menu
    closeButton.addEventListener('click', () => {
        navBar.classList.remove('active');
    });
    
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const closeDropdown = document.getElementById('cl');
    
    // Toggle the dropdown menu
    dropdown.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
    
    // Close the dropdown menu
    closeDropdown.addEventListener('click', () => {
        dropdownContent.classList.remove('show');
    });
    
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Highlight the active link based on the current page
const navLinks = document.querySelectorAll('nav ul li a');

// Get the current page URL, removing any query parameters or fragments
const currentPage = window.location.pathname.split('/').pop().split('?')[0].split('#')[0];

// Define pages related to "About Us" section
const aboutPages = ['History.html', 'miss-AND-vis.html', 'belief.html', 'structure.html'];

// Loop through the navigation links and match the href with the current page
navLinks.forEach(link => {
    const linkPage = link.href.split('/').pop().split('?')[0].split('#')[0];

    // If the current page matches an "About Us" dropdown page, highlight "About Us"
    if (aboutPages.includes(currentPage)) {
        const aboutLink = document.querySelector('nav ul li a#about');
        aboutLink.classList.add('active');
    }

    // Highlight the current link for other pages
    if (linkPage === currentPage && !aboutPages.includes(currentPage)) {
        link.classList.add('active'); // Add 'active' class to the matched link
    }
});

// // Change header background color on scroll
// const dynamicNav = document.getElementById("head");

// function changeBackColor() {
//     if (window.scrollY > 20) {
//         dynamicNav.classList.add("head-active");
//     } else {
//         dynamicNav.classList.remove("head-active");
//     }
// }

// window.addEventListener("scroll", changeBackColor);

// // media.js

// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('menu-btn');
//     const navBar = document.getElementById('navBar');
//     const closeButton = document.getElementById('close');

//     // Toggle the mobile menu
//     menuButton.addEventListener('click', () => {
//         navBar.classList.toggle('active');
//     });

//     // Close the mobile menu
//     closeButton.addEventListener('click', () => {
//         navBar.classList.remove('active');
//     });

//     const dropdown = document.querySelector('.dropdown');
//     const dropdownContent = document.querySelector('.dropdown-content');
//     const dropdownIcon = document.getElementById('dropdownIcon');
//     const closeDropdown = document.getElementById('cl');

//     // Toggle the dropdown menu
//     dropdown.addEventListener('click', () => {
//         dropdownContent.classList.toggle('show');
//     });

//     // Close the dropdown menu
//     closeDropdown.addEventListener('click', () => {
//         dropdownContent.classList.remove('show');
//     });

//     // Smooth scrolling for internal links
//     const links = document.querySelectorAll('nav a[href^="#"]');

//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             document.querySelector(link.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
