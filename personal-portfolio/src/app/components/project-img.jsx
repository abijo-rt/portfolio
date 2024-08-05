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
      <div className='h-[90%] w-full p-5'>
        <div className='border-2 border-[#764fa4] h-full w-full bg-center bg-cover' style={{ backgroundImage: `url('./assets/${imageUrl}.png')` }}> </div>
      </div>
      <div className='h-[10%] w-full flex px-5 justify-between'>
        <button onClick={() => changeimg(0)} className=' h-[80%] w-32 bg-[#fad964] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-2 border-[#764fa4]'> Previous</button>
        <button onClick={() => changeimg(1)} className='h-[80%] w-32 bg-[#fdda5f] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-2 border-[#764fa4]'> Next</button>
      </div>
    </div>
  )

}

export default ProjectImg