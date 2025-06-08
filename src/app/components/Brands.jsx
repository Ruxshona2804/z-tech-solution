'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import evernote from '../../../public/images/brands/evernote.svg'
import slack from '../../../public/images/brands/slack.svg'
import intercom from '../../../public/images/brands/intercom.svg'
import airbnb from '../../../public/images/brands/airbnb.svg'
import miro from '../../../public/images/brands/miro.svg'
import uber from '../../../public/images/brands/uber.svg'

const logos = [evernote, slack, intercom, airbnb, miro, uber]

const Brands = () => {
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.brands-track', {
        xPercent: -50,
        duration: 30, 
        repeat: -1,
        ease: 'none',
      })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className='container  w-[90%]  h-[280px] mx-auto md:h-[200px] flex flex-col justify-center items-center gap-8 overflow-hidden'>
      <p className='text-[20px] text-[#808897] font-[500]'>We're trusted by</p>

      <div ref={trackRef} className='w-full overflow-hidden'>
        <div className='  brands-track flex w-max gap-16'>
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt='brand'
              width={110}
              height={40}
              className='h-[40px]   my-3 w-auto md:w-[160px] object-contain'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
