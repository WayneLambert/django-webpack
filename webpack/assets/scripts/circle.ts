// Calculate Area of Circle
import { capitalize } from 'lodash-es'

const btnCalculateArea = document.getElementById('btn-area-of-circle')
btnCalculateArea.addEventListener('click', () => {
  const circle = require('../examples/circleArea.ts')
  const radiusEl = document.getElementById('radius-of-circle')
  const radius = parseInt(radiusEl.value)
  const area = circle.area(radius)
  const result = capitalize(`the area of a circle with a radius of ${radius} is ${area}`)
  console.log(result)
  const areaOfCircle = document.getElementById('area-of-circle')
  areaOfCircle.textContent = result
})
