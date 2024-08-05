'use client'
import React from 'react'

const ContactSocialMedia = () => {

  const alertbtn=()=>{
    alert("button!!!");
  }

  return (

         <div  className=' h-16 w-52 border-2 border-[#513671] rounded-full bg-[#FFC6C6] flex items-center justify-evenly'>
         <a href='' className=' flex h-12 w-12 bg-white rounded-full items-center justify-center hover:bg-[#a67cfe]'><img src='./assets/sc1.png'></img></a>
         <a href='https://' className=' flex h-12 w-12 bg-white rounded-full items-center justify-center hover:bg-[#a67cfe] '><img src='./assets/sc2.png'></img></a>
         <a href='https://github.com/abijo-rt' className=' flex h-12 w-12 bg-white rounded-full items-center justify-center hover:bg-[#a67cfe]'><img src='./assets/sc3.png'></img></a>
         </div>
  )
}

export default ContactSocialMedia