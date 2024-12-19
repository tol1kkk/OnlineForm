let theme = document.querySelector('.img_logo_header');
let divTheme = document.querySelector('body');
theme.addEventListener('click', darkTheme)
function darkTheme() {
    divTheme.classList.toggle("dark")
}

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

// COOKIE

let cookie = document.querySelector('.cookies-agreement');
let cookieButton = document.querySelector('.cookies-button');
cookieButton.addEventListener('click', () => {
    cookie.classList.add('cookies-agreement-closed');
})

let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// BURGER MENU

let iconMenu = document.querySelector(".image_burder_menu");
let list = document.querySelector(".ul_navigation");
let nav = document.querySelector(".navigation");
let header = document.querySelector("header");
let btn = document.querySelector(".burger-menu");
btn.addEventListener('click', addMenu);
header.style.alignItems = "start";
function addMenu() {
    if (list.classList.contains('active')) {
        list.classList.remove('active')
        iconMenu.src = "img/ui.png"
        nav.style.height = "50px"
        nav.style.width = "400px"
        btn.classList.remove("rotate")
    } else {
        list.classList.add('active')
        iconMenu.src = "img/close.png"
        nav.style.width = "400px"
        btn.classList.add("rotate")
    }
}

// КОМЕНТАРІ 

    let commentForm = document.querySelector('.comment-form');
    let commentList = document.querySelector('.comment-list');
    let submitButton = document.querySelector('.submit-button');
    commentForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let liComment = document.createElement("li")
        liComment.classList.add('.user-comment')
        liComment.textContent = evt.target.elements.commentField.value;
        commentList.append(liComment)
        evt.target.commentField.value = ""
        liComment.style.width = "1050px"
        liComment.style.height = "50px"
        liComment.style.background = "#e95d2c"
        liComment.style.color = "#d9d9d9"
        liComment.style.borderRadius = "8px"
        liComment.style.display = "flex"
        liComment.style.alignItems = "center"
        liComment.style.paddingLeft = "18px"
        liComment.style.fontFamily = "Braah One, sans-serif" 
        liComment.style.marginBottom = "10px"
        commentList.style.height = "350px"
        commentForm.style.marginTop = "30px"
    })

// СЕРЦЕ

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.addEventListener('click', clickHeart);

function clickHeart() {
    if (heart.classList.toggle('added')) {
        heart.style.backgroundImage = "url('img/heart_added.png')";
        likesNumber.textContent = parseInt(likesNumber.textContent) + 1;
    } else {
        heart.style.backgroundImage = "url('img/heart.png')";
        likesNumber.textContent = parseInt(likesNumber.textContent) - 1;
    }
}