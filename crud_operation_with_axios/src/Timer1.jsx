import React, { useEffect, useState } from "react";

const Timer1 = () => {
    const [reset,setReset] = useState(false)
    const [hrs,setHrs] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [milisec,setMilisec] = useState(0)

const handleReset = () =>{
setReset(false)
setHrs(0)
setMin(0)
setSec(0)
setMilisec(0)
}

const handlePause = () => {
setReset(false)
}

const handleStart = () => {
setReset(true)
}

useEffect(() => {

    let interval = null;
    interval = setInterval(()=>{
        if(reset){
            if(min>59){
                setHrs(hrs+1)
                setMin(0)
            }
            else if(sec>59){
                setMin(min+1)
                setSec(0)
            }
            else if(milisec>99){
                setSec(sec+1)
                setMilisec(0)
            }
            else {
                if(milisec<=99){
                    setMilisec(milisec+1)
                }
            }

        }
    },10)
    return ()=>{
        clearInterval(interval)
    }
})

    return(
        <>
        <div>
            <h1>{hrs} : {min} : {sec} : {milisec}</h1>
        </div>
        <div>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStart}>Start</button>
        </div>
        </>
    )
}

export default Timer1