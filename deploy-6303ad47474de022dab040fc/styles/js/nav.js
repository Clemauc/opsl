const burger = document.querySelector(".burger")
const menu = document.querySelector("#nav ul")


burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})