const btn = document.querySelector('.theme__checkbox');
const body = document.querySelector('body');
const headerInput = document.querySelector('.header-form__input');
const headeerFormBtn = document.querySelector('.header-form__btn');
const themeThumbler = document.querySelector('.theme__thumbler');
const lable = document.querySelector('.theme__lable');
const lights = document.querySelectorAll('.light');
const darks = document.querySelectorAll('.dark');

console.log(localStorage.getItem('theme'));


const state = {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', "light"),
}



const toggleTheme = () => {
    console.log(state);
    body.classList.toggle('dark-theme');
    headerInput.classList.toggle('dark-theme__input');
    headeerFormBtn.classList.toggle('dark-theme__form-btn');
    themeThumbler.classList.toggle('dark-theme__thumbler');
    lable.classList.toggle('dark-theme__lable');
    lights.forEach(el => el.classList.toggle('accent-icons'));
    darks.forEach(el => el.classList.toggle('accent-icons'));
}


const changeTheme = () => {
    toggleTheme();
    localStorage.getItem('theme') === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
};

state.theme === "dark" && toggleTheme();

btn.addEventListener('change', changeTheme);