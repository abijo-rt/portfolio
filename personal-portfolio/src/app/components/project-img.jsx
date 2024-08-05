'use client'
import React, { useState } from 'react'

const ProjectImg = ({ project }) => {

  const projectimg = [
    {
      id: 1,
      imgurl: ['cm1', 'cm2', 'cm3', 'cm4', 'cm5']
    },
    {
      id: 2,
      imgurl: ['em1', 'em2', 'em3', 'em4', 'em5']
    },
    {
      id: 3,
      imgurl: ['sd1', 'sd2', 'sd3', 'sd4', 'sd5']
    }
  ]
  const [imgid, setimgId] = useState(0)

  const changeimg = (direction) => {
    if (!direction && imgid == 0)
    {
      setimgId(4)
    } else if (!direction)
    {
      setimgId(imgid - 1)
    } else if (direction && imgid == 4)
    {
      setimgId(0)
    } else
    {
      setimgId(imgid + 1)
    }
  }


  const imageUrl = projectimg[project - 1]?.imgurl[imgid];

  return (
    <div className='h-full w-full '>
      <div className='h-[85%] w-full px-5 pt-5'>
        <div className='border-4 border-[#764fa4] h-full w-full bg-center rounded-lg bg-contain' style={{ backgroundImage: `url('./assets/${imageUrl}.png')` }}> </div>
      </div>
      <div className='h-[15%] w-full flex  justify-center space-x-4 items-center'>
        <button onClick={() => changeimg(0)} className=' h-12 w-12 bg-[#764fa4] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-4 border-[#fbfbfb] hover:border-[#3b82f6]'> <img className='size-6 ' src="./assets/left.svg"></img></button>
        <button onClick={() => changeimg(0)} className=' h-12 w-12 bg-[#764fa4] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-4 border-[#fbfbfb]   hover:border-[#3b82f6]'> <img className='size-6' src="./assets/github.svg"></img></button>
        <button onClick={() => changeimg(0)} className=' h-12 w-12 bg-[#764fa4] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-4 border-[#fbfbfb] hover:border-[#3b82f6]'><img className='size-6' src="./assets/link.svg"></img></button>
        <button onClick={() => changeimg(1)} className=' h-12 w-12 bg-[#764fa4] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-4 border-[#fbfbfb] hover:border-[#3b82f6]'> <img className='size-6' src="./assets/right.svg"></img></button>
      </div>
    </div>
  )

}

export default ProjectImg