// Get HTML elements
let bannerImage = document.getElementById("bannerImage");
if (bannerImage) {

    let nextBtn = document.getElementById("nextBtn");
    let prevBtn = document.getElementById("prevBtn");
    let dots = document.querySelectorAll(".dot");

    // Store banner image paths
    let bannerImages = [
        "images/kids-banner.png",
        "images/kids-banner-2.png",
        "images/kids-banner-3.png"
    ];

    // Track the current image
    let currentIndex = 0;

    // Show the selected image
   function showImage() {

    bannerImage.classList.remove("slide");

    void bannerImage.offsetWidth;

    bannerImage.src = bannerImages[currentIndex];

    bannerImage.classList.add("slide");

    dots.forEach(function (dot, index) {

        dot.classList.remove("active");

        if (index === currentIndex) {
            dot.classList.add("active");
        }

    });
}
    //button to contact page
    let shopButton = document.getElementById("shopButton");

    if (shopButton) {
        shopButton.addEventListener("click", function () {
            window.location = "collections.html";
        });
    }
    // Next image
    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            currentIndex++;

            if (currentIndex >= bannerImages.length) {
                currentIndex = 0;
            }

            showImage();

        });

    }

    // Previous image
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = bannerImages.length - 1;
            }

            showImage();

        });
    }

    //category image redirection
    let categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function () {

            window.location = "collections.html";

        });

    });

    let filterSection = document.querySelector(".filter-section");

    if (filterSection) {

        function updateFilterLayout() {

            if (window.innerWidth <= 600) {
                filterSection.removeAttribute("open");
            } else {
                filterSection.setAttribute("open", "");
            }

        }

        updateFilterLayout();

        window.addEventListener("resize", updateFilterLayout);

    }
}

//contact page codes
let contactform = document.getElementById("contact-form")
let nameInput = document.getElementById("name")
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailInput = document.getElementById("email")
let subjectInput = document.getElementById("subject");
let messageInput = document.getElementById("message");

if (contactform) {

    contactform.addEventListener("submit", function (event) {
        event.preventDefault()
        console.log("Form submitted");
        //name validation
        let customerName = nameInput.value
        if (customerName.trim() === "") {
            // console.log("Name validation passed");
            alert("please enter your name")
            return
        }

        //email validation
        let email = emailInput.value
        if (emailPattern.test(email) === false) {
            //   console.log("email validation passed");
            alert("please enter valid email id")
            return
        }
        //subject validation
        let subject = subjectInput.value;
        if (subject.trim() === "") {
            //   console.log("subject validation passed");
            alert("Please enter a subject");
            return;
        }
        //message validation
        let customerMessage = messageInput.value;
        if (customerMessage.trim() === "") {
            //   console.log("message validation passed");
            alert("Please enter your message");
            return;
        }

        alert("your message has been submitted successfully")
        contactform.reset();
    })

}
// collectionpge search

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let productCards = document.querySelectorAll(".product-card");

if (searchInput) {

    function searchProducts() {

        let searchText = searchInput.value.toLowerCase();

        productCards.forEach(function (card) {

            let productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }

    searchInput.addEventListener("input", searchProducts);

    searchBtn.addEventListener("click", searchProducts);
    // searchInput.reset();

}

let categoryCheckboxes = document.querySelectorAll(
    ".category-filter input[type='checkbox']"
);

let ageCheckboxes = document.querySelectorAll(
    ".age-filter input[type='checkbox']"
);

let colorCheckboxes = document.querySelectorAll(
    ".colors-filter input[type='checkbox']"
);

let arrivalsCheckbox = document.querySelector(
    ".arrivals-filter input[type='checkbox']"
);

function applyFilters() {

    let selectedCategories = [];
    let selectedAges = [];
    let selectedColors = [];

    categoryCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    });

    ageCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedAges.push(checkbox.value);
        }
    });

    colorCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedColors.push(checkbox.value);
        }
    });

    let showNewArrivals = arrivalsCheckbox.checked;

    let noFiltersSelected =
        selectedCategories.length === 0 &&
        selectedAges.length === 0 &&
        selectedColors.length === 0 &&
        !showNewArrivals;

    let visibleProducts = 0;

    productCards.forEach(function (card) {

        let productCategory = card.dataset.category;
        let productAge = card.dataset.age;
        let productColor = card.dataset.color;
        let productArrival = card.dataset.arrival;

        let categoryMatch = selectedCategories.includes(productCategory);
        let ageMatch = selectedAges.includes(productAge);
        let colorMatch = selectedColors.includes(productColor);
        let arrivalMatch = showNewArrivals && productArrival === "new";

        if (noFiltersSelected || categoryMatch || ageMatch || colorMatch || arrivalMatch) {
            card.style.display = "block";
            visibleProducts++;
        } else {
            card.style.display = "none";
        }
    });

    let noProductsMessage = document.getElementById("noProductsMessage");

    if (noProductsMessage) {
        if (!noFiltersSelected && visibleProducts === 0) {
            noProductsMessage.style.display = "block";
        } else {
            noProductsMessage.style.display = "none";
        }
    }
}
categoryCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", applyFilters);
});

ageCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", applyFilters);
});

colorCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", applyFilters);
});

arrivalsCheckbox.addEventListener("change", applyFilters);
// //checkbox filter
// let categoryCheckboxes = document.querySelectorAll(
//     ".category-filter input[type='checkbox']"
// );
// function filterByCategory() {


//     let selectedCategories = [];

//     categoryCheckboxes.forEach(function (checkbox) {

//         if (checkbox.checked) {
//             selectedCategories.push(checkbox.value);
//         }

//     });

//     // console.log(selectedCategories);
//     productCards.forEach(function (card) {

//         let productCategory = card.dataset.category;
//         // console.log(productCategory);

//         if (selectedCategories.includes(productCategory)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }

//     });
// }
// categoryCheckboxes.forEach(function (checkbox) {
//     checkbox.addEventListener("change", filterByCategory);
// });
// //age filter

// let AgeCheckboxes = document.querySelectorAll(
//     ".age-filter input[type='checkbox']"
// );
// function filterByAge() {


//     let selectedAges = [];

//     AgeCheckboxes.forEach(function (checkbox) {

//         if (checkbox.checked) {
//             selectedAges.push(checkbox.value);
//         }

//     });

//     // console.log(selectedCategories)
//     productCards.forEach(function (card) {

//         let productAge = card.dataset.age;
//         // console.log(productCategory);

//         if (selectedAges.includes(productAge)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }

//     });
// }
// AgeCheckboxes.forEach(function (checkbox) {
//     checkbox.addEventListener("change", filterByAge);
// });
// // filter by color
// let colorCheckboxes = document.querySelectorAll(
//     ".colors-filter input[type='checkbox']"
// );

// function filterByColor() {

//     let selectedColors = [];

//     colorCheckboxes.forEach(function (checkbox) {

//         if (checkbox.checked) {
//             selectedColors.push(checkbox.value);
//         }

//     });

//     let matchingProducts = 0;

//     productCards.forEach(function (card) {
//         console.log(productCards[0].dataset.color);
//         let productColor = card.dataset.color;

//         if (selectedColors.includes(productColor)) {
//             card.style.display = "block";
//             matchingProducts++;
//         } else {
//             card.style.display = "none";
//         }

//     });

//     let noProductsMessage = document.getElementById("noProductsMessage");

//     if (selectedColors.length > 0 && matchingProducts === 0) {
//         noProductsMessage.style.display = "block";
//     } else {
//         noProductsMessage.style.display = "none";
//     }
// }

// colorCheckboxes.forEach(function (checkbox) {
//     checkbox.addEventListener("change", filterByColor);
// });
// //new arrivals
// let arrivalsCheckbox = document.querySelector(
//     ".arrivals-filter input[type='checkbox']"
// );
// function filterByArrival() {

//     let showNewArrivals = arrivalsCheckbox.checked;

//     productCards.forEach(function (card) {

//         let productArrival = card.dataset.arrival;

//         if (showNewArrivals && productArrival === "new") {
//             card.style.display = "block";
//         } else if (!showNewArrivals) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }

//     });
// }
// arrivalsCheckbox.addEventListener("change", filterByArrival);