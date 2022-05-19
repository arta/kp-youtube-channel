const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')

let darkModeIsPersisted = localStorage.getItem('darkMode')

function toggleDarkMode() {
  // When index (re)loads, ..body.classList does not have `dark-mode`
  document.body.classList.toggle('dark-mode')

  if (document.body.classList.contains('dark-mode')) {
    if (!darkModeIsPersisted) localStorage.setItem('darkMode', 'on')
  }
  else localStorage.removeItem('darkMode')
}

// <script src="index.js" defer></script> runs this on index.html (re)load
if (darkModeIsPersisted) toggleDarkMode()

btnDarkModeToggle.addEventListener('click', toggleDarkMode)


// =============================================================================
// Wordier, but easier to read & understand, so probably better:
// =============================================================================

// const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')

// let darkModeOn = localStorage.getItem('darkMode')

// function turnDarkModeOn() {
//   document.body.classList.add('dark-mode')
//   localStorage.setItem('darkMode', 'on')
// }

// function turnDarkModeOff() {
//   document.body.classList.remove('dark-mode')
//   localStorage.removeItem('darkMode')
// }

// function toggleDarkMode() {
//   darkModeOn = localStorage.getItem('darkMode')

//   if (darkModeOn) turnDarkModeOff()
//   else turnDarkModeOn()
// }

// if (darkModeOn) turnDarkModeOn()

// btnDarkModeToggle.addEventListener('click', toggleDarkMode)
