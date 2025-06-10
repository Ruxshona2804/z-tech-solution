import React from 'react'
import about from '../../../public/images/about/about.svg'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div id='about' className='container    xl:h-[660px] flex flex-col xl:flex-row items-center justify-between'>
      <div className='order-1 md:order-2 mb-6 md:mb-0' data-aos="fade-left">
        <Image
          src={about}
          alt='about'
          className='rounded-[24px] w-full max-w-[546px] h-auto object-cover aspect-[4/3]'
        />
      </div>
      <div className='order-2 md:order-1 text-left' data-aos="fade-right">
        <button className='text-sm my-4  button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3'>
          About Us
        </button>
        <h2 className='text-[48px] xl:text-[52px] font-[500] leading-tight max-w-[680px]'>
          Crafting Digital Excellence, One Brand at a Time
        </h2>
        <p className='text-[#808897] text-base xl:text-lg font-normal my-4 max-w-[680px]'>
          We're passionate about driving innovation, elevating brands, and delivering measurable success in the digital world
        </p>
        <div className='flex  gap-4 justify-center xl:justify-start'>
          <button className='px-10  py-3 rounded-[12px] border border-[#A8B3C4] hover:bg-[#4236C4] hover:text-white transition'>
            Work with us!
          </button>
          <button className='px-10  py-3 rounded-[12px] border border-[#A8B3C4] hover:bg-[#4236C4] hover:text-white transition'>
            See our pricing
          </button>
        </div>
      </div>
    </div>


  )
}

export default AboutUs