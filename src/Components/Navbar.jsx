import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className=' mb-20 flex items-center justify-between py-6'>
      <div  className=' w-32 flex flex-shrink-0 items-center'>
        <img className=' w-46' src={logo} alt="" />
          {/* <h1 className=' font-sans nav text-3xl text-white font-bold '>SAIF</h1> */}
      </div>
      <div className='m-8 flex items-center gap-5 text-2xl'>
      <a href="https://www.linkedin.com/in/saif-butt-791170268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin className='hover:text-cyan-300' /></a>
      <a href="https://github.com/saif1431?tab=repositories"><VscGithub className='hover:text-cyan-300' /></a>
      <CiFacebook className='hover:text-cyan-300' />
      <FaInstagram className='hover:text-cyan-300' />
      </div>
    </div>
  )
}

export default Navbar
