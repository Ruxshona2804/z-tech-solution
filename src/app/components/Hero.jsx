'use client'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import bg_hero from '../../../public/images/bg-hero.svg'
import sour from '../../../public/images/sour.svg'
import wedding from '../../../public/images/wedding.svg'
import alibaba from '../../../public/images/alibaba.svg'
import Navbar from './Navbar'
import gsap from 'gsap'
import daftar from '../../../public/images/responsive/notebook.png'
import computer from '../../../public/images/responsive/computer.jpg'
import computer1 from '../../../public/images/responsive/computer1.jpg'
import telephone from '../../../public/images/responsive/telephone.jpg'

const images = [
  { src: wedding, alt: 'Wedding' },
  { src: alibaba, alt: 'Alibaba' },
  { src: sour, alt: 'Sour' },
]

const responsiveImages = [
  { src: daftar, alt: 'Daftar' },
  { src: computer, alt: 'Computer' },
  { src: computer1, alt: 'Computer1' },
  { src: telephone, alt: 'Telephone' },
]

const Hero = () => {
  const desktopRef = useRef(null)
  const mobileRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.desktop-slide', {
        xPercent: -40,
        duration: 40,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('.mobile-slide', {
        xPercent: -50,
        duration: 40, 
        repeat: -1,
        ease: 'none',
      })
    })
  
    return () => ctx.revert()
  }, [])

   

  return (
    <div id='hero' style={{ backgroundImage: `url(${bg_hero.src})` }} className='bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <div className='h-auto  md:h-[900px] flex flex-col items-center z-10'>
       
        <div data-aos="fade-up" className='container w-[90%]  md:h-[320px] flex flex-col items-center justify-center text-center'>
          <h1 className='h-auto w-[358px] md:w-[1000px] text-[36px] md:text-[64px] font-[500] tracking-normal leading-tight'>
            Empowering Growth Through Digital Innovation
          </h1>
          <p className='text-[16px] md:text-[18px] text-[#808897] font-[400] w-[358px] md:w-[600px] mt-4'>
            Partner with us to craft innovative strategies and design solutions that drive
            measurable results and elevate your brand to new heights.
          </p>
        </div>

       
        <section ref={desktopRef} className='hidden md:block overflow-hidden mt-12'>
          <div className="flex w-max gap-12 desktop-slide">
            {[...images, ...images, ...images].map((img, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={526}
                  height={437}
                  className="w-[526px] h-[437px] rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Мобильная версия слайдера */}
        <section ref={mobileRef} className='block md:hidden overflow-hidden w-[90%] md:w-full h-[358px] mt-8'>
          <div className="flex w-max gap-4 mobile-slide">
            {[...responsiveImages, ...responsiveImages, ...responsiveImages].map((img, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={430}
                  height={356}
                  className="w-[430px] h-[350px] rounded-lg shadow-md"
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
