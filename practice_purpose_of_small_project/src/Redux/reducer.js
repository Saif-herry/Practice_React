import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

const intialState = {
    isLoading : false,
    isError : false,
    data : [],
    cart : []
}

 export const reducer = (state = intialState, action) => {
    const {type,payload} = action
    switch(type){
        case GET_PRODUCT_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case GET_PRODUCT_SUCCESS :
            return {
                ...state,
                isLoading : false,
                data : payload
            }
        case GET_PRODUCT_FAILURE :
            return {
                ...state,
                isError : true
            }
        default :
         return state;
    }
 }