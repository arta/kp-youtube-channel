// check for saved 'darkModeOn' in localStorage
let darkModeOn = localStorage.getItem('darkModeOn')

const btnDarkModeToggle = document.querySelector('#btn-dark-mode-toggle')

const turnDarkModeOn = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-mode')
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkModeOn', 'on')
}

const turnDarkModeOff = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-mode')
  // 2. Update darkModeOn in localStorage
  localStorage.removeItem('darkModeOn')
}

// If the user already visited and enabled darkModeOn
// start things off with it on
if (darkModeOn) {
  turnDarkModeOn()
}

// When someone clicks the button
btnDarkModeToggle.addEventListener('click', () => {
  // get their darkModeOn setting
  darkModeOn = localStorage.getItem('darkModeOn')

  // and toggle it
  if (darkModeOn) {
    turnDarkModeOff()
  } else {
    turnDarkModeOn()
  }
})
