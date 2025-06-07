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
        <div className='container h-[1290px] my-5  '>
            <div className='text-center py-6 mt-6'>
                <button className=' w-[97px] h-[29px] text-[14px] rounded-[24px] button bg-violet text-white '>Work Chain</button>
                <h3 className=' text-[52px] font-medium ' >Our Work Process</h3>
                <p className=' text-[17px] font-[400] text-[#808897]  '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className="flex flex-wrap gap-10 mt-5 p-4 mx-auto items-center justify-center">
                {images.map((item, index) => (
                    <div 
                    data-aos="zoom-in-down"
                        key={index}
                        className=" bg-[Gray/gray-200]   rounded-[12px] w-[568px] h-[439px] border border-[#E0E4EA]  "
                    >
                       <Image src={item.src} alt={item.alt} width={544} height={350} className='rounded-[6px] w-[550px] h-[350px] pt-2 mx-auto  ' />
                        <div className='px-5'>
                        <h3 className=" text-[18px] font-[600]  my-2 h-[25px] ">{item.title}</h3>
                        <p className=" text-[14px] text-[#808897] font-[400] ">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content