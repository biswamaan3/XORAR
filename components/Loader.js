import React from 'react'
import "@/styles/loader.css"
function Loader() {
  return (
    <div className='w-full h-full absolute bg-white bg-opacity-70 z-50 flex justify-center items-center backdrop-blur-sm'>
        <div className='loader'></div>

    </div>
  )
}

export default Loader