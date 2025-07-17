import React, { useState } from 'react'
import { useEffect } from 'react';
import ImgMediaCard from './ImgMediaCard';
import Hero from './Hero';
const Homepage = () => {

const [data,setdata]=useState([])
      useEffect(()=>{

fetch("https://fakestoreapi.com/products/").then((res)=>{
  return res.json()


}).then((result)=>{
  console.log(result);
  setdata(result)
  

}).catch((err)=>{
  console.log(err);
  
})


  },[]);
  return (
    <div>
      <Hero></Hero>


<div className="flex flex-wrap gap-5  justify-center m-auto">


{/* <box   sx={{
 display: 'flex',
    justifyContent: 'center',
    


}}> */}

{
    data.map((value)=>(

  

<ImgMediaCard productdetail={value} ></ImgMediaCard>


         
    ))
}

{/* </box> */}
   

</div>





    </div>
  )
}

export default Homepage
