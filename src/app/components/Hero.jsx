'use client'
import Image from 'next/image'

import React, { useRef, useEffect } from 'react'
import bg_hero from '../../../public/images/bg-hero.svg'
import sour from '../../../public/images/sour.svg'
import wedding from '../../../public/images/wedding.svg'
import alibaba from '../../../public/images/alibaba.svg'
import Navbar from './Navbar'
import gsap from 'gsap'

const images = [
    { src: wedding, alt: 'Wedding' },
    { src: alibaba, alt: 'Alibaba' },
    { src: sour, alt: 'Sour' },
  ]

  
const Hero = () => {
    const trackRef = useRef(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to('.image-slide', {
          xPercent: -100,
          duration: 10,
          repeat: -1,
          ease: 'linear',
        })
      }, trackRef)
  
      return () => ctx.revert()
    }, [])
  
    return (
        <div style={{ backgroundImage: `url(${bg_hero.src})` }} className=''>
            <Navbar />
            {/* Hero Section */}
            <div className=' h-[900px] 
         flex flex-col items-center z-10'>
                <div className='container  h-[320px] flex flex-col items-center justify-center  text-center '>
                    <h1 className=' h-[154px] mx-auto  leading-18 w-[1000px] text-[64px] font-[500]  '>Empowering Growth Through Digital Innovation </h1>
                    <p className=' w-[600px] mx-auto text-[18px] text-[#808897]'>Partner with us to craft innovative strategies and design solutions that drive
                        measurable results and elevate your brand to new heights.</p>
                </div>
                <section className=" overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-12 image-track">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="image-slide flex-shrink-0 ">
            <Image
              src={img.src}
              alt={img.alt}
              width={526}
              height={437}
              className=" w-[526px] h-[437px] rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>

            </div>
        </div>
    )
}

export default Hero