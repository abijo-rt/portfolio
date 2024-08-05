import React from 'react'
const About = () => {
  return (
    <div className='bg-[#a67cfe] relative' id='about' >
         <div className=' flex h-screen w-screen items-center justify-center   px-32'>
         <div className='flex flex-col h-3/4 w-1/4 items-start justify-start '>
         <div className='text-black font-mono text-6xl '>About</div><br/>
         <div className='font-mono text-4xl '>"The only way to do great work is to love what you do.."</div>
         </div>

         <div className='flex  h-3/4 w-3/4 items-center justify-center pl-32'>

<div className='border-[#764fa4] border-2 h-full w-full bg-[#d9ffb5] p-10 text-black font-medium font-mono rounded-lg shadow-md shadow-[#d9ffb5]'>
  <p className='overflow-hidden h-fit w-full text-justify '>"Hello! I'm Deva Abijo R T, a passionate Full Stack Developer with a love for creating innovative solutions. Currently exploring the dynamic world of web development and continuously learning new technologies."</p>
<br/>
<br/>
<p className=' flex items-center '><img src='./assets/col.svg ' className='size-8 ml-10 hover:animate-pulse'></img><p className='ml-10'>Bannari Amman Institute Of technology</p></p>
<br/>
<p className=' flex items-center '><img src='./assets/loc.svg ' className='size-8 ml-10 hover:animate-pulse'></img><p className='ml-10'>Kanyakumari, Tamil Nadu, India</p></p>
<br/>
<p className=' flex items-center '><img src='./assets/ed.svg ' className='size-8 ml-10 hover:animate-pulse'></img><p className='ml-10'>HSC | SSLC | B.Tech Information technology</p></p>
<br/>
<p className=' flex items-center '><img src='./assets/mail.svg ' className='size-8 ml-10 hover:animate-pulse'></img><p className='ml-10'>abijorajesh@gmail.com</p></p>

<br/>
<br/>
<div className="flex justify-evenly">
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l3.png' ></img></div>
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l4.png' ></img></div>
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l6.png' ></img></div>
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l7.png' ></img></div>
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l8.png' ></img></div>
<div className='img  rounded-lg flex justify-center items-center hover:animate-bounce' ><img src='/assets/logo/l12.png' ></img></div>


    </div></div>
         </div>
         
         
         </div>
         <div className='text-center text-8xl text-[#764fa4]'>. . . </div>

    </div>
  )
}

export default About