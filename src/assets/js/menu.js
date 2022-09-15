const hamburger = document.querySelector('#ham-img')
const navMenu = document.querySelector('.navbar')
const remove = document.querySelector('.cross')

const elements = document.getElementsByClassName("nav-item");

hamburger.addEventListener('click', showItems)

remove.addEventListener('click', close)


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', close, false);
}

function showItems() {
    navMenu.classList.toggle('active')
}

function close() {
    navMenu.classList.toggle('active')
    console.log('close')
} 

