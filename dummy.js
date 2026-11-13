// HOME PAGE JAVASCRIPT

let bannerImage = document.getElementById("bannerImage");

if (bannerImage) {

    let nextBtn = document.getElementById("nextBtn");
    let prevBtn = document.getElementById("prevBtn");
    let dots = document.querySelectorAll(".dot");

    let bannerImages = [
        "images/kids-banner.png",
        "images/kids-banner-2.png",
        "images/kids-banner-3.png"
    ];

    let currentIndex = 0;

    function showImage() {
        bannerImage.src = bannerImages[currentIndex];

        dots.forEach(function(dot, index) {
            dot.classList.remove("active");

            if (index === currentIndex) {
                dot.classList.add("active");
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            currentIndex++;

            if (currentIndex >= bannerImages.length) {
                currentIndex = 0;
            }

            showImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function() {
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = bannerImages.length - 1;
            }

            showImage();
        });
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            currentIndex = index;
            showImage();
        });
    });

    let shopButton = document.getElementById("shopButton");

    if (shopButton) {
        shopButton.addEventListener("click", function() {
            window.location = "collections.html";
        });
    }

    let categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function(card) {
        card.addEventListener("click", function() {
            window.location = "collections.html";
        });
    });
}