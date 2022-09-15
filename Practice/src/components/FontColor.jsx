import React from 'react'
import { useState } from 'react'

const FontColor = () => {

    const [color, setColor] = useState ('');
    const [font , setFont] = useState('siyah');

  return (
    <div className='color-c'>
      <h1 style={{color : color}}>Hello guys    </h1>

      <button className='button-c' onClick={()=>{
        setColor(color === "black" ? "red": "black")
        setFont(font === "siyah" ? "kırmızı" : "siyah")
      }}>{font}</button>
    </div>
  )
}

export default FontColor
