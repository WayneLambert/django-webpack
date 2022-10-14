// Import our own styles before Vendor CSS so we can override the vendor's CSS
import '../styles/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import Alpine object from alpinejs library
import Alpine from 'alpinejs'

// Initialise Alpine
Alpine.start()

// Import HTMX and add it to the window scope
window.htmx = require('htmx.org')
