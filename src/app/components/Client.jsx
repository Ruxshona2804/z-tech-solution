import React from 'react'
import emily from '../../../public/images/clients/emily.svg'
import james from '../../../public/images/clients/james.svg'
import samantha from '../../../public/images/clients/samantha.svg'
import michael from '../../../public/images/clients/michael.svg'
import rachel from '../../../public/images/clients/rachel.svg'
import Image from 'next/image'

const Client = () => {
  return (
    <div className=' container h-[930px]  '>
         <div className=' h-[300px]   flex flex-col items-center justify-center text-center  '>
                <button className='w-[97px] h-[29px] text-[14px] rounded-[24px] bg-violet button text-white'>Our Rates</button>
                <h3 className='text-[52px] font-[500]'>Our Client Experiences</h3>
                <p className='text-[17px] font-[400] text-[#808897] '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className=' grid grid-cols-3 items-center justify-center gap-3 '>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>Their expertise in UI/UX design transformed our digital presence. The new interface is seamless, intuitive, and has significantly improved user engagement.</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={emily} alt='emily' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>Emily Rodriguez</p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>Product Manager at FinEdge</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>They understood our vision and executed it flawlessly. Our app’s performance and usability have improved dramatically, thanks to their strategic approach.</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={james} alt='james' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>James Tuchel</p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>CEO of MoveSmart</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>From branding to web development, their team delivered beyond our expectations. The attention to detail and innovative mindset set them apart and startegic approach.</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={samantha} alt='samantha' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>Samantha Laurent </p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>Founder of Lume Studio</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>Working with them was effortless. They communicated effectively, met deadlines, and delivered a product that exceeded our initial goals</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={michael} alt='michael' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>Michael De Guzman
                            </p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>Marketing Director at BrightRetail</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>They helped us launch a stunning and functional website that truly represents our brand. The design, speed, and responsiveness are just perfect!</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={rachel} alt='rachel' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>Rachel Venyya</p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>Co-founder of NovaTech</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-[445px] h-[240px] border border-[#E0E4EA] p-5  rounded-[12px]  ">
                    <p className=' text-[19px] font-[500] mb-2 tracking-[0.2] '>They helped us launch a stunning and functional website that truly represents our brand. The design, speed, and responsiveness are just perfect!</p>
                    <div className=' border-t  border-[#DFE1E6] w-[400px] mx-auto mt-5 '></div>
                    <div className=' flex mt-6 gap-3 '>
                        <Image src={rachel} alt='rachel' width={45} height={45} />
                        <div className='    '>
                            <p className=' text-[16px] font-[500] '>Rachel Venyya</p>
                            <p className=' text-[14px] font-[400] text-[#808897] '>Co-founder of NovaTech</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Client