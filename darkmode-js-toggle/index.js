const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')

let darkModeOn = localStorage.getItem('darkMode')

function turnDarkModeOn() {
  document.body.classList.add('dark-mode')
  localStorage.setItem('darkMode', 'on')
}

function turnDarkModeOff() {
  document.body.classList.remove('dark-mode')
  localStorage.removeItem('darkMode')
}

function toggleDarkMode() {
  darkModeOn = localStorage.getItem('darkMode')

  if (darkModeOn) { turnDarkModeOff() }
  else { turnDarkModeOn() }
}

if (darkModeOn) { turnDarkModeOn() }

btnDarkModeToggle.addEventListener('click', toggleDarkMode)
