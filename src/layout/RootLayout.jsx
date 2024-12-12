import React from 'react'
import Header from '../components/Header'

const RootLayout = ({children}) => {
  return (
    <div className='font-poppins'>
        <Header/>
        {children}
    </div>
  )
}

export default RootLayout