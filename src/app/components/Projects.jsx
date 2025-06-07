import Image from 'next/image'
import React from 'react'
import sour from '../../../public/images/sour.svg'
import wedding from '../../../public/images/wedding.svg'
import alibaba from '../../../public/images/alibaba.svg'
const Projects = () => {
    return (
        <div className='container h-[1376px]  '>
            <div className=' h-[162px]  flex flex-col items-center justify-center text-center  '>
                <button className='w-[97px] h-[29px] text-[14px] rounded-[24px] button bg-violet text-white'>Out Projects</button>
                <h3 className='text-[52px] font-[500]'>View Our Projects</h3>
                <p className='text-[17px] font-[400] text-[#808897] '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className='flex flex-col gap-5 mt-13'>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="card flex items-center justify-center gap-8 border h-[332px] rounded-[12px] border-[#E0E4EA]  ">
                    <div className="relative w-[650px]    h-[305px] rounded-[12px] overflow-hidden">
                        <Image
                            src={sour}
                            alt="sour"
                            fill
                            className="object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='w-[650px] h-[305px] '>
                        <div className='mb-4'>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>E-Commerce</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>User Experience</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>

                        </div>
                        <p className=' text-[20px] my-1 font-[600] text-[#0D0D12] '>Ecommerce Mobile App</p>
                        <p className=' text-[15px] mb-4  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan. </p>
                        <button className=' border bg-violet w-[190px] h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>Seek our project</button>
                    </div>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="card flex items-center justify-center gap-8 border h-[332px] rounded-[12px] border-[#E0E4EA]  ">
                    <div className="relative w-[650px] h-[305px] rounded-[12px] overflow-hidden ">
                        <Image
                            src={wedding}
                            alt="wedding"
                            fill
                            className="object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='w-[650px]    h-[305px] '>
                        <div className='mb-4'>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>AI Powered</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Finance</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Dashboard</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>
                        </div>
                        <p className=' text-[20px] font-[600] text-[#0D0D12] '>AI-Powered Finance Dashboard </p>
                        <p className=' text-[15px] mb-4 my-1  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan. </p>
                        <button className=' border bg-violet w-[190px] h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>Seek our project</button>
                    </div>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="card flex items-center justify-center gap-8 border h-[332px] rounded-[12px] border-[#E0E4EA]  ">
                    <div className="relative w-[650px]  h-[305px] rounded-[12px] overflow-hidden">
                        <Image
                            src={alibaba}
                            alt="alibaba"
                            fill
                            className="object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='w-[650px]    h-[305px] '>
                        <div className='mb-4'>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Smart Travel  </button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Booking App</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Mobile UI</button>
                            <button className=' h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>

                        </div>
                        <p className=' text-[20px] my-1 font-[600] text-[#0D0D12] '>Smart Travel Booking System</p>
                        <p className=' text-[15px] mb-4  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan. </p>
                        <button className=' border bg-violet w-[190px] h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>Seek our project</button>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects