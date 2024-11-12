
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const  Header = () => {
  return (
    <div>
        
        <div className='flex  justify-between border xl:border-zinc-600 h-12'> 
            <div className='flex p-2'>
<Link className='p-2 bg-gray-300 rounded-md mx-2 cursor-pointer' href="https://web.facebook.com/profile.php?id=100080695967627"><FaFacebook/></Link>
<Link  className='p-2  bg-gray-300 rounded-md mx-2 cursor-pointer' href="https://x.com/NawalUroob30502"><FaTwitter/></Link>
<Link className='p-2  bg-gray-300 rounded-md mx-2 cursor-pointer' href="https://x.com/NawalUroob30502"><FaInstagram/></Link>
<Link className='p-2  bg-gray-300 rounded-md mx-2 cursor-pointer' href="https://www.linkedin.com/in/urooba-yaseen-48964a2b5/">< FaLinkedin /></Link>






            </div>
            <div className=' md:flex md:visible  hidden'>
                <h1 className='font-bold p-2'>FREE SHOPPING</h1>
                <p className='p-2'>THIS WEEK ORDER OVER-$55</p>
            </div>
            <div className='mr-4 flex '>
            <div className='hidden md:visible'><select>
                    <option>USD</option>
                    <option>PKR</option>
                    <option>INR</option>
                    <option>DIRHUM</option>
                </select></div>
               <div className=''><select>
                    <option>ENGLISH</option>
                    <option>ARABIC</option>
                    <option>FRANCE</option>
                    <option>CHINES</option>
                </select></div>
                

            </div>
        </div>
    </div>
  )
}


export default  Header