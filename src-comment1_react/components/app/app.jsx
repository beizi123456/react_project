import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment_add'
import CommentList from '../comment-list/comment_list'

export default class app extends Component {

    // constructor (props){
    //     super(props)
    //     this.state={
    //         comments:[
    //             {username:'Tom',content:'React挺好的！'},
    //             {username:'Jack',content:'React太难了！'}
    //         ]


    //     }
    // }
    //简化上面的constructor，给组件对象指定state属性
    state = {
        comments:[]
       }
   componentDidMount(){
       //模拟发送异步ajax请求，获取数据
       setTimeout(() => {
        const comments =[
            {username:'Tom',content:'React挺好的！'},
            {username:'Jack',content:'React太难了！'}
           ]
           //更新状态
           this.setState({comments })
         },1000)

   }
    //添加评论
    addComment = (comment) => {
        //取出状态
        const {comments} = this.state
        //将数据添加数组的首部
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }
    //删除评论,根据下标删除
    /*删除功能实现分析
    1、删除功能由谁触发：comment_item中的删除按钮
    2、父组件怎样和comment_item关联被调用：
        《1》通过父组件下的直接子组件：comment_list
        《2》由comment_list中调用后再让comment_ite调用
    */
    deleteComment =(index) =>{
        //获取当前数组数据
        const {comments} = this.state
        //删除
        /*splice
        增加：comment.splice(index,0,{}):不删然后插入一个
        删除：comment.splice(index,1):删除一个
        替换：comment.splice(index,1,{}):删除一个插入一个为替换
        */
        comments.splice(index,1)
        //更新状态
        this.setState({comments})
    }

    render() {
        const {comments} = this.state
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
                  <CommentAdd addComment={this.addComment}/>
                  <CommentList comments={comments} deleteComment={this.deleteComment}/>
             </div>
            </div>


        )
    }
}
