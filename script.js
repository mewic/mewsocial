// Create Back to Top button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Back to Top";
backToTopButton.id = "backToTop";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.fontSize = "16px";
backToTopButton.style.backgroundColor = "#1f85ff";
backToTopButton.style.color = "#ffffff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.transition = "opacity 0.3s ease";
document.body.appendChild(backToTopButton);

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll back to top when clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
