import React from 'react'
import { IoMdMenu } from "react-icons/io"

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl text-cyan-500 font-medium' data-aos="zoom-in-up">Nisha</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink '><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#project'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <IoMdMenu className='md:hidden' size={30} />
        </div>
      
    </div>
  )
}

export default Navbar
