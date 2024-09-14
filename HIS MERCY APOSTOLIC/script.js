// Hamburger Menu Toggle for mobile view
document.getElementById('menu-btn').addEventListener('click', function() {
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

// Get the current page URL, removing any query parameters or fragments
const currentPage = window.location.pathname.split('/').pop().split('?')[0].split('#')[0];

// Define pages related to "About Us" section
const aboutPages = ['History.html', 'miss-AND-vis.html', 'belief.html', 'structure.html'];

// Loop through the navigation links and match the href with the current page
navLinks.forEach(link => {
    const linkPage = link.href.split('/').pop().split('?')[0].split('#')[0];

    // Check if the current page matches one of the "About Us" pages
    if (aboutPages.includes(currentPage)) {
        // Highlight "ABOUT US" if on an "About Us" page
        const aboutLink = document.querySelector('nav ul li a#about');
        aboutLink.classList.add('active');

        // Highlight the specific dropdown link
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    } else if (linkPage === currentPage && !aboutPages.includes(currentPage)) {
        // Highlight the current link for other pages (e.g., home, contact, etc.)
        link.classList.add('active');
    }
});

// Open and close the navbar for mobile view
const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function openAndClose() {
    if (myNavBar.style.display === "none") {
        myNavBar.style.display = "flex";
    } else {
        myNavBar.style.display = "none";
    }
}

openBtn.addEventListener('click', openAndClose);
closeBtn?.addEventListener('click', openAndClose); // Optional chaining in case 'closeBtn' does not exist

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
