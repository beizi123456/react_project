/*包含了所有action creator(action的工厂函数)*/
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT } from './action-types'

//同步添加
export const addComment = (comment) => ({
    type: ADD_COMMENT,
    data: comment
})
//同步删除
export const deleteComment = (index) => ({
    type: DELETE_COMMENT,
    data: index
})
//同步获取数据
const receiveComment = (comments) => ({
    type: RECEIVE_COMMENT,
    data: comments

})
//异步获取数据
export const getComment = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                { username: 'Tom', content: 'React挺好的！' },
                { username: 'Jack', content: 'React太难了！' }
            ]
            //分布形成新的state(相当于this.setState)
            dispatch(receiveComment(comments))
        }, 1000)
    }
}
