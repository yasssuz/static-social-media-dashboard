import { getTheme, handleTheme, setDefaultTheme } from "./handleTheme"

const toggler = document.querySelector('.change-theme-btn')

toggler.addEventListener('click', () => handleTheme(toggler))
window.addEventListener('load', () => {
  const currTheme = getTheme()
  setDefaultTheme(currTheme, toggler)
})