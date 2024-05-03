let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
    slides[slideIndex - 1].style.display = "none";
}

function SetupImageHover() {

    // Get all product image elements
    var productImages = document.querySelectorAll('.product-image');

    // Loop through each product image element
    productImages.forEach(function (img) {
        // Add event listener for mouseover
        img.addEventListener('mouseover', function () {
            // Get the hover image from the data attribute
            var hoverImage = img.getAttribute('data-hover-image');
            // Change the image source on mouseover
            img.src = 'images/10009.jpg';
        });

        // Add event listener for mouseout
        img.addEventListener('mouseout', function () {
            // Get the original image source from the src attribute
            var originalImage = img.getAttribute('src');
            // Change the image source back on mouseout
            img.src = 'images/10010.jpg';
        });
    });
}