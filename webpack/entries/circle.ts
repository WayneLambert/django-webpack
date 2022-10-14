// Calculate Area of Circle

async function calculateAreaOfCircle() {
  try {
    const { capitalize } = await import('lodash-es')
    const btnCalculateArea = document.getElementById('btn-area-of-circle')
    btnCalculateArea!.addEventListener('click', () => {
      const circle = require('../assets/scripts/circleArea.ts')
      const radiusEl = document.getElementById('radius-of-circle') as HTMLInputElement
      if (radiusEl != null) {
        const radius = parseInt(radiusEl.value)
        const area = circle.area(radius)
        const result = capitalize(`the area of a circle with a radius of ${radius} is ${area}`)
        console.log(result)
        const areaOfCircle = document.getElementById('area-of-circle')
        areaOfCircle!.textContent = result
      }
    })
  } catch (error) {
    return 'An error occurred while loading the component'
  }
}

calculateAreaOfCircle().then((component) => {
  document.addEventListener('DOMContentLoaded', async () => {
    component
  })
})
