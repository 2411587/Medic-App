// Home page button

function shopNow() {
    alert("Welcome to Medic App! Let's explore our products.");

    window.location.href = "products.html";
}

// Add to Cart button

function addToCart(productName) {
    alert(productName + " added to cart!");
}

// Buy Now button

function buyNow(productName) {
    alert("You selected " + productName + ". Thank you!");
}

// Contact form

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector(".contact-form form").reset();
}