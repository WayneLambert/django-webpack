// Initialise Flatpickr widget for date handling
const flatpickr = require('flatpickr').default

htmx.onLoad(
  (exports.initFlatpickr = function () {
    const fpOptions = {
      altInput: true,
      altFormat: 'd-M-y',
    }
    console.log('initFlatpickr invoked')
    return flatpickr('input[tag=fp-date]', fpOptions)
  })
)
