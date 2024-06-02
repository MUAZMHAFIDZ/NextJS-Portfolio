"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLink = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
] 

const Navbar = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#090909] z-10 bg-opacity-90'>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"} className='font-semibold text-white text-2xl'>
                MuazMHafidz
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navOpen ? (
                        <button onClick={() => setNavOpen(true)} className='flex items-center px-3 py-2 border text-white'><Bars3Icon className='h-5 w-5' /></button>
                    ) : (
                        <button onClick={() => setNavOpen(false)} className='flex items-center px-3 py-2 border text-white'><XMarkIcon className='h-5 w-5' /></button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto'id='navbar'>
                <ul className='flex flex-row'>
                    {navLink.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {
            navOpen ? (
                <ul className='flex flex-col items-center justify-center py-4'>
                    {navLink.map((link, index) => (
                        <li className='py-4' key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            ) : null
        }
    </nav>
  )
}

export default Navbar