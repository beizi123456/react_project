import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class commentAdd extends Component {
    //调用前声明
    static propTypes = {
        addComment:PropTypes.func.isRequired
    }
    //初始化状态
    state = {
        username:'',
        content:''
    }

    //自定义-【提交添加】功能
    handleSubmit = () => {
        //收集数据，并封装成comment对象[comment对象指初始化的状态对象,对象内容是App中的初始化状态属性](非受控组件，收集数据前要定义状态)
        const comment = this.state
        //更新状态（数据在哪个组件，数据的操作行为就在哪个组件，在app.jsx）
        this.props.addComment(comment)
        this.setState({
            username:'',
            content:''
        })


    }
    handleNameChange = (event) => {
        const username = event.target.value
        this.setState({username})
    }
    handleContentChange =(event) => {
        const content = event.target.value
        this.setState({content})//content:content
    }

    render() {
        const {username,content} = this.state
        return (
        <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>用户名</label>
                <input type="text" className="form-control" placeholder="用户名"
                value={username} onChange={this.handleNameChange}/>
              </div>
              <div className="form-group">
                <label>评论内容</label>
                <textarea className="form-control" rows="6" placeholder="评论内容"
                value={content} onChange={this.handleContentChange}></textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                </div>
              </div>
            </form>
          </div>


        )
    }
}
