import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='p-10'>
           <div className='flex flex-col  '>
           <Link to={'/scan'} className='text-xl font-bold'>Scans</Link>
           <Link to={'/test'} className='text-xl font-bold'>Tests</Link>
           <Link to={'/prescription'} className='text-xl font-bold'>Prescription</Link>
            <button>Summarize</button>
           </div>
    </div>
  )
}

export default Sidebar