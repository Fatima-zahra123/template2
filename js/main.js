// var scrollToTopButton = document.querySelector('.scroll')
// window.onscroll = function () {
//   console.log(window.scrollY)
//   if (window.scrollY >= 600) {
//     scrollToTopButton.style.right = '20px'
//   } else {
//     scrollToTopButton.style.right = '-60px'
//   }
// }

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// })

// Toggle navigation menu
const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('.header ul')

hamburger.addEventListener('click', () => {
  ul.classList.toggle('show')
})

const menuItems = document.querySelectorAll('.header nav li a')
menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    menuItems.forEach((link) => link.classList.remove('active'))
    item.classList.add('active')
  })
})

var selection = ''
const filters = document.querySelectorAll(
  '.portfolio .container .portfolio-content ul li',
)
const images = document.querySelectorAll(
  '.portfolio .container .portfolio-content .image',
)

filters.forEach((item) => {
  item.addEventListener('click', (event) => {
    images.forEach((img) => {
      img.style.display = 'block'
    })

    //activate a filter
    filters.forEach((filter) => {
      filter.classList.remove('active')
    })
    item.classList.add('active')

    //filter pics
    selection = item.getAttribute('data-type')
    images.forEach((img) => {
      if (img.getAttribute('data-type') != selection && selection != 'ALL') {
        img.style.display = 'none'
        console.log(img)
      }
    })

    console.log(event.target.getAttribute('data-type'), selection, item)
  })
})
