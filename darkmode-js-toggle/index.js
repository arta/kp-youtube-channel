const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
const bodyClassList = document.body.classList

let darkModeIsPersisted = localStorage.getItem('darkMode')

function toggleDarkMode() {
  // Confusing to go thru in mind (w/o debugger) on index.html (re)load, so:
  // : when index (re)loads, bodyClassList never has `dark-mode`
  // : the .toggle() here adds `dark-mode` on every index (re)load
  bodyClassList.toggle('dark-mode')

  if (bodyClassList.contains('dark-mode')) {
    if (!darkModeIsPersisted) localStorage.setItem('darkMode', 'on')
  }
  else localStorage.removeItem('darkMode')
}

if (darkModeIsPersisted) toggleDarkMode()

btnDarkModeToggle.addEventListener('click', toggleDarkMode)


// =============================================================================
// Wordier, but easier to read & understand, so probably better:
// =============================================================================

// const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
// const bodyClassList = document.body.classList

// let darkModeOn = localStorage.getItem('darkMode')

// function turnDarkModeOn() {
//   bodyClassList.add('dark-mode')
//   localStorage.setItem('darkMode', 'on')
// }

// function turnDarkModeOff() {
//   bodyClassList.remove('dark-mode')
//   localStorage.removeItem('darkMode')
// }

// function toggleDarkMode() {
//   darkModeOn = localStorage.getItem('darkMode')

//   if (darkModeOn) { turnDarkModeOff() }
//   else { turnDarkModeOn() }
// }

// if (darkModeOn) { turnDarkModeOn() }

// btnDarkModeToggle.addEventListener('click', toggleDarkMode)
