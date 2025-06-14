'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../public/images/logo.svg"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const t = useTranslations()
    return (
        <div className='py-6'>
            <div className=' w-[90%]  md:w-[1066px] mx-auto bg-white h-[68px] px-6 flex items-center justify-between rounded-2xl shadow-2xl'>
                <div className=''>
                   <Link href={'#hero'}><Image src={logo} alt='logo' width={214} height={32} /></Link> 
                </div>
                <ul className='hidden md:flex items-center justify-center gap-15 text-[#626B75] text-[18px] mr-30'>
                    <Link scroll={true} href={'#about'}><li className='active:text-[#4236C4] '>{t("navigation.about")}</li></Link>
                     <Link scroll={true} href={'#rates'}><li className='active:text-[#4236C4] '>{t("navigation.tariffs")}</li></Link>
                     <Link scroll={true} href={'#projects'}><li className='active:text-[#4236C4] '>{t("navigation.projects")}</li></Link>
                     <Link  scroll={true} href={'#contacts'}><li className='active:text-[#4236C4] '>{t("navigation.contacts")}</li></Link>
                </ul>
                <div className='md:hidden '>
                    <button className='text-[#4236C4] w-[24px] h-[24px] ' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <button className='hidden md:block button  text-[14px] w-[107px] h-[40px] rounded-md bg-violet text-white'>
                {t("cta.get_started")} 
                </button>
            </div>
            {isOpen && (
                <div className='md:hidden mt-2  bg-white rounded-2xl shadow-xl px-6 py-4 space-y-4 text-[#626B75] text-[16px]'>
                    <ul className='flex flex-col gap-3'>
                    <Link scroll={true} href={'#about'}><li className='active:text-[#4236C4]'>{t("navigation.about")}</li></Link>
                     <Link scroll={true} href={'#rates'}><li className='active:text-[#4236C4]'>{t("navigation.tariffs")}</li></Link>
                     <Link scroll={true} href={'#projects'}><li className='active:text-[#4236C4]'>{t("navigation.projects")}</li></Link>
                     <Link scroll={true} href={'#contacts'}><li className='active:text-[#4236C4]'>{t("navigation.contacts")}</li></Link>
                    </ul>
                    <button className='w-full button  text-[14px] h-[40px] rounded-md bg-violet text-white'>
                       {t("cta.get_started")} 
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar
