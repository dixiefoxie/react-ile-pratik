import React, { useState } from 'react'

export const UseMap = () => {

    const [person, setPerson] = useState([
        {title: 'Web Pratikleri', body: 'sitenin kurulumamacı.', author: 'mert', id: '1'},
        {title: 'pratik web sitesi', body: 'kurulan sitenin amacı.', author: 'trem', id:'2'},
        {title: 'web falan', body: 'amacı falan', author:'mrte', id: '3'}
    ]);

  return (
    <div>
        <h1>map kullanımı</h1>
        {person.map((web)=>(
        <div className='useMap' key={web.id}>
            
            <h3>{web.author}</h3>
            <h5>{web.title}</h5>
            <h5>{web.body}</h5>
        </div>
    ))}
    </div>
  )
}
