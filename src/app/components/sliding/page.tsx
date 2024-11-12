"use client"

import React from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from 'react';
const Slider :any= () => {
    const [iamge,setimage]=useState(1)
  
    
    const slide=[
{url:"https://media.istockphoto.com/id/618432992/photo/woman-enjoying-the-weekend-in-the-shopping-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=7QfjvN8ZUrxnJagqOBzyac5K852d0J-KE7H6nQ_SQ9c="},
{

  url:"https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
},{

    url:"https://media.istockphoto.com/id/956571254/photo/family-shopping-happy-people-in-mall.jpg?s=612x612&w=0&k=20&c=28Co2juQQve3Hg9aIoraWRGVnGRNiSnOJjCCQZY06AY="
}
,
{
    url:"https://media.istockphoto.com/id/1446098147/photo/shopping-happy-and-portrait-of-customer-with-bag-after-shopping-spree-buying-retail-fashion.jpg?s=612x612&w=0&k=20&c=OFL3OPm9SPaaUveM_z3-0DaFcvorK4H_wK4KnmSY0Og="
}
  ,{
    url:"https://media.istockphoto.com/id/1715503987/photo/woman-making-a-mobile-payment-at-a-clothing-store.jpg?s=612x612&w=0&k=20&c=BP89_ZKMvT1eZGXNfBIhBH5AP8zIF2GPWsqXmwOipCo="
  }
 

    ]
    const leftarow=()=>{
        const Isfirstslide =iamge===0
        const newindx=Isfirstslide?slide.length-1:iamge-1
        setimage(newindx)
        


    }
    const nextslide=()=>{

const ISlastslide=iamge===slide.length-1
const newindc=ISlastslide?0:iamge+1
setimage(newindc)
}
  return (
    <div className='w-full h-screen   my-16 px-4 relative'>
    
        <div style={{backgroundImage:`url(${slide[iamge].url})`}} className='w-full h-screen rounded-2xl  bg-cover '>
<div className='flex justify-between pt-24'>
<FaAngleDoubleLeft onClick={leftarow} className='text-white font-bold text-5xl
 cursor-pointer' />
< FaAngleDoubleRight onClick={nextslide} className='text-white font-bold text-5xl cursor-pointer' /></div>

        </div>
    </div>
  )
}


export default Slider