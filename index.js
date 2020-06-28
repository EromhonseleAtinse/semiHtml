// SLIDERS
const slides = document.querySelectorAll('.slide');
const contents = document.querySelectorAll('.content');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
var timeInterval = 10000;
var isPlaying = true;

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

// func pauses slideshow
function pausePLaying() {
    isPlaying = false;
    clearInterval(slideInterval);
}

// func starts slideshow
function startPlaying() {
    isPlaying = true;
    slideInterval = setInterval(slideNext, timeInterval);
}

// start slideshow invoked
startPlaying();

const sliders = [document.querySelector('.slider'), document.querySelector('.content-slider')];

sliders.forEach(sliderContainer => {
    sliderContainer.addEventListener('mouseenter', pausePLaying);
});

sliders.forEach(sliderContainer => {
    sliderContainer.addEventListener('mouseleave', e => {
        if (!isPlaying)
            startPlaying();
    });
});






function slideNext() {
    // images
    const current = document.querySelector('.slide.current');
    if (current.nextElementSibling) {
        current.classList.remove('current');
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));

    // content
    const currentContent = document.querySelector('.content.current');
    if (currentContent.nextElementSibling) {
        currentContent.classList.remove('current');
        currentContent.nextElementSibling.classList.add('current');
    } else {
        contents[0].classList.add('current');
    }
    setTimeout(() => currentContent.classList.remove('current'));
}

function slidePrev() {
    // images
    const current = document.querySelector('.slide.current');
    if (current.previousElementSibling) {
        current.classList.remove('current');
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));

    // content
    const currentContent = document.querySelector('.content.current');
    if (currentContent.previousElementSibling) {
        currentContent.classList.remove('current');
        currentContent.previousElementSibling.classList.add('current');
    } else {
        contents[contents.length - 1].classList.add('current');
    }
    setTimeout(() => currentContent.classList.remove('current'));
}


document.querySelector('.show-partners').addEventListener('click', e => {
    const officialPartners = document.querySelector('.official-partners');
    const someLabel = document.querySelector('.some-label');
    e.preventDefault();
    officialPartners.classList.toggle('show-label');
    someLabel.classList.toggle('hide-some-label');
    if (e.target.innerHTML === 'See all partners')
        e.target.innerHTML = 'See less partners';
    else
        e.target.innerHTML = 'See all partners';
})