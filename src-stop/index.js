
import React from 'react'
import RenderDOM from 'react-dom'
/*redux根据store对象进行操作，所以要先创建store对象*/

import { Provider } from 'react-redux'

import App from './components/app'
import store from './redux/store'



RenderDOM.render((
    <Provider store={store} >
        <App />
    </Provider>
),
    document.getElementById('root'))



