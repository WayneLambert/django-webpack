function getComponent() {
    const flatpickr = require('flatpickr').default;
  return import('lodash-es')
    .then(({ default: _ }) => {
        const fpOptions = {
            altInput: true,
            altFormat: 'd-M-y',
        }
        return flatpickr('input[tag=fp-date]', fpOptions)
    })
    .catch((error) => 'An error occurred while loading the component')
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
