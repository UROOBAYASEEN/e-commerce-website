
import React from 'react'



const  Products = () => {

  const product:any=[
    {url:"data:image/jpeg;base64,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"},
    {
      url:"data:image/jpeg;base64,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"
    },{
      url:"data:image/jpeg;base64,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"
    },{
      url:"data:image/jpeg;base64,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"
    },{
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVu-3zoeOSWvLESygPat9hKdpzaEx1vK60A&s"
    },{
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91lqkHpDCEp3L5GsbCsgVzomm3fo_My89w&s"
    },{
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBvzDjRC4QCd32-sYSf0x_HgJXd-NImAYvQ&s"
    },{
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVa9xq257mRrKlYNrZ2tGpxeDjIVekwm0NDA&s"
    }
  ]
  return (
    <div className='mt-[1250px] md:mt-[300px]'>
<h1 className='font-bold text-4xl p-12 '>JENTS PRODUCTS</h1>
  
    <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-screen bg-white p-12'>
    
    
      <div style={{backgroundImage:`url(${product[0].url})`}} className='bg:cover my-10 bg-no-repeat h-48 bg:center 
      '>
        
     </div>
      
        <div style={{backgroundImage:`url(${product[1].url})`}} className='bg:cover my-10  bg-no-repeat h-48 bg:center  
        '></div>

        <div  style={{backgroundImage:`url(${product[2].url})`}} className='bg:cover my-10  bg-no-repeat h-48 bg:center  
        '></div>
     
     
        <div style={{backgroundImage:`url(${product[3].url})`}} className='bg:cover my-10  bg-no-repeat h-48 bg:center'></div>
        <div style={{backgroundImage:`url(${product[4].url})`}} className='bg:cover my-10   bg-no-repeat h-48 bg:center'></div>
        <div style={{backgroundImage:`url(${product[5].url})`}} className='bg:cover my-10   bg-no-repeat h-48 bg:center'></div>
        <div style={{backgroundImage:`url(${product[6].url})`}} className='bg:cover my-10   bg-no-repeat h-48 bg:center'></div>
        <div style={{backgroundImage:`url(${product[7].url})`}} className='bg:cover my-10  bg-no-repeat h-48 bg:center'></div>


    </div>
    </div>
  )
}

export default  Products