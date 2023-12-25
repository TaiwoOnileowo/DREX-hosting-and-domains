import React,{useEffect, useState}from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { FiMoon } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
const Navbar=(props)=>{
   
   const [showNav, setShowNav]= useState(false);

   const handleNav=()=>{
    setShowNav(!showNav)
   }
   const handleResize=()=>{
    window.innerWidth>=768 && setShowNav(false);
   }
   useEffect(()=>{
    window.addEventListener('resize', handleResize);
    handleResize();
    return()=>{
        window.removeEventListener('resize', handleResize);
    }
   },[]);
   return (
<div className={props.Dark ? 'flex justify-between items-center h-24 mx-auto px-4 text-white overflow-x-hidden' : 'flex justify-between items-center h-24 overflow-x-hidden  mx-auto px-4 bg-[#f5f5f5] text-[#333333]'}>
    <h1 className='w-full text-3xl font-bold text-[#3d5afe]'>DREX.</h1>
    <ul className='hidden md:flex'   >
        <li className='p-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>Home</li>
        <li className='p-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>Hosting</li>
        <li className='p-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>Domain</li>
        <li className='p-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>About</li>
        <li className='p-4 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>Contact</li>
    </ul>
    <div>
   {props.Dark ? <FiMoon size={30} onClick={props.toggleDark} className='cursor-pointer'/>: <IoMdMoon size={30} onClick={props.toggleDark} className='cursor-pointer' />  } 
    </div>
    <div onClick={handleNav} className='block  md:hidden'>
        {showNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
 </div>
 <div className={showNav ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ${props.Dark ? 'bg-gray-900' : 'bg-gray-200'} ease-in-out duration-500` : "fixed left-[-100%]"}>

 <h1 className='w-full text-3xl font-bold m-4 text-[#3d5afe]'>DREX.</h1>
    <ul className='uppercase p-4'>
     <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-blue-500 '>Home</li>
     <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-blue-500'>Hosting</li>
     <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-blue-500'>Domain</li>
     <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-blue-500'>About</li>
     <li className='p-4 cursor-pointer hover:text-blue-500'>Contact</li>
    </ul>
 </div>
</div>

    )
}

export default Navbar