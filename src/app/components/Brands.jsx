import Image from 'next/image'
import React from 'react'
import evernote from '../../../public/images/brands/evernote.svg'
import slack from '../../../public/images/brands/slack.svg'
import intercom from '../../../public/images/brands/intercom.svg'
import airbnb from '../../../public/images/brands/airbnb.svg'
import miro from '../../../public/images/brands/miro.svg'
import uber from '../../../public/images/brands/uber.svg'

const Brands = () => {
  return (
    <div className='container  h-[266px] flex flex-col justify-center items-center gap-10 ' >
        <p className='text-[20px] text-[#808897] font-[500]'>We're trusted by</p>
        <div className='flex items-center justify-center gap-30'>
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={evernote} alt='brands' width={110} height={40} />
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={slack} alt='brands' width={110} height={40} />
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={intercom} alt='brands' width={110} height={40} />
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={airbnb} alt='brands' width={110} height={40} />
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={miro} alt='brands' width={110} height={40} />
            <Image data-aos="flip-left"  className='w-full h-[40px]' src={uber} alt='brands' width={110} height={40} />

        </div>
    </div>
  )
}

export default Brands