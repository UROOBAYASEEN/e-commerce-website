"use client"
import React from 'react'
import { useState,useRef } from 'react'
import Div from '../components/Div'

const Page = () => {
  const [additem, setadditem] = useState<boolean>(false)
  interface Shopingcard{

    imageurl:string
    rating:number
    price:number
    aboutitem:string
    
    }

  const itemRef = useRef<HTMLInputElement>(null)
  const priceRef=useRef<HTMLInputElement>(null)
  const ratingRef=useRef<HTMLInputElement>(null)
  const imageRef=useRef<HTMLInputElement>(null)

  const [Products, setProducts] = useState<Shopingcard[]>([])


  const addItem=(e:any)=>{

    e.preventDefault()
    setadditem(false)
   const  ourpro:Shopingcard={
      imageurl:imageRef.current?.value||"",
      rating:  parseFloat(ratingRef.current?.value||"0"),
      price: parseFloat(priceRef.current?.value||"0"),
      aboutitem:itemRef.current?.value||""
    
    }
    
    
    
    
    
    setProducts((prev)=>[...prev,ourpro])
    
    


  }
  return (
    <div className='h-screen w-screen'>
      <div className="">
        
        <h1 className='text-white font-bold text-2xl bg-red-600 my-10 inline p-4  mt-10' onClick={()=>{

setadditem(!additem)
 }}>ADD ITEM FOR SALE</h1>
<div>
 {additem && <div className= 'h-[300px] w-[200px] absolute top-48 bg-red-600 '>
<div className='bg-red-600 mt-8'>
  <form onSubmit={(e)=>{
    addItem(e)
  }}>
<input type='text' placeholder='AboutItem' className='pb-4 font-bold items-center' required ref={itemRef}/>
<input type='number' placeholder="price" className='pb-4 font-bold items-center' required ref={priceRef}/>
<input type="number"placeholder='ratingitem' className='pb-4 font-bold item-center' required ref={ratingRef}/>
<input type="url"placeholder='paste imageurl' className='pb-4 font-bold items-center' required ref={imageRef}/>
<button className=' bg-yellow-400 mt-4 p-3 rounded-lg' type='submit' > submitdata</button></form>
  </div>
  
  </div>}
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
  {Products.map((val:any)=>
  <div key={val}>
    <Div {...val}/>
  </div>
  )}

</div>
 
 </div>

      </div>
    </div>
  )
}

export default Page;