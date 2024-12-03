


import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <div className="border border-black h-12 flex justify-center sticky top-0 z-50 bg-white">
      <ul className="flex flex-wrap gap-2 p-4 tracking-tighter justify-center md:justify-start overflow-x-auto">
        <Link href="/">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            HOME
          </li>
        </Link>
        <Link href="/">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            CATEGORIES
          </li>
        </Link>
        <Link href="/Men">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            MENS
          </li>
        </Link>
        <Link href="/Women">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            WOMENS
          </li>
        </Link>
        <Link href="/Jewelry">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            JEWELRY
          </li>
        </Link>
        <Link href="/Perfume">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            PERFUME
          </li>
        </Link>
        <Link href="/Blogs">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            BLOGS
          </li>
        </Link>
        <Link href="/HotOffers">
          <li className="px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 text-sm md:text-base">
            HOT OFFERS
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Categories;

// import Link from 'next/link'
// import React from 'react'

// const  Catageries = () => {
//   return (
//     <div className='border  border-black h-12 justify-center flex sticky top-0 z-50 bg-white'>
//         <ul className='  flex p-2 tracking-tighter gap-2 '>
          
         
//      <Link href="/">   <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500'>
//   HOME
// </li></Link>

//   <Link href="/"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>
//   CATEGORIES
// </li> </Link>

//      <Link href="/Men"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>MENS</li></Link>
//         <Link href="/Women"><li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>WEMENS</li></Link>
//         <Link href="/Jewleery"> <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 ' >JEWELRY</li></Link>
//       <Link href="/Perfume">   <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>PERSUME</li></Link>
//        <Link href="/Blogs" >  <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>BLOGS</li></Link>
//       <Link href="Hotoofer">    <li className='px-2 hover:font-bold border-b-2 border-transparent hover:border-red-500 focus:border-red-500 '>HOT OFFERS</li></Link>

//         </ul>


//     </div>
//   )
// }

// export default  Catageries