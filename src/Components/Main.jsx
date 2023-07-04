import React from 'react'
import ImageList from './ImageList'
import MiddlePart from './MiddlePart'

const Main = () => {
  return (
    <div className=' w-screen'>
        <div className='flex items-center w-[70%] gap-10 flex-wrap justify-center m-auto mt-20'>
        <ImageList />
        </div>
        <MiddlePart/>
    </div>
  )
}

export default Main