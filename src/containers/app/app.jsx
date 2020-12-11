import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addComment,deleteComment,getComment} from '../../redux/actions'
import CommentAdd from '../../components/comment-add/comment_add'
import CommentList from '../../components/comment-list/comment_list'


 class App extends Component {
    //声明
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComment:PropTypes.func.isRequired
    }
     componentDidMount() {
         //异步获取所有评论数组
         this.props.getComment()
     }

    render() {
        const {comments,addComment,deleteComment} = this.props
        //如果组件中的html报错需要检查标签中是否缺失结束符号
        //注意内联试样式设置应为{{}},{}写js=》{{}}写键值对样式，样式值要是字符串类型不然是变量的意思
        return (

            <div>
              <header className="site-header jumbotron">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1>请发表对React的评论</h1>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container">
                  <CommentAdd addComment={addComment}/>
                  <CommentList comments={comments} deleteComment={deleteComment}/>
             </div>
            </div>


        )
    }
}
export default connect(
    state => ({ comments:state }),
    {addComment,deleteComment,getComment}

)(App)
