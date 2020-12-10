
import React from 'react'
import RenderDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'
<<<<<<< HEAD
=======


>>>>>>> 79c46f8aa116d7ec1f2ad530fb1fdefb7b3d6475
function render() {
    RenderDOM.render(<App store={store} />, document.getElementById('root'))
}
//初始化渲染
render()

//订阅监听实现（store中的状态变化后自动调用进行重绘）
store.subscribe(render)

