// 0 means the first image.
let currentIndex = 0; 

//  queryselectorall : find all elements images on the page that have the class carousel-image , document refers the whole page
// Store them inside the variable images.
const images = document.querySelectorAll('.carousel-image'); 

// Function to show the slide at the given index
// Remove the active class from all images (so all become hidden). and add it to the image at the specified index
// foreach loop go through each image
//if i equals to index add active class to that image
// .active controls visibility (like opacity, display, z-index, etc.).
function showSlide(index){
    images.forEach((img,i) => {
       img.classList.remove('active');
       if(i === index){
        img.classList.add('active');
       } 
    });
}
// If the current index is:

// 0 → becomes 1

// 1 → becomes 2

// 2 → becomes 3

// 3 → becomes 4

// 4 → becomes 5

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
    // When it reaches 5 (last image):
//     So it loops back to 0 — first image again.

// Then it calls showSlide(currentIndex) to update the screen.
}
function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// setInterval(nextSlide ,7000);