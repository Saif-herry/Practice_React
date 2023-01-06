import { INCREMENT,DECREMENT } from "./actionType";



export const incFun=(payload)=>({
    type:INCREMENT,
    payload,
})

export const decFun = (payload)=>({
     type:DECREMENT,
     payload,
})