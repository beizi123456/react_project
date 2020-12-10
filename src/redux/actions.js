import { INCREMENT, DECREMENT } from './action_type'

export const increment = (number) => ({
    type: INCREMENT, data: number
})
export const decrement = (number) => ({
    type: DECREMENT, data: number
})
