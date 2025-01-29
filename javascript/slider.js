let slider = document.querySelector('.slider');
let slideImg = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dostContainer .dot");

var counter = 0;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        slideImg[counter].style.animation = "next1 0.5s ease-in forwards"
    
        if (counter >= slideImg.length -1) {
            counter = 0
        } else {
            counter++;
        }

        indicators()
        slideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    }, 6000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Start auto-play on page load
startAutoPlay();

// Pause auto-play on hover
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }

    dots[counter].classList.add('active')
}