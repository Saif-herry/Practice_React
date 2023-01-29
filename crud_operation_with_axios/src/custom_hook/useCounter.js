import { useState } from "react"


const useCounter = () => {

    const [inc,setInc] = useState(0)

    const incFun = () => {
         setInc(inc+1)
    }

   const decFun = () => {
        setInc(inc-1)
   }

   return [inc,incFun,decFun]

}

export default useCounter