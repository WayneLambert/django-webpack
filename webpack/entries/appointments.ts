// Initialise a flatpickr datepicker object

async function initFlatpickr() {
  try {
    const flatpickr = await require('flatpickr').default
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
