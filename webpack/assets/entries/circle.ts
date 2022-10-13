// Calculate Area of Circle

function getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
        const btnCalculateArea = document.getElementById('btn-area-of-circle')
        btnCalculateArea.addEventListener('click', () => {
        const circle = require('../examples/circleArea.ts')
        const radiusEl = document.getElementById('radius-of-circle')
        const radius = parseInt(radiusEl.value)
        const area = circle.area(radius)
        const result = _.capitalize(`the area of a circle with a radius of ${radius} is ${area}`)
        console.log(result)
        const areaOfCircle = document.getElementById('area-of-circle')
        areaOfCircle.textContent = result
        })
    })
    .catch((error) => 'An error occurred while loading the component')
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
