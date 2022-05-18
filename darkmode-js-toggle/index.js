// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode')

const darkModeToggle = document.querySelector('#btn-dark-mode-toggle')

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode')
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode')
  // 2. Update darkMode in localStorage
  localStorage.removeItem('darkMode')
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode) {
  enableDarkMode()
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode')

  // and toggle it
  if (darkMode) {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
})
