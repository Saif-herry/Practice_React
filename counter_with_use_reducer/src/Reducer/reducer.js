

const reducer = (state,action) => {
    switch(action.type){
        case "Increament":
            return (state+=1)
        case "Decreament":
            return (state-=1)
        default:
            return state
            
    }

}

export default reducer;