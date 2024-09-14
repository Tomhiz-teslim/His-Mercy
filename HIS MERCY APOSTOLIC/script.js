// Hamburger Menu Toggle for mobile view
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('navBar').classList.toggle('show');
});

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

// Highlight the active link based on the current page
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split('/').pop().split('?')[0].split('#')[0];
const aboutPages = ['History.html', 'miss-AND-vis.html', 'belief.html', 'structure.html'];

// Debug: log the current page
console.log('Current Page:', currentPage);

// Remove 'active' class from all links before applying it to the current one
navLinks.forEach(link => link.classList.remove('active'));

// Loop through the navigation links and match the href with the current page
navLinks.forEach(link => {
    const linkPage = link.href.split('/').pop().split('?')[0].split('#')[0];

    // Debug: log the link page
    console.log('Link Page:', linkPage);

    if (aboutPages.includes(currentPage)) {
        // Highlight "ABOUT US" if on an "About Us" page
        const aboutLink = document.querySelector('nav ul li a#about');
        aboutLink.classList.add('active');

        // Highlight the specific dropdown link
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    } else if (linkPage === currentPage) {
        // Highlight the current link for other pages
        link.classList.add('active');
    }
});

// Open and close the navbar for mobile view
const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function toggleNavBar() {
    myNavBar.style.display = (myNavBar.style.display === "none" || myNavBar.style.display === "") ? "flex" : "none";
}

openBtn.addEventListener('click', toggleNavBar);
closeBtn?.addEventListener('click', toggleNavBar); // Optional chaining in case 'closeBtn' does not exist

// Dropdown Menu Toggle for "ABOUT US"
const aboutLink = document.getElementById('about');
const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownContent = document.getElementById('navdrop');
const closeButton = document.getElementById('cl');

function toggleDropdown(event) {
    event.preventDefault(); // Prevent default action, if any
    dropdownContent.classList.toggle('show');
}

function closeDropdown() {
    dropdownContent.classList.remove('show');
}

// Add event listeners to toggle and close the dropdown
aboutLink.addEventListener('click', toggleDropdown);
dropdownIcon.addEventListener('click', toggleDropdown);
closeButton.addEventListener('click', closeDropdown);
