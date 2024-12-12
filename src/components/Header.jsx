import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <div className="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap pl-10 pr-10">
    <div className="flex items-center">
       <Link to={'/'}> <img src={logo} className="w-20 h-20 "/></Link>
    </div>
    {/* <div className="relative  items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" className="border border-gray-200 rounded-md py-1 px-2"/>
        <svg className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div> */}
   
    <div className="flex items-center gap-10 ">
        <button className="border px-2 py-1 rounded-md bg-blue-700 text-white text-xl">Logout</button>
    </div>
</div>
  )
}

export default Header