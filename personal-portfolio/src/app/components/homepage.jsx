import { url } from 'inspector'
import React from 'react'
import './home.css'


const Homepage = () => {
    return (
        <div className='bg-[#a67cfe] flex flex-col  item-center justify-center '>
            <div className='relative flex flex-row h-screen w-screen items-center justify-center'>
            <div
  className='h-20 w-20  absolute top-32 left-32 z-0 rotate-45 design '
  style={{ backgroundImage: "url('/assets/r2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}

></div>
<img src="./assets/ms2.png" className=' absolute top-[5%] left-[90%]  size-32'></img>
         {/* <img src="./assets/hexagon.png" className='size-16 absolute left-[65.5%] top-[75%] rotate-45'></img> */}

             <div className='flex h-3/4 w-3/4 items-center justify-center text-5xl text-black font-mono text-center z-10'>The only limit to our realization of tomorrow is our doubts of today.</div>
             <div className= 'flex  h-3/4 w-1/4 items-center justify-start  '>
                <div className='h-3/4 w-3/4 border-2 rounded-full border-[#513671] bg-[#fdda5f]'></div>
             </div>
             
            </div>
            <div className='text-center text-8xl text-[#764fa4]'>. . . </div>
        </div>
    )
}

export default Homepage