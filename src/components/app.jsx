import React,{Component} from 'react'
export default class App extends Component{
    state= {
        count:0
    }
    increment = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.state.count
        //3、更新状态
          this.setState({count:count+number})
      }
      decrement = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.state.count
        //3、更新状态
              this.setState({count:count-number})

      }
      incrementIfOdd = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.state.count
        //3、更新状态
          if(count%2===1){
              this.setState({count:count+number})
           }
      }
      incrementAsync = ()=>{
        //1、得到选择的增加数量值
            const number = this.select.value*1
        //2、得到原来的count状态，并计算新的count
            const count = this.state.count
        //3、启动延时定时器
          setTimeout(()=>{
            //更新状态
            this.setState({count:count+number})
          },1000)
      }


    render() {
        const { count} = this.state
    return (
      <div>
            <p>click { count} items</p>
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

