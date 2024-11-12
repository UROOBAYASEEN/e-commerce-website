
import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { useState } from 'react';
interface Shopingcard{

imageurl:string
rating:number
price:number
aboutitem:string

}



const Div = (itemdetail:Shopingcard) => {
    const [Starcolor, setStarcolor] = useState("white")
     
    const updatecolor=()=>{

 setStarcolor(Starcolor==="yellow"?"white":"yellow")

    }


  return (
    
    <div className='h-[40%] w-[20%] flex'>
    <div className=' mt-6  px-10 py-10 '>
 
 <div className=' bg-cover mt-4  bg-center bg-no-repeat w-[150px] h-[200px]' style={{ backgroundImage: `url(${itemdetail.imageurl})` }}></div>

        <div className='py-1'>
            <p className='w-32'>{itemdetail.aboutitem}</p>

        </div>
        <div className='py-1 my-1'>
            <h1 className='bg-red-500 inline'>10 days offer</h1>


        </div>
        <div className='flex'>
        {[1,2,3,4,5].map((val)=>
        <IoMdStarOutline onClick={updatecolor} style={{backgroundColor:Starcolor}} key={val}/>
        
        
        )}
    </div>
    <div><p> price: {itemdetail.price}</p></div>
    <button className='bg-gray-600 text-white  p-2 leading-none hover:bg-green-600'>shop now</button>
    </div></div>
  )
}

export default Div