'use client'
import React, { useState } from "react";

import bg_hero from '../../../public/images/bg-hero.svg'
const ContactForm = () => {
    const [text, setText] = useState("");
    return (
        <div data-aos="zoom-in-down" className='container md:h-[1114px]  border h-[1450px] '>
            <div className=' h-[300px]   flex flex-col items-center justify-center text-center  '>
                <button className='w-[97px] h-[29px] text-[14px] rounded-[24px] bg-violet button text-white'>Contact Us</button>
                <h3 className='md:text-[52px] text-[48px] font-[500]'>Get in Touch with Us</h3>
                <p className='md:text-[17px] text-[16px] font-[400] text-[#808897] '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className=" md:w-[700px] md:h-[666px] w-[348px] h-[707px] mb-10 mx-auto p-6 bg-white rounded-xl  border-gray-00 shadow-sm">
                <form className="md:w-[620px] md:h-[494px]  w-[300px] h-[583px] ">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" md:h-[100px] h-[85px]" >
                            <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Sarah"
                                className="w-full text-[16px] font-[400] rounded-lg border shadow shadow-[#09194821] px-4 border-[#12376914] py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4]"
                            />
                        </div>
                        <div className=" md:h-[100px] h-[85px]">
                            <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Malkova"
                                className="w-full text-[16px] font-[400] rounded-lg border shadow  px-4 border-[#12376914] py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4]"
                            />
                        </div>
                    </div>

                    {/* Company Name */}
                    <div className=" md:h-[100px] h-[85px]  ">
                        <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Z Tech Solutions LLC"
                            className="w-full text-[16px] font-[400] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4] shadow "
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-[14px] font-[500] text-[#0D0D12] my-2">
                            Is there anything we can do for you?
                        </label>
                    </div>
                    <div className="relative w-full">
                        <textarea
                            maxLength={200}
                            rows={4}
                            placeholder="Enter your messages here."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full h-[221px] md:h-[250px] resize-y rounded-lg border text-[#A4ABB8] border-gray-300 px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-[#4236C4] shadow "
                        />


                        <span className="absolute bottom-2 left-4 text-[12px] text-[#A4ABB8] select-none">
                            {text.length}/200
                        </span>
                    </div>

                    <p className="text-[14px] font-[400] text-[#808897] mt-4 mb-4 ">
                        Your complaints and suggestions are very useful for our quality in the future.
                    </p>


                    <button
                        type="submit"
                        className="w-full text-[16px] font-[500] bg-violet hover:bg-[#7d82df] text-white py-3 rounded-lg transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div
                style={{
                    backgroundImage: `url(${bg_hero.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="md:hidden text-white"
            >
                <div id="contacts" className="w-[358px] pt-6 h-[374px] bg-[#4236C4] rounded-[24px] px-4 container button shadow-xl shadow-[#00000030] backdrop-blur-sm">
                    <h4 className="text-[43px] font-[500] leading-12 drop-shadow-md">Ready to create, build & sell.</h4>
                    <p className="mt-2 mb-4 text-[16px] text-[#EDEDED] leading-6">Ready to achieve more? Connect with us and start your digital business journey.</p>

                    <div className="flex gap-2 flex-col ">
                        <button className="w-[280px] h-[52px] rounded-[12px] bg-white/10 text-white text-[16px] font-[500] hover:bg-white hover:text-black transition-all duration-300">
                            See Our Work
                        </button>
                        <button className="w-[280px] h-[52px] rounded-[12px] bg-white/10 text-white text-[16px] font-[500] hover:bg-white hover:text-black transition-all duration-300">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ContactForm