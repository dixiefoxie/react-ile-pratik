import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const NewApi = () => {

    const [post, setPost] = useState([]);
    const [id, setId] = useState (0);
    const [rand, setRand] =useState(0);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        /*.then(res=>console.log(res.data[9].id))*///konsola yazdır
       .then(res=>setPost(res.data[rand].title)).catch(err=>console.log(err))
   }, [post,rand])

function randomNumberInRange(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}


const handleClick=()=>{
    setRand(randomNumberInRange(0,99));
};


  /*  useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => console.log(response[9].id))// konsola yazdırır
        .then(response=> setPost(response));
    }, [])*/


    //retun içerisine yazılan axios
    /*<h1>{post}</h1>
        <p><input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/></p>*/

        /* {post.map(post=>{
        return<>                fetch ile yazımı
        <h2>{post.id}</h2>
        </>  })} */
  return (
    <div className='new-api' key={post.id}>
       <h1>Rastgele latince özlü söz uygulaması:</h1>
       <h5><small>buradaki veriler jsonplaceholder.typicode sitesinden axios ile çekliyor</small></h5>
       <h3>{post}</h3>
       <h4 value={rand}  onChange={(e)=>{setId(e.target.value)}}><small>{rand} numaralı özlü söz</small></h4>
       <button className='rand-button' onClick={handleClick}>özlü söz çek</button>
       

    </div>
  )
}

export default NewApi
