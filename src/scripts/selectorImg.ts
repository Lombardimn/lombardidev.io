let isDarkMode = document.documentElement.classList.contains('theme-dark')

const imgMain = document.querySelector('#img-main')
const btn = document.querySelector('#scheme')!

btn.addEventListener('click', () => {
  isDarkMode = !isDarkMode
  queryTheme()
})

const queryTheme = () => {
  imgMain?.setAttribute('src', isDarkMode ? '/images/body/main-dark.png' : '/images/body/main-3.png')
}