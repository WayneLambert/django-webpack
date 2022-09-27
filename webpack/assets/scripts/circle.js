// Calculate Area of Circle
const btnCalculateArea = document.getElementById('btn-area-of-circle')
btnCalculateArea.addEventListener('click', () => {
  const circle = require('../examples/circle.ts')
  const radiusEl = document.getElementById('radius-of-circle')
  const radius = parseInt(radiusEl.value)
  const area = circle.area(radius)
  const result = `The area of a circle with a radius of ${radius} is ${area}`
  console.log(result)
  const areaOfCircle = document.getElementById('area-of-circle')
  areaOfCircle.textContent = result
})
