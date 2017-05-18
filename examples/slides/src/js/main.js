require('../sass/style.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app-holder')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    });
}
