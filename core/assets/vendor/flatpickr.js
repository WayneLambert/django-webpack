// Initialise Flatpickr widget for date handling
window.htmx = require('htmx.org')
htmx.onLoad(
  (exports.initFlatpickr = function () {
    fpOptions = {
      altInput: true,
      altFormat: 'd-M-y',
    }
    console.log('initFlatpickr invoked')
    return flatpickr('input[tag=fp-date]', fpOptions)
  })
)
