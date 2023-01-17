import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

const api = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
export const getProductData = () => async(dispatch) => {
    dispatch({type : GET_PRODUCT_REQUEST })
    try{
        let res = await fetch(api);
        let data = await res.json()
        dispatch({type : GET_PRODUCT_SUCCESS , payload : data})
        console.log("data",data)
    }



    
    catch(err){
        dispatch({type : GET_PRODUCT_FAILURE})
        return err
    }
}