"use client"
import React from 'react'
import Image from 'next/image';
import { VscAccount } from "react-icons/vsc";


import { BsBag } from "react-icons/bs";





const Search = () => {

  // let [visible,setVisible]=useState("hidden")

  
  return (
    <div>

      
      
      <div className='flex space-x-4  justify-between border border-gray-700 h-14'>
<Image src="data:image/png;base64,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"
alt='UROOBALOGO'
height={100}
width={100} className='pl-2'></Image>
<input type='text' className='w-[70%] h-10 border border-black my-2  hidden lg:flex'placeholder='enter any product name' >


</input>

<div className='flex pl-2 ml-2'>
  <div className='flex'>
  <div className="relative inline-block">
 

  <div className="bg-gray-300 p-4 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405C18.345 15.347 18 14.718 18 14V11c0-3.31-2.69-6-6-6S6 7.69 6 11v3c0 .718-.345 1.347-.595 1.595L4 17h5m1 0v1a3 3 0 006 0v-1m-6 0h6" />
    </svg>
  </div>



  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
    3
  </span>
</div>
        <VscAccount className='mx-2 my-2  bg-slate-300 size-7 rounded-sm'/>
      
      
        <BsBag className='mx-2 my-2  bg-slate-300 size-7 rounded-sm'/>

      </div>
 
      </div></div>
    
    

    </div>
  )
}

export default Search