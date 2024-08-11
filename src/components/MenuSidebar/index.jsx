import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";




const MenuSidebar = ({setIsOpenMenu }) => {


    const handleCloseMenu = () => {
        setIsOpenMenu(false);
        console.log('closed')
    }



    return (
        <div className='fixed top-0 left-0 w-full h-screen z-[1000] bg-zinc-100' >
            <div>
                <div className='flex justify-between items-center w-full lg:w-1/3 p-5 border-b-2'>
                    <div className='flex items-center'>
                        <img src={logo} alt='logo' className='w-8 h-6  lg:w-[50px] lg:h-8' />
                        <p className=' font-Montserrat text-xl lg:text-3xl pt-1'>Furniro</p>
                    </div>
                    <IoIosCloseCircleOutline onClick={handleCloseMenu} size={30} />
                </div>
            </div>
            <nav className='w-full'>
                <ul className='flex flex-col justify-between text-lg'>
                    <NavLink to='/' onClick={handleCloseMenu} className='w-full flex gap-5 items-center px-5 py-8 h-12 border-b-2'>
                        <FaHome size={25}  />Home
                    </NavLink>
                    <NavLink to='shop' onClick={handleCloseMenu}  className='w-full flex gap-5 items-center px-5 py-8 h-12 border-b-2'>
                        <FaShopify size={25}  />Shop
                    </NavLink>
                    <NavLink to='blogs'  onClick={handleCloseMenu}  className='w-full flex gap-5 items-center px-5 py-8 h-12 border-b-2'>
                        <FaBlogger size={25}/>Blog
                    </NavLink>
                    <NavLink to='contact' onClick={handleCloseMenu}  className='w-full flex gap-5 items-center px-5 py-8 h-12 border-b-2'>
                       <FaSquarePhone size={25} /> Contact
                    </NavLink>
                </ul>
            </nav>
        </div>
   )}

export default MenuSidebar
