function order(){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const date = document.getElementById('date').value;
    const checkbox = document.getElementById('checkbox').checked;

    if (checkbox) {
        alert(`${name}, спасибо за запись на дату: ${date}\n\nВаши данные:\nИмя: ${name}\nТелефон: ${phone}\nПочта: ${email}\nКомментарий: ${comment}\nДата: ${date}`);
    } else {
        alert("Вы не согласились с обработкой персональных данных")
    }
}

// Слайдер
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();


