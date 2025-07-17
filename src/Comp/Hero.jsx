
import React from 'react'

import image from '../assets/img1.png'
import video from '../assets/video1.mp4'

const Hero = () => {
  return (
    <div>

        <section className="min-h-96 ">

            <div className='w-full flex flex-col items-center  mb-3   md:flex-row'>

{/* leftpart */}

{/* <div className='w-1/2 md:text-left'>
    <p className='text-lg font-bold'>

        Discover our Latest Product 😍
    </p>

    <p className='leading-9 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nobis corporis facilis consectetur saepe accusamus. Doloremque eos non quis suscipit vitae consequatur distinctio error molestias at, fugit eveniet nulla nam.</p>

 <div  className=' flex gap-3 justify-center  w-1/2  mt-5'  >


<button className='bg-green-500  p-1.5 rounded-md  font-medium'>

    Add To Cart
    
    </button>
    
    
    
    <button   className='bg-blue-500  p-1.5 rounded-md  font-medium'>Learn More</button>




   </div>


</div>

                 {/* rightpart */}


  
  {/* <div className='w-1/2'>


  <img src={image} alt=""    className='hidden md:block w-full  ' />




  </div>  */}

 <video
        src={video}
        className="w-full h-80  rounded-lg shadow-lg  object-cover"
       
   autoPlay
   
      loop
        playsInline

         
      />






            </div>




        </section>






      
    </div>
  )
}

export default Hero
