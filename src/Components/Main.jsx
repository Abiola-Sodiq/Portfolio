import React from 'react'
import ImageList from './ImageList'
import MiddlePart from './MiddlePart'
import Numbers from './Numbers'
import Vision from './Vision'

const Main = () => {
  return (
    <div className=' min-h-screen w-screen'>
        <div className='flex items-center w-[70%] gap-10 flex-wrap justify-center m-auto mt-20'>
        <ImageList />
        </div>
        <MiddlePart/>
        <Numbers/>
        <Vision/>
    </div>
  )
}

export default Main