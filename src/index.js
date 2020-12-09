
import React from 'react'
import RenderDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'


function render() {
    RenderDOM.render(<App store={store} />, document.getElementById('root'))
}
//初始化渲染
render()

//订阅监听实现（store中的状态变化后自动调用进行重绘）
store.subscribe(render)

