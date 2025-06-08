import React from 'react'
import about from '../../../public/images/about/about.svg'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div id='about' className='container  w-[90%] md:h-[660px] h-[821px] flex flex-col md:flex-row items-center justify-between'>
      <div className='order-1 md:order-2 mb-6 md:mb-0' data-aos="fade-left">
        <Image
          src={about}
          alt='about'
          width={546}
          height={420}
          className='rounded-[24px] md:w-[546px] w-[358px] object-cover h-[420px]'
        />
      </div>
      <div className='order-2 md:order-1  md:text-left' data-aos="fade-right">
        <button className='text-[14px] button text-white bg-violet rounded-[24px] w-[83px] h-[29px]'>
          About Us
        </button>
        <h2 className='md:w-[720px] md:mt-5 md:text-[52px] text-[48px] font-medium leading-[56px]'>
          Crafting Digital Excellence, One Brand at a Time
        </h2>
        <p className='text-[#808897] md:text-[18px] text-[16px] font-[400] my-3 md:w-[702px]'>
          We're passionate about driving innovation, elevating brands, and delivering measurable success in the digital world
        </p>
        <div className='flex  gap-3 items-center md:items-start'>
          <button className='md:w-[130px] w-[171px] h-[52px] rounded-[12px] hover:bg-[#4236C4] border-[#A8B3C4] hover:text-white border'>
            Work with us!
          </button>
          <button className='md:w-[130px] w-[171px] h-[52px] rounded-[12px] hover:bg-[#4236C4] border-[#A8B3C4] hover:text-white border'>
            See our pricing
          </button>
        </div>
      </div>
    </div>

  )
}

export default AboutUs