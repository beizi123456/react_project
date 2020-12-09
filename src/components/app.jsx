import React, { Component } from 'react'
import {INCREMENT, DECREMENT} from '../redux/action_type'
export default class App extends Component{
    increment = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、调用store的方法更新状态
        this.props.store.dispatch({type:INCREMENT,data:number})
      }
      decrement = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、调用store的方法更新状态
        this.props.store.dispatch({type:DECREMENT,data:number})

      }
      incrementIfOdd = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.props.store.getState()
        //3、更新状态
          if(count%2===1){
            //2、调用store的方法更新状态
            this.props.store.dispatch({type:INCREMENT,data:number})
           }
      }
      incrementAsync = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、启动延时定时器
          setTimeout(()=>{
        //3、调用store的方法更新状态
        this.props.store.dispatch({type:INCREMENT,data:number})
          },1000)
      }


    render() {
        const  count  = this.props.store.getState()
        //debugger
    return (
      <div>
            <p>click {count} items</p>
        <div>
                <select ref={select => this.select = select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;&nbsp;
            <button onClick={this.increment}>+</button>
      		<button onClick={this.decrement}>-</button>
      		<button onClick={this.incrementIfOdd}>increment if odd</button>
      		<button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}

