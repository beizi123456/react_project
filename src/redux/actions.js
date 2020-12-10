<<<<<<< HEAD
import { INCREMENT, DECREMENT } from './action_type'

export const increment = (number) => ({
    type: INCREMENT, data: number
})
export const decrement = (number) => ({
    type: DECREMENT, data: number
=======
import { INCREMENT, DECREMENT } from '../redux/action_type'

export const increment = (number) => ({
    type: INCREMENT,
    data: number
})
export const decrement = (number) => ({
    type: DECREMENT,
    data: number
>>>>>>> 79c46f8aa116d7ec1f2ad530fb1fdefb7b3d6475
})
