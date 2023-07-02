let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let items = document.getElementsByClassName("item");

  var images = [];
  images[0] = "url(../images/background_1.png)";
  images[1] = "url(../images/background_2.png)";
  images[2] = "url(../images/background_3.png)";

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < items.length; i++) {
    items[i].className = items[i].className.replace(" active", "");
    console.log(items[i]);
  }

  slides[slideIndex - 1].style.display = "block";
  items[slideIndex - 1].className += " active";

  document.getElementsByClassName("main")[0].style.backgroundImage =
    images[slideIndex - 1];
}
