const btn = document.querySelector('.theme__checkbox');
const body = document.querySelector('body');
const headerInput = document.querySelector('.header-form__input');
const headeerFormBtn = document.querySelector('.header-form__btn');
const themeThumbler = document.querySelector('.theme__thumbler');
const lable = document.querySelector('.theme__lable');


const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    headerInput.classList.toggle('dark-theme__input');
    headeerFormBtn.classList.toggle('dark-theme__form-btn');
    themeThumbler.classList.toggle('dark-theme__thumbler');
    lable.classList.toggle('dark-theme__lable');
}

btn.addEventListener('change', toggleTheme);