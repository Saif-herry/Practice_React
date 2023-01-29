import { useState } from "react"


const useCounter1 = () => {
    const [inc,setInc] = useState(0)

    const handleIncFun = () => {
    setInc(inc+1)
    }

    const handleDecFun = () => {
    setInc(inc-1)
    }
    
    return [inc,handleIncFun,handleDecFun]
}

export default useCounter1