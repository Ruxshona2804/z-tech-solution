import React from 'react'
import analysis from '../../../public/images/content/analysis.svg'
import creative from '../../../public/images/content/creative.svg'
import development from '../../../public/images/content/developement.svg'
import launch from '../../../public/images/content/launch.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Content = () => {
const t = useTranslations()
    const images = [
        { src: analysis, alt: 'analysis', title: "step1", description: "step1_1" },
        { src: creative, alt: 'creative', title: "step2", description: "step2_1" },
        { src: development, alt: 'development', title: "step3", description: "step3_1" },
        { src: launch, alt: 'launch', title: "step4", description: "step4_1" },

    ]

    return (
        <div className='container   py-16'>
        <div className='text-center mb-10'>
          <button className='text-sm my-4  button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3'>{t("work_chain")}</button>
          <h3 className='text-[48px] xl:text-[52px] font-[500] mt-3'>{t("Process")}</h3>
          <p className='text-base text-[#808897] max-w-xl mx-auto mt-3'>
             
          </p>
        </div>
      
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-10">
          {images.map((item, index) => (
            <div
              data-aos="zoom-in-down"
              key={index}
              className="w-full max-w-[358px]  xl:max-w-xl bg-white p-2 rounded-[12px] border border-[#E0E4EA]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={550}
                height={350}
                className="rounded-[6px] w-full h-auto aspect-[12/10] object-cover"
              />
              <div className='px-3 py-2'>
                <h3 className="text-lg font-semibold mb-1">{t(item.title)}</h3>
                <p className="text-sm text-[#808897]">{t(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    )
}

export default Content