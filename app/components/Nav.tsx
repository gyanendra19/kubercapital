import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full fixed nav-gradient z-[1000]'>
        <div className='md:p-6 p-4 w-full text-center pb-4 md:pb-8'>
            <ul className='gap-8 hidden md:flex list-none justify-center w-full items-center text-center text-lg tracking-wide'>
                <li>ABOUT US</li>
                <li>OUR MISSION</li>
                <Image src={'/logo.png'} alt='logo' width={170} height={20} />
                <li>FUTURE PLANS</li>
                <li>ACHIEVEMENTS</li>
            </ul>
            <ul className='gap-8 flex md:hidden list-none justify-center w-full items-center text-center text-lg tracking-wide'>
                <Image src={'/logo.png'} alt='logo' width={200} height={20} />
            </ul>
        </div>
    </nav>
  )
}

export default Nav