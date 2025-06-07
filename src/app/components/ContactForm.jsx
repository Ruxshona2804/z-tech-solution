'use client'
import React, { useState } from "react";


const ContactForm = () => {
    const [text, setText] = useState("");
    return (
        <div className='container h-[1114px]  '>
            <div className=' h-[300px]   flex flex-col items-center justify-center text-center  '>
                <button className='w-[97px] h-[29px] text-[14px] rounded-[24px] bg-violet button text-white'>Contact Us</button>
                <h3 className='text-[52px] font-[500]'>Get in Touch with Us</h3>
                <p className='text-[17px] font-[400] text-[#808897] '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
            </div>
            <div className=" w-[700px] h-[666px] mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <form className="w-[620px] h-[494px] ">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" h-[100px]" >
                            <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Sarah"
                                className="w-full text-[16px] font-[400] rounded-lg border shadow shadow-[#09194821] px-4 border-[#12376914] py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4]"
                            />
                        </div>
                        <div className=" h-[100px]">
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
                    <div className=" h-[100px]  ">
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
                                className="w-full h-[250px] resize-y rounded-lg border text-[#A4ABB8] border-gray-300 px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-[#4236C4] shadow "
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
        </div>

    )
}

export default ContactForm