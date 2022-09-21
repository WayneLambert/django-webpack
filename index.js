// Import our CSS from Sass file for 3rd party vendors and custom
import './core/static/scss/styles.scss'

// Flatpickr
import flatpickr from 'flatpickr/dist/flatpickr.min'
import './core/static/vendor/flatpickr.js'

import Alpine from 'alpinejs'

// Add Alpine object to the window scope
window.Alpine = Alpine

// initialize Alpine
Alpine.start()

// Invoke Users API
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ './core/static/examples/usersAPI')
const btnUsersApi = document.getElementById('btn-users-api')
btnUsersApi.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json))
  })
})

// Calculate Area of Circle
const btnCalculateArea = document.getElementById('btn-area-of-circle')
btnCalculateArea.addEventListener('click', () => {
  const circle = require('./core/static/examples/circle.ts')
  const radiusEl = document.getElementById('radius-of-circle')
  const radius = parseInt(radiusEl.value)
  const area = circle.area(radius)
  const result = `The area of a circle with a radius of ${radius} is ${area}`
  console.log(result)
  const areaOfCircle = document.getElementById('area-of-circle')
  areaOfCircle.textContent = result
})
