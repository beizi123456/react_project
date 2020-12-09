/*包含n个reducer函数的模块，说明当前的界面模块为对象*/
//引入
import { INCREMENT, DECREMENT } from './action_type'

export function counter(state = 0, action) {
    // console.log('counter()', state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state

    }
}
