import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartdata =useSelector((state)=>state.cart.totalprice
    
    

  )

  
  return (
    <div>
{
  cartdata.map((value)=>(
<div className='max-w-3xl mx-auto mt-5'>
  <div className='flex items-center justify-center bg-white gap-4  py-5 rounded-xl shadow-md '>

    <img src={value.image} alt="product img" className='w-24 h-24 bg-none m-2' />
    <h3 className='font-bold text-red-400 font-serif text-sm line-clamp-3 w-1/3'>{value.title} </h3>
    <h3>${value.price}</h3>
    <h3 className='text-emerald-600 '>Qty:1</h3>
    <h3 className='hover:text-red-400'>Delete 🗑</h3>






  </div>





</div>

  ))
}

<div className='max-w-3xl mx-auto mt-5'>

<div className="max-w-3xl flex justify-between rounded-2xl bg-slate-400 p-4 mt-2">

  <h3>Total quantity:</h3>
  <h3>5</h3>
</div>

<div className="max-w-3xl flex justify-between rounded-2xl bg-slate-400 p-4 mt-2">

  <h3>Total Price:</h3>
  <h3>5</h3>
</div>

<div className="max-w-3xl flex justify-center rounded-2xl bg-green-500 p-2 mt-2  mb-7 ">

  <h3 className='text-center'> 📦 Placeorder</h3>
  
</div>
       
    </div>  
    </div>
  )
}

export default Cart
