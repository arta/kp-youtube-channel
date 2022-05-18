const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
let darkModeOn = localStorage.getItem('darkModeOn')

if (darkModeOn) { turnDarkModeOn() }

function turnDarkModeOn() {
  document.body.classList.add('dark-mode')
  localStorage.setItem('darkModeOn', 'on')
}

function turnDarkModeOff() {
  document.body.classList.remove('dark-mode')
  localStorage.removeItem('darkModeOn')
}

function toggleDarkMode() {
  darkModeOn = localStorage.getItem('darkModeOn')

  if (darkModeOn) { turnDarkModeOff() }
  else { turnDarkModeOn() }
}

btnDarkModeToggle.addEventListener('click', toggleDarkMode)
