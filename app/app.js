
function showContent(page) {
    // Hide the current content
    document.getElementById('content').style.display = 'none';

    // Retrieve content for the clicked page
    let newContent = '';
    if (page === 'home') {
        newContent = `
            <h1>Welcome to our Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="home-image.jpg" alt="Home Image">
        `;
    } else if (page === 'about') {
        newContent = `
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="about-image.jpg" alt="About Image">
        `;
    } else if (page === 'services') {
        newContent = `
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img src="services-image.jpg" alt="Services Image">
        `;
    } else if (page === 'contact') {
        newContent = `
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="contact-image.jpg" alt="Contact Image">
        `;
    }

    // Display the new content
    document.getElementById('content').innerHTML = newContent;
    document.getElementById('content').style.display = 'block';
}