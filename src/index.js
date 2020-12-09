import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import App from './components/app';
import { counter } from './redux/reducers'

//生成一个store对象
const store = createStore(counter)//接收reducers,一个reducer代表一个函数
console.log(store)

ReactDOM.render(<App />, document.getElementById('root'));
