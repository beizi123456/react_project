/*redux最核心的管理对象*/
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import { comments } from './reducers.js'


export default createStore(
    comments,
    composeWithDevTools(applyMiddleware(thunk))

)
