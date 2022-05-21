const hamburger = document.querySelector('#ham-img')
const navMenu = document.querySelector('.navbar')
const remove = document.querySelector('.cross')

hamburger.addEventListener('click', showItems)
remove.addEventListener('click', close)

function showItems() {
    navMenu.classList.toggle('active')
}

function close() {
    navMenu.classList.toggle('active')
} 

