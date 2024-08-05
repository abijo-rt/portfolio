import  ContactSocialMedia  from './contactSocialMedia'
import React from 'react'
import ProjectImg from "./project-img"


const Contact = () => {

  return (
    <div className='bg-[#a67cfe]  relative'>
    <div className='flex flex-col h-screen w-screen items-center justify-center overflow-hidden'>
         <div className='h-[90%] w-full text-8xl font-mono text-[#513671] flex items-center justify-evenly px-32'>
         <div className='pl-16'> Contact</div>

         <div className='w-[30%] flex flex-col h-3/5 border-4 border-[#513671] bg-[#ff9d6c] shadow-md shadow-[#ff9059] rounded-lg space-y-5 items-center justify-center'>

         <div  className='flex items-center w-[90%] space-x-5 rounded-full bg-[#bfcfd6] border-4 border-[#513671] '><div className='bg-[#513671] h-12 w-12 rounded-full  flex  items-center justify-center border-4 border-[#bfcfd6] '>
         <img src='./assets/gmail.svg' className='size-7'></img></div><p className='text-xl'>+91 6379732193</p></div> 
         <div className='flex items-center w-[90%] space-x-5 rounded-full bg-[#bfcfd6] border-4 border-[#513671] '><div className='bg-[#513671] h-12 w-12 rounded-full flex  items-center justify-center border-4 border-[#bfcfd6] '>
         <img src='./assets/gmail.svg' className='size-7'></img></div><p className='text-xl'>abijorajesh@gmail</p></div> 
         <div className='flex items-center w-[90%] space-x-5 rounded-full bg-[#bfcfd6] border-4 border-[#513671] '><div className='bg-[#513671] h-12 w-12 rounded-full flex  items-center justify-center border-4 border-[#bfcfd6] '>
         <img src='./assets/git.svg' className='size-7'></img></div><p className='text-xl'>github/abijo-rt.com</p></div> 
         <button className='flex items-center w-[90%] space-x-5 rounded-full bg-[#bfcfd6] border-4 border-[#513671] '><div className='bg-[#513671] h-12 w-12 rounded-full flex  items-center justify-center border-4 border-[#bfcfd6] '>
         <img src='./assets/lined-in.svg' className='size-7'></img></div><p className='text-xl'></p></button> 
         

         </div>
         
         </div>
        <div className='mb-5 z-50'>
       <ContactSocialMedia/>

    <img className='absolute -z-10 top-[72.5%] left-1 size-48' src="./assets/wall.png"></img>
    <img className='absolute -z-10 top-[55%] left-[2%] size-32' src="./assets/fishbowl.png"></img>

</div>
    </div>
    </div>
  )
}

export default Contact