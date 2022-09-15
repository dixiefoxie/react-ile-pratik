import React from 'react'
import { useState } from 'react'

export const NumberPlus = () => {

    const[numberP, setNumberP] = useState(0);


  return (
    <div className='numberPlus'>
        <h1 className={numberP >0 ? "positive" : "negative"}>{numberP}</h1>
        <button className='btn btn-danger' id='button-n'onClick={()=>setNumberP(numberP-10)}>--</button>
        <button className='btn btn-danger' onClick={()=>setNumberP(numberP-1)}>-</button>
        <button className='btn btn-success' onClick={()=>setNumberP(numberP+1)}>+</button>
        <button className='btn btn-success' onClick={()=>setNumberP(numberP+10)}>++</button>
    </div>
  )
}
