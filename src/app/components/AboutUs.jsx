import React from 'react'
import about from '../../../public/images/about/about.svg'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div className='container h-[660px]  flex items-center justify-between '>
        <div>
            <button className='text-[14px] button text-white bg-violet rounded-[24px] w-[83px] h-[29px] '>About Us</button>
            <h2 className='w-[720px] h-[124px] mt-5 text-[52px] leading-15 font-medium  '>Crafting Digital Excellence, One Brand at a Time</h2>
            <p className='text-[18px] text-[#808897] w-[702px] h-[70px] '>We're passionate about driving innovation, elevating brands, and delivering measurable success in the digital world</p>
            <div className='flex  gap-3'>
                <button className=' w-[130px] h-[52px] rounded-[12px] hover:bg-[#4236C4] border-[#A8B3C4] hover:text-white  border '>Work with us!</button>
                <button className=' w-[130px] h-[52px] rounded-[12px] hover:bg-[#4236C4] border-[#A8B3C4] hover:text-white  border '>See our pricing</button>
            </div>
        </div>
        <div>
            <Image src={about} alt='about' width={546} height={420} className='rounded-[24px] w-[546px] h-[420px]  ' />
        </div>
    </div>
  )
}

export default AboutUs