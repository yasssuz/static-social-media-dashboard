export function handleTheme(btn) {
  const currTheme = getTheme()
  console.log(currTheme)

  btn.classList.toggle('light-theme')

  document.documentElement.setAttribute(
    'data-theme', currTheme === 'light' ? 'dark' : 'light'
  )

  if (currTheme === 'light') {
    storeTheme('dark')
  } else {
    storeTheme('light')
  }
}

export function setDefaultTheme(theme, btn) {
  document.documentElement.setAttribute('data-theme', theme)
  theme === 'light' && btn.classList.add('light-theme')
}

export function getTheme() {
  let theme

  if (localStorage.getItem('theme') === 'dark') {
    theme = 'dark'
  } else if (localStorage.getItem('theme') === 'light') {
    theme = 'light'
  } else {
    localStorage.setItem('theme', 'light')
    theme = 'light'
  }

  return theme
}

function storeTheme(theme) {
  localStorage.setItem('theme', theme)
}