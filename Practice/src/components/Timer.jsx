import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {

    const[seconds, setSeconds]= useState(0);
    const[isActive, setIsActive]=useState(false);

    function toggle(){
        setIsActive(!isActive);
    }

    function reset(){
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        
        if (isActive) {

          interval = setInterval(() => {

            setSeconds(seconds => seconds + 1);
          }, 1000);

        } else if (!isActive && seconds !== 0) {

          clearInterval(interval);
        }
        
        return () => clearInterval(interval);   
      }, [isActive, seconds]);
    

  return (
    

    <div className='Timer'>
        <h2>Kronometre</h2>
        

            <button className={`button button-primary button-primary-${isActive?'active':`inactive`}`} onClick={toggle}>
                {isActive?'Pause': 'Start'}
            </button>
            <button className='button' onClick={reset}>Reset</button>


        <div className='time'>
        <h2>- {seconds} -</h2>
        </div>
    </div>
  )
}

export default Timer
