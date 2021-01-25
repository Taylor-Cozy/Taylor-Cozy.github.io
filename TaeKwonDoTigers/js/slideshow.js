var slideIndex = 1;
var backgroundImage;

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {slideIndex = 1};
    if(n < 1) { slideIndex = slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    var slideshow = document.getElementsByClassName("blur");
    slideshow[0].style.backgroundImage = `url(./img/gallery/gallery_${slideIndex}.jpg)`;
}

function autoSlide(){
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 5000);
}

function setBackgroundBlur(image){
    backgroundImage = image;
}

autoSlide();
