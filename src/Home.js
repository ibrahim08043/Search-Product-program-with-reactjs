import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
function Home() {
    const [data ,  setData] = useState([])
    const [isloading , setisloading] = useState(true)
   useEffect(()=>{
        showo();
     console.log(data)
    }, []) 
    const showo = ()=>{
    axios('https://fakestoreapi.com/products')
    .then((suc) =>{ setData(suc.data) 
        console.log(suc.data)})
    .catch(err => (err))
}

  return (
    <div>
       <button onClick={showo}>chalo</button>
       { data.map((x,i)=><div>
       <h1>{x.title}</h1>
        <img src={x.image} width="50%" alt="" />
       <h5>{x.price}</h5></div> )}
    </div>
  )
}

export default Home