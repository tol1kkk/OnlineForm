// ЗМІННА ТЕМИ

let theme = document.querySelector('.logo_header_img');
let divTheme = document.querySelector('body');
theme.addEventListener('click', darkTheme)
function darkTheme() {
    divTheme.classList.toggle("dark")
}

// COOKIE

let cookie = document.querySelector('.cookies-agreement');
let cookieButton = document.querySelector('.cookies-button');
cookieButton.addEventListener('click', () => {
    cookie.classList.add('cookies-agreement-closed');
})

// КНОПКА ВГОРУ

let upButton = document.querySelector('.upBottom');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown')
    }
});
upButton.addEventListener('click', () => {
    window.scroll({
        top: 0, behavior: 'smooth'
    })
})