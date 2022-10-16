// Initialise a flatpickr datepicker object
require('../assets/styles/flatpickr.scss')

async function initFlatpickr() {
  const { default: flatpickr } = await import(/* webpackChunkName: "flatpickr" */ 'flatpickr')
  try {
    const fpOptions = {
      altInput: true,
      altFormat: 'd-M-y',
    }
    return flatpickr('input[tag=fp-date]', fpOptions)
  } catch (error) {
    return 'An error occurred while loading the component'
  }
}

initFlatpickr().then((component) => {
  document.addEventListener('DOMContentLoaded', component)
})
