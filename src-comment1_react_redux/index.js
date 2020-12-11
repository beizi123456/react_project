import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app/app'
import { Provider } from 'react-redux'
import store from '../src/redux/store'


ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    )
    , document.getElementById('root'))

