
import React from 'react'
import RenderDOM from 'react-dom'
/*redux根据store对象进行操作，所以要先创建store对象*/
import { createStore } from 'redux'

import App from './components/app'
import { counter } from './redux/reducers'

//生成一个store对象
//内部会第一次调用reduer函数得到初始state
const store = createStore(counter)//接收reducers,一个reducer代表一个函数
console.log(store)
function render() {
    RenderDOM.render(<App store={store} />, document.getElementById('root'))
}
//初始化渲染
render()

//订阅监听实现（store中的状态变化后自动调用进行重绘）
store.subscribe(render)

