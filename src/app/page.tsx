import React from 'react'
import Products from './components/home/page'
import Womenproduct from './components/women/page'
import Perfume from './components/persumes/page'
import Shoes from './components/others/page'


import Slider from './components/sliding/page'

const  Page = () => {
  return (
    <div>

<Slider/>
      <Womenproduct/>
    <div className='mt-150px'> <Products/></div>
      
     <div> <Perfume/></div>
      <Shoes/>
    
    </div>
  )
}

export default  Page