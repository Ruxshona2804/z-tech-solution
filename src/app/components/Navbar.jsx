import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.svg"
const Navbar = () => {
    return (
        <div className='py-6'>
            <div className='container-navbar bg-white  h-[68px] px-6 flex items-center justify-between  rounded-2xl shadow-2xl '>
                <div>
                    <Image src={logo} alt='logo' width={214} height={32} className='' />
                </div>
                <ul className='flex items-center justify-center gap-15 text-[#626B75] text-[18px] mr-30 '>
                    <li>About Us</li>
                    <li>Rates</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
                <button className=' button  text-[14px] w-[107px] h-[40px]  rounded-md bg-violet text-white '>Get Startes</button>
            </div>
        </div>
    )
}

export default Navbar