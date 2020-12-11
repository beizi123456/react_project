import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment_item'
import './commentList.css'

export default class commentList extends Component {


    /*简化声明
        static
        未添加：表示protoTypes对象是添加到组件对象上的
        添加：表示protoTypes对象是添加到类commentList上的
    */
   //给组件类指定属性
    static protoTypes={
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }

    render() {
        const {comments,deleteComment} = this.props
        //计算出是否显示
        const display = comments.length===0? 'block' : 'none'

        return (
            <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>

            <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {
                    comments.map((comment,index) => <CommentItem comment={comment}  key={index} deleteComment={deleteComment} index={index}/>)
                }
            </ul>
          </div>
        )
    }
}
// commentList.protoTypes={
//     comments:PropTypes.array.isRequired
// }
