'use client'
import React, { useState } from "react";

import bg_hero from '../../../public/images/bg-hero.svg'
import { useTranslations } from "next-intl";
const ContactForm = () => {
    const t = useTranslations()
    const [text, setText] = useState("");
    return (
        <div data-aos="zoom-in-down" className='container md:h-[1114px] h-[1450px] '>
        <div className='h-[300px] flex flex-col items-center justify-center text-center'>
            <button className='w-[97px] h-auto text-[14px] rounded-[24px] bg-violet button text-white'>
                {t("contact_us_button")}
            </button>
            <h3 className='md:text-[52px] text-[48px] font-[500]'>
                {t("get_in_touch_heading")}
            </h3>
            <p className='md:text-[17px] text-[16px] font-[400] text-[#808897] '>
                {t("contact_description")}
            </p>
        </div>
        <div className="md:w-[700px] md:h-[666px] w-[348px] h-[707px] mb-10 mx-auto p-6 bg-white rounded-xl border-gray-00 shadow-sm">
            <form className="md:w-[620px] md:h-[494px] w-[300px] h-[583px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:h-[100px] h-[85px]">
                        <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                            {t("first_name_label")}
                        </label>
                        <input
                            type="text"
                            placeholder={t("first_name_placeholder")}
                            className="w-full text-[16px] font-[400] rounded-lg border shadow shadow-[#09194821] px-4 border-[#12376914] py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4]"
                        />
                    </div>
                    <div className="md:h-[100px] h-[85px]">
                        <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                            {t("last_name_label")}
                        </label>
                        <input
                            type="text"
                            placeholder={t("last_name_placeholder")}
                            className="w-full text-[16px] font-[400] rounded-lg border shadow px-4 border-[#12376914] py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4]"
                        />
                    </div>
                </div>

                {/* Company Name */}
                <div className="md:h-[100px] h-[85px]">
                    <label className="block text-[14px] font-[500] text-[#0D0D12] mb-1">
                        {t("company_name_label")}
                    </label>
                    <input
                        type="text"
                        placeholder={t("company_name_placeholder")}
                        className="w-full text-[16px] font-[400] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4236C4] shadow"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-[14px] font-[500] text-[#0D0D12] my-2">
                        {t("message_label")}
                    </label>
                </div>
                <div className="relative w-full">
                    <textarea
                        maxLength={200}
                        rows={4}
                        placeholder={t("message_placeholder")}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full h-[221px] md:h-[250px] resize-y rounded-lg border text-[#A4ABB8] border-gray-300 px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-[#4236C4] shadow"
                    />
                    <span className="absolute bottom-2 left-4 text-[12px] text-[#A4ABB8] select-none">
                        {text.length}/200
                    </span>
                </div>

                <p className="text-[14px] font-[400] text-[#808897] mt-4 mb-4 ">
                    {t("message_hint")}
                </p>

                <button
                    type="submit"
                    className="w-full text-[16px] font-[500] bg-violet hover:bg-[#7d82df] text-white py-3 rounded-lg transition"
                >
                    {t("submit_button")}
                </button>
            </form>
        </div>
        <div
            style={{
                backgroundImage: `url(${bg_hero.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="xl:hidden text-white"
        >
            <div id="contacts" className="py-6 max-h-[374px] bg-[#4236C4] rounded-[24px] px-4 container button shadow-xl shadow-[#00000030] backdrop-blur-sm">
                <h4 className="text-[43px] font-[500] leading-12 drop-shadow-md">
                    {t("ready_to_create_heading")}
                </h4>
                <p className="mt-2 mb-4 text-[16px] text-[#EDEDED] leading-6">
                    {t("ready_to_achieve_description")}
                </p>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                    <button className="w-full mx-2 h-[52px] rounded-[12px] bg-white/10 text-white text-[16px] font-[500] active:bg-white active:text-black transition-all duration-300">
                        {t("see_our_work_button")}
                    </button>
                    <button className="w-full mx-2 h-[52px] rounded-[12px] bg-white/10 text-white text-[16px] font-[500] active:bg-white active:text-black transition-all duration-300">
                        {t("get_in_touch_button")}
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default ContactForm;