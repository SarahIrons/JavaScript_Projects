const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');

//store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

//to change images dynamically every 2 sec use set interval method
setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;
    console.log("active slide", activeSlide);
    console.log("slide count",slideCount);
    if(activeSlide===slideCount) {
        activeSlide = 0;
    }
    slides[activeSlide].classList.add('active');
}, 2000);
