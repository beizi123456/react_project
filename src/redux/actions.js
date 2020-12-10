import { INCREMENT, DECREMENT } from '../redux/action_type'

export const increment = (number) => ({
    type: INCREMENT,
    data: number
})
export const decrement = (number) => ({
    type: DECREMENT,
    data: number
})
export const incrementAsync = (number) => {
    return dispatch => (
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    )




}
