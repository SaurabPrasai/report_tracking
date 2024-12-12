import React from 'react'
import Sidebar from '../components/Sidebar'

const Details = () => {
  return (
    <div className='min-h-screen flex '>

        <div className='w-[20%] border-2'>
                <Sidebar/> 
        </div>

        <div className='w-[80%]'>
                Sidebar details
        </div>

    </div>
  )
}

export default Details