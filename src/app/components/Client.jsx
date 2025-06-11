import React from 'react'
import emily from '../../../public/images/clients/emily.svg'
import james from '../../../public/images/clients/james.svg'
import samantha from '../../../public/images/clients/samantha.svg'
import michael from '../../../public/images/clients/michael.svg'
import rachel from '../../../public/images/clients/rachel.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Client = () => {
    const t = useTranslations()
    return (
        <div id='rates' className='container xl:h-[930px] h-[1988px]'>
            <div className='h-[300px] flex flex-col items-center justify-center text-center'>
                <button className='text-sm my-4 button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3'>
                    {t("our_rates_button")}
                </button>
                <h3 className='text-[52px] font-[500]'>
                    {t("our_client_experiences_heading")}
                </h3>
                <p className='text-[17px] font-[400] text-[#808897]'>
                    {t("client_experiences_description")}
                </p>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 items-center justify-center gap-3'>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card xl:max-h-[240px] max-h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='xl:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("emily_rodriguez_testimonial")}
                    </p>
                    <div className='border-t border-[#DFE1E6] xl:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={emily} alt='emily' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("emily_rodriguez_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("emily_rodriguez_title")}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card md:h-[240px] h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='md:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("james_tuchel_testimonial")}
                    </p>
                    <div className='border-t border-[#DFE1E6] md:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={james} alt='james' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("james_tuchel_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("james_tuchel_title")}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card md:h-[240px] h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='md:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("samantha_laurent_testimonial")}
                    </p>
                    <div className='border-t border-[#DFE1E6] md:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={samantha} alt='samantha' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("samantha_laurent_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("samantha_laurent_title")}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card md:h-[240px] h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='md:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("michael_de_guzman_testimonial")}
                    </p>
                    <div className='border-t border-[#DFE1E6] md:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={michael} alt='michael' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("michael_de_guzman_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("michael_de_guzman_title")}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card md:h-[240px] h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='md:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("rachel_venyya_testimonial_1")}
                    </p>
                    <div className='border-t border-[#DFE1E6] md:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={rachel} alt='rachel' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("rachel_venyya_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("rachel_venyya_title")}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card md:h-[240px] h-[258px] border border-[#E0E4EA] p-5 rounded-[12px]">
                    <p className='md:text-[19px] text-[18px] font-[500] mb-2 tracking-[0.2]'>
                        {t("rachel_venyya_testimonial_2")}
                    </p>
                    <div className='border-t border-[#DFE1E6] md:w-[400px] w-[300px] mx-auto mt-5'></div>
                    <div className='flex mt-2 pb-1 gap-3'>
                        <Image src={rachel} alt='rachel' width={45} height={45} />
                        <div>
                            <p className='text-[16px] font-[500]'>{t("rachel_venyya_name")}</p>
                            <p className='text-[14px] font-[400] text-[#808897]'>{t("rachel_venyya_title")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Client