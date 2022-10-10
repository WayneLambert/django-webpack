// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import Alpine object from alpinejs library
import Alpine from 'alpinejs'

// Adds Alpine object to the window scope and initialise Alpine
window.Alpine = Alpine.start()

// Import HTMX and add it to the window scope
window.htmx = require('htmx.org')
