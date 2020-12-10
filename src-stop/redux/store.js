/*redux根据store对象进行操作，所以要先创建store对象*/
import { createStore } from 'redux'
import { counter } from './reducers'

//生成一个store对象
//内部会第一次调用reduer函数得到初始state
const store = createStore(counter)//接收reducers,一个reducer代表一个函数
console.log(store)
export default store
