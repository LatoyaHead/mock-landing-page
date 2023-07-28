const calendar = document.getElementById('calendar')
const mainImg = document.getElementById('main-img')
const main = document.getElementById('main')
const devices = document.getElementById('devices')
const contract = document.getElementById('contract')

calendar.addEventListener('click',() => changeImg('./img/calendar-svgrepo-com (1).png'))

devices.addEventListener('click',() => changeImg('./img/devices-svgrepo-com.png'))

contract.addEventListener('click',() => changeImg('./img/open-book-book-svgrepo-com.png'))

main.addEventListener('click',() => changeImg('./img/fitness-removebg-preview.png'))

function changeImg(img) {
    mainImg.src = img
    mainImg.style.width = '75%'
    mainImg.style.height = '75%'
    mainImg.style.paddingTop = '20px'
}

