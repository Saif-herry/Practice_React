import React, { useEffect, useState } from "react"

const Timer = () => {
    const [reset,setReset] = useState(false)
    const [hrs,setHrs] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [milisec,setMilisec] = useState(0)

    const handleReset = () => {
          setReset(false)
          setHrs(0)
          setMin(0)
          setSec(0)
          setMilisec(0)
          console.log("Reset:",reset)
    }

    const handlePause = () => {
         setReset(false)
         console.log("Pause:",reset)
    }

    const handleStart = () => {
       setReset(true)
       console.log("start:",reset)
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
            else if(milisec<=99){
                setMilisec(milisec+1)

            }
            else{
                clearInterval(interval)
            }
        }

        },0.001)
        
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

export default Timer