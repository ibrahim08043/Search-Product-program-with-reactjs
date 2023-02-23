import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
import CircularIndeterminate from './Loader';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { Key } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const [data ,  setData] = useState([])
    const [isloading , setisloading] = useState(true)
    const [Search , setsearch] = useState("")
   useEffect(()=>{
        showo();
     
    }) 
    const showo = ()=>{
    axios('https://fakestoreapi.com/products')
    .then((suc) =>{ setData(suc.data) 
    setisloading(false)
    })
    .catch(err =>{ console.log(err)
    setisloading(false)
});
}
const gotodetails = (val)=>{
        console.log(val)
    navigate("detail",{
        state: val ,
    })

}

  return (
      <div>
        <br />
       
           {
            isloading ? <Box sx={{
                position: "absolute",
                top:"45.5vh",
                left:"85vh"
               
             }}>
            <CircularIndeterminate />
            </Box>:  <>
            <h1 className='heading'>SEARCH PRODUCT PROGRAM</h1>
            <input  type={"text"} placeholder="Search Your Product Here" onChange={(e)=> setsearch(e.target.value)} />
            

           </>
            
          } 
          
           <br />
            <br />        
            <br />
            <br />
       
       { 
       isloading ? <Box sx={{
           marginLeft:"90vh",
           marginTop:"27vh"
          
        }}>
       </Box>:
       
       
       data.filter((val)=>{
        if(Search == ""){
            return val;
        }else if(val.title.toLowerCase().includes(Search)){
            return val;
        }
       }).map((val , i)=>
       
       <div className='ms-5 aja  'key={i} >
        <div className=' pora'>
            <div>
        <img className='img' src={val.image} width="60%"   />
       <h5 className='brandname'><b>{val.title}</b></h5>
       <p className='descript'><b>{val.description}</b></p>
       <h5 className='price'>Price: ${val.price}</h5>
<Button className='ms-3' onClick={()=>gotodetails(val)} variant="contained">Buy</Button>
       </div><br />
       </div>
       <br />
       </div> 
       )}
    </div>
  )
}     

export default Home;