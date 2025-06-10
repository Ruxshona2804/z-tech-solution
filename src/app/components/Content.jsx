import React from 'react'
import analysis from '../../../public/images/content/analysis.svg'
import creative from '../../../public/images/content/creative.svg'
import development from '../../../public/images/content/developement.svg'
import launch from '../../../public/images/content/launch.svg'
import Image from 'next/image'

const Content = () => {

    const images = [
        { src: analysis, alt: 'analysis', title: "1.Analysis with Leads", description: "Pizza ipsum dolor meat lovers buffalo. Pie crust roll mushrooms sautéed deep meat broccoli black. Personal style NY peppers olives ham chicken Philly cheese mozzarella." },
        { src: creative, alt: 'creative', title: "2.Creative Design", description: "Pizza ipsum dolor meat lovers buffalo. Rib green pan banana mayo green tomatoes burnt pineapple large. Hand and mouth rib sauce." },
        { src: development, alt: 'development', title: "3.Developement", description: "Pizza ipsum dolor meat lovers buffalo. Sauce banana mouth sausage green rib Chicago. Tomato pork tossed burnt rib red ricotta crust pie pizza." },
        { src: launch, alt: 'launch', title: "4.Launch the Project", description: "Pizza ipsum dolor meat lovers buffalo. Sautéed pesto mushrooms ricotta pizza anchovies tossed. Pesto meatball beef lot roll pan beef sauce." },

    ]

    return (
        <div className='container   py-16'>
        <div className='text-center mb-10'>
          <button className='text-sm my-4  button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3'>Work Chain</button>
          <h3 className='text-[48px] xl:text-[52px] font-[500] mt-3'>Our Work Process</h3>
          <p className='text-base text-[#808897] max-w-xl mx-auto mt-3'>
            Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.
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
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[#808897]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    )
}

export default Content