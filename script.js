const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
         nav.classList.remove('active');
    })
}

function search() {
    // Get the input value
    var searchTerm = document.getElementById("searchInput").value;

    // Perform the search (replace this with your actual search logic)
    alert("Searching for: " + searchTerm);
}
window.onload = function() {
    // Check if the alert has been shown before in this session and if the registration has not been completed
    if (!sessionStorage.getItem("alertShown") && !sessionStorage.getItem("registrationCompleted")) {
        var overlay = document.createElement('div');
        overlay.id = 'overlay';
        var alertBox = document.createElement('div');
        alertBox.classList.add('alert-box');
        alertBox.innerHTML = `
            <h2>Welcome</h2>
            <p>Please register your phone number for a seamless experience</p>
            <!-- Your phone number registration form goes here -->
            <form>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Mobile Number">
                <button type="submit" onclick="register()">Register</button>
            </form>
            <button class="skip-button" onclick="skip()">Skip</button>
        `;
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay);
    }
};
function register() {
    // Perform registration process here

    // Set a flag in sessionStorage to indicate that the registration has been completed
    sessionStorage.setItem("registrationCompleted", true);

    // Clear sessionStorage for the alert
    sessionStorage.removeItem("alertShown");
}
function skip() {
    // Redirect to index.html
    window.location.href = "index.html";
}
function scrollToAboutUs() {
    var aboutUsSection = document.getElementById("About-us");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
} 
function scrollToContactus() {
    var contactUsSection = document.getElementById("contact-us");
    contactUsSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToCategories() {
    var categoriesSection = document.getElementById("categories");
    categoriesSection.scrollIntoView({ behavior: "smooth" });
}

