import React, { Component } from 'react'
import PropTypes from 'prop-types'

 export default class Counter extends Component{
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired

    }
    increment = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、调用store的方法更新状态
        this.props.increment(number)
      }
      decrement = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、调用store的方法更新状态
        this.props.decrement(number)

      }
      incrementIfOdd = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.props.count
        //3、更新状态
          if(count%2===1){
            //2、调用store的方法更新状态
            this.props.increment(number)
           }
      }
      incrementAsync = ()=>{
        //1、得到选择的增加数量值
          const number = this.select.value * 1
          this.props.incrementAsync(number)
      }


    render() {
        const { count }  = this.props
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

