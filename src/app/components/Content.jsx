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
        <div className='container md:h-[1290px] h-[2474px] w-[90%] '>
            <div className='text-center md:py-6 mt-10'>
                <button className=' w-[97px] h-[29px] text-[14px] rounded-[24px] button bg-violet text-white '>Work Chain</button>
                <h3 className=' text-[48px] md:text-[52px] font-medium leading-13 mt-3 md:mt-0 ' >Our Work Process</h3>
                <p className='text-[16px]  font-[400] text-[#808897] mb-10  md:mb-0 '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className="flex flex-wrap md:gap-10 gap-12 mt-5    mx-auto items-center justify-center">
                {images.map((item, index) => (
                    <div
                        data-aos="zoom-in-down"
                        key={index}
                        className="  bg-[Gray/gray-200]   w-[358px] h-[490px] p-1 rounded-[12px] md:w-[568px] md:h-[445px] border border-[#E0E4EA]  "
                    >
                        <Image src={item.src} alt={item.alt} width={544} height={350} className='rounded-[6px] w-[358px] md:w-[550px] h-[350px]  mx-auto object-cover  ' />
                        <div className='px-3 mt-2 md:mt-0 '>
                            <h3 className=" text-[18px] font-[600]  my-2 md:h-[20px] ">{item.title}</h3>
                            <p className=" h-[45px] md:h-[42px] text-[14px] text-[#808897] font-[400] ">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content