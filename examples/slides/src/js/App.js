import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Scene from './scene'


const App = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <Scene/>
        </Provider>
    )
}

export default App
