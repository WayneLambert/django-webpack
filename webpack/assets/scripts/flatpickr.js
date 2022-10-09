// Initialise Flatpickr widget for date handling
import flatpickr from './flatpickr'

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
