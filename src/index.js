// Import our CSS from Sass file for 3rd party vendors and custom
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Flatpickr
import flatpickr from 'flatpickr/dist/flatpickr.min'
import './vendor/flatpickr.js'

// Invoke Users API
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ './examples/usersAPI')
const btnUsersApi = document.getElementById('btn-users-api')
btnUsersApi.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json))
  })
})

// Calculate Area of Circle
const btnCalculateArea = document.getElementById('btn-area-of-circle')
btnCalculateArea.addEventListener('click', () => {
  const circle = require('./examples/circle.ts')
  const radiusEl = document.getElementById('radius-of-circle')
  const radius = parseInt(radiusEl.value)
  const area = circle.area(radius)
  const result = `The area of a circle with a radius of ${radius} is ${area}`
  console.log(result)
  const areaOfCircle = document.getElementById('area-of-circle')
  areaOfCircle.textContent = result
})
