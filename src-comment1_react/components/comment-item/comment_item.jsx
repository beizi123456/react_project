import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class commentItem extends Component {

    //声明=>取出值
    static propTypes ={
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired

    }
    handleClick= () => {
        const {comment, deleteComment, index} = this.props

        //提示
        /*分析：
        1、需要知道comment中的username
        2、需要调用deleteClick
        3、需要下标信息
        4、code:
        confirm(`确定删除${comment.username}的评论吗？`)
        */
       if(window.confirm(`确定要删除${comment.username}的评论吗？`)){
            deleteComment(index)
       }
        //确定后删除
        /*删除分析
        1、删除需要index,但是父组件comment_list未传递index,key对象是运用到外部的不传递，所以需要在父组件中传递一个index
        2、声明获取index信息
        */
    }








    render() {
        //取出
        const {comment} = this.props
        return (
            <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;" onClick={this.handleClick}>删除</a>
            </div>
            <p className="user"><span >{comment.username}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
          </li>
        )
    }
}
