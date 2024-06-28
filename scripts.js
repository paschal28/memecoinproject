function buyPaschalCoin() {
    alert("still learning backend boss i only make use of html css and javascript ");
    // Implement the logic to redirect to the purchase page or initiate the purchase process
}

// Smooth scrolling for navigation link
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


