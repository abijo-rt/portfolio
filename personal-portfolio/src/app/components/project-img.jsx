import React from 'react'

const ProjectImg = () => {




  return (
    <div className='h-full w-full '>
    <div className='h-[90%] w-full p-5'>
        <div className='border-2 border-[#764fa4] h-full w-full'></div>
    </div>
    <div className='h-[10%] w-full flex px-5 justify-between'>
        <div className='h-[80%] w-32 bg-[#fdda5f] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-2 border-[#764fa4]'> Next</div>
        <div className=' h-[80%] w-32 bg-[#fad964] flex rounded-full justify-center items-center text-xl font-semibold text-black font-mono border-2 border-[#764fa4]'> Previous</div>
    </div>
</div>
  )
  
}

export default ProjectImg