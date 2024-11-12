
import Link from 'next/link'
import React from 'react'

const  Catageries = () => {
  return (
    <div className='border  border-black h-12 justify-center flex sticky top-0 z-50 bg-white'>
        <ul className=' hidden md:visited: md:flex p-2'>
          
         
     <Link href="/">   <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500'>
  HOME
</li></Link>

  <Link href="/"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>
  CATEGORIES
</li> </Link>

     <Link href="/Men"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>MENS</li></Link>
        <Link href="/Women"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>WEMENS</li></Link>
        <Link href="/Jewleery"> <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 ' >JEWELRY</li></Link>
      <Link href="/Perfume">   <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>PERSUME</li></Link>
       <Link href="/Blogs" >  <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>BLOGS</li></Link>
      <Link href="Hotoofer">    <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>HOT OFFERS</li></Link>

        </ul>


    </div>
  )
}

export default  Catageries