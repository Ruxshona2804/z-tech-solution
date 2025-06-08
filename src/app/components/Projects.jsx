import Image from 'next/image'
import React from 'react'
import sour from '../../../public/images/sour.svg'
import wedding from '../../../public/images/wedding.svg'
import alibaba from '../../../public/images/alibaba.svg'
import switched from '../../../public/images/responsive/switch.svg'
import finance from '../../../public/images/responsive/finance.svg'
import travel from '../../../public/images/responsive/travel.svg'


const Projects = () => {
    return (
        <div id='projects'  className='container md:h-[1376px] h-[2750px] border    '>
            <div className=' md:h-[162px]  flex flex-col items-center justify-center text-center  '>
                <button className='w-[97px] mb-6 md:mb-0 h-[29px] text-[14px] rounded-[24px]  button bg-violet text-white'>Out Projects</button>
                <h3 className='text-[52px] leading-13 font-[500]'>View Our Projects</h3>
                <p className='text-[17px] font-[400] text-[#808897] '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className='flex flex-col  gap-5 '>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="card md:flex items-center justify-center gap-8  md:h-[332px] h-[810px] rounded-[12px] border-[#E0E4EA] border ">
                    <div className="relative md:w-[650px] w-[326px] md:mt-0 mt-4 mx-auto  md:h-[305px] h-[300px] rounded-[12px] overflow-hidden">
                        <Image
                            src={sour}
                            alt="sour"
                            fill
                            className=" hidden md:block object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                        <Image
                            src={switched}
                            alt="sour"
                            fill
                            className="block md:hidden object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='  mt-3 md:w-[650px] md:h-[305px] h-[386px]  '>
                        <div className='mb-4  '>
                            <button className='  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>E-Commerce</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>User Experience</button>
                            <button className='md:hidden   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>UI/UX</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>
                            <button className='md:hidden  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1  text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Prototype</button>

                        </div>
                        <p className='mx-2 text-[20px] my-1 font-[600] text-[#0D0D12] '>Ecommerce Mobile App</p>
                        <p className='mx-2 md:text-[15px]  text-[14px] leading-5 mb-5  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan. </p>
                        <button className='border bg-violet md:w-[190px] w-[326px] mx-auto md:mx-0 block h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>

                            <span className="hidden md:inline">Seek our project</span>


                            <span className="inline md:hidden">View Project</span>
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="card md:flex items-center justify-center gap-8  md:h-[332px] h-[810px] rounded-[12px] border-[#E0E4EA] border ">
                    <div className="relative md:w-[650px] w-[326px] md:mt-0 mt-4 mx-auto  md:h-[305px] h-[300px] rounded-[12px] overflow-hidden">
                        <Image
                            src={wedding}
                            alt="wedding"
                            fill
                            className=" hidden md:block object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                        <Image
                            src={finance}
                            alt="finance"
                            fill
                            className="block md:hidden object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='  mt-3 md:w-[650px] md:h-[305px] h-[386px]  '>
                        <div className='mb-4  '>
                            <button className='  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>AI Powered</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Finance</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Dashboard</button>
                            <button className='md:hidden   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>
                            <button className='md:hidden  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1  text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>AI Powered</button>

                        </div>
                        <p className='mx-2 text-[20px] my-1 font-[600] text-[#0D0D12] '>AI-Powered Finance Dashboard</p>
                        <p className='mx-2 md:text-[15px]  text-[14px] leading-5 mb-5  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan.</p>
                        <button className='border bg-violet md:w-[190px] w-[326px] mx-auto md:mx-0 block h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>

                            <span className="hidden md:inline">Seek our project</span>


                            <span className="inline md:hidden">View Project</span>
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="card md:flex items-center justify-center gap-8  md:h-[332px] h-[810px] rounded-[12px] border-[#E0E4EA] border ">
                    <div className="relative md:w-[650px] w-[326px] md:mt-0 mt-4 mx-auto  md:h-[305px] h-[300px] rounded-[12px] overflow-hidden">
                        <Image
                            src={alibaba}
                            alt="alibaba"
                            fill
                            className=" hidden md:block object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                        <Image
                            src={travel}
                            alt="travel"
                            fill
                            className="block md:hidden object-cover rounded-[12px] border border-[#C8CED9] "
                        />
                    </div>
                    <div className='  mt-3 md:w-[650px] md:h-[305px] h-[386px]  '>
                        <div className='mb-4  '>
                            <button className='  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1 mr-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Smart Travel</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Booking App</button>
                            <button className='  my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Mobile UI</button>
                            <button className='   my-1 h-[29px] rounded-[24px] px-2 py-1 mx-2 text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Case Studies</button>
                            <button className='md:hidden  mx-2 my-1 h-[29px] rounded-[24px] px-2 py-1  text-[14px] font-[500] text-[#5B6B86] bg-[#F1F3F6] border border-[#C8CED9]  '>Smart Travel</button>

                        </div>
                        <p className='mx-2 text-[20px] my-1 font-[600] text-[#0D0D12] '>Smart Travel Booking System</p>
                        <p className='mx-2 md:text-[15px]  text-[14px] leading-5 mb-5  text-[#808897] font-[400] tracking-[0.2] '>Pizza ipsum dolor meat lovers buffalo. Bacon pesto green mayo and personal broccoli onions. Burnt sautéed lovers marinara marinara thin marinara pork. Hawaiian broccoli mozzarella Chicago platter. Roll bell Chicago bbq pie rib spinach parmesan deep. Sautéed ricotta mouth parmesan tomatoes bbq. Sautéed meatball tossed banana deep Philly sausage lovers. Marinara ham wing Philly pork mushrooms buffalo burnt. Sauce party mushrooms ipsum Philly mushrooms ipsum dolor crust ranch. Ipsum chicken large thin platter platter hand. Pie sauce meat pizza hand Aussie. Philly pesto sautéed burnt ham wing Philly parmesan. </p>
                        <button className='border bg-violet md:w-[190px] w-[326px] mx-auto md:mx-0 block h-[52px] rounded-[12px] text-[16px] font-[500] text-white'>

                            <span className="hidden md:inline">Seek our project</span>


                            <span className="inline md:hidden">View Project</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects