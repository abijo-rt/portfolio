'use client'

import React, { useState } from 'react'
import Logoslider from './logoslider'
import ProjectImg from "./project-img"
const Project = () => {

const [project,setProject] =useState(1);

   const changeProject =(projectid)=>{
        setProject(projectid)
    }

    return (
        <div className='relative'>
        <div className='bg-[#a67cfe]  '>
            <div className='flex flex-row h-screen w-screen   items-center justify-between p-24 z-20'>
                <div className='h-full w-fit flex flex-col justify-center items-start   ' >
                    <p className='text-5xl font-mono text-[#513671] font-semibold'>My Projects...</p>
                    <div className='space-y-10 pt-10 w-full'>
                       <button onClick={()=>changeProject(1)} className='flex items-center h-24 w-full justify-center border-[#764fa4] rounded-full border-2 bg-[#d8b8fb] hover:shadow-[#d8b8fb] hover:shadow-2xl'> <p className='text-2xl font-mono text-black '>Campus Maintence</p>   </button>
                       <button onClick={()=>changeProject(2)} className='flex items-center  h-24  w-full justify-center border-[#764fa4] rounded-full border-2 bg-[#d8b8fb] hover:shadow-[#d8b8fb] hover:shadow-2xl'> <p className='text-2xl font-mono text-black'>Event Management</p> </button>
                       <button onClick={()=>changeProject(3)} className='flex items-center h-24 w-full  justify-center border-[#764fa4] rounded-full border-2 bg-[#d8b8fb] hover:shadow-[#d8b8fb] hover:shadow-2xl'> <p className='text-2xl font-mono text-wrap text-black w-80 text-center'>Student attendence System</p> </button>

                    </div>
                </div>

                <div className='border-4 border-[#764fa4] h-full w-[70%] rounded-lg flex z-20 bg-[#d8b8fb]' >
                    <div className='h-full w-32 bg-[#120a1c] rounded-sm' ><Logoslider></Logoslider></div>
<ProjectImg project={project}></ProjectImg>
                </div>


            </div>

            {/* <div className='absolute h-96 w-96 -z-1 -bottom-32 -left-10' style={{ backgroundImage: "url('/assets/blob.svg')" }}>  </div> */}
        </div>
        <div className='text-center text-8xl text-[#764fa4]'>. . . </div>

        </div>
    )
}

export default Project