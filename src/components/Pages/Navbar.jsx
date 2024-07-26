// import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-20 bg-teal-300 text-white'>
        <div className="flex justify-center ">
            <div className="">logo</div>
        <ul>
            <li>
                <a href='#' className="hover:text-red-400">Home</a>
                <a href="#" className="hover:text-red-400">About</a>
                <a href="#" className="hover:text-red-400">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
