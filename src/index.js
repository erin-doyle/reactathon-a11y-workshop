import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


// if we're in dev mode
if (process.env.NODE_ENV === 'development') {
    // Set up react-a11y to catch accessibility issues during development
    const a11y = require('react-a11y').default;
    const DEFAULT_LEVEL = 'warn'; // NOTE: change to 'error' if you want to raise errors instead of warnings
    a11y(React, ReactDOM, {
        rules: {
            'button-role-space': DEFAULT_LEVEL,
            'hidden-uses-tabindex': DEFAULT_LEVEL,
            'img-uses-alt': DEFAULT_LEVEL,
            'label-uses-for': DEFAULT_LEVEL,
            'mouse-events-map-to-key-events': DEFAULT_LEVEL,
            'no-access-key': DEFAULT_LEVEL,
            'no-hash-ref': DEFAULT_LEVEL,
            'no-unsupported-elements-use-aria': DEFAULT_LEVEL,
            'onclick-uses-role': DEFAULT_LEVEL,
            'onclick-uses-tabindex': DEFAULT_LEVEL,
            'redundant-alt': DEFAULT_LEVEL,
            'tabindex-uses-button': DEFAULT_LEVEL,
            'use-onblur-not-onchange': DEFAULT_LEVEL,
            'valid-aria-role': DEFAULT_LEVEL
        }
    });
}

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app-root'));

registerServiceWorker();
