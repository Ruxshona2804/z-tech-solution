'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logofooter from '../../../public/images/footer/logofooter.svg';
import xbutton from '../../../public/images/footer/xbutton.svg';
import linkedin from '../../../public/images/footer/linkedin.svg';
import instagram from '../../../public/images/footer/instagram.svg';
import english from '../../../public/images/languages/english.png';
import russia from '../../../public/images/languages/russia.png';
import uzbek from '../../../public/images/languages/uzbekistan.png';
import Link from 'next/link';
import LangSwitch from './LangSwitch';
import { useTranslations } from 'next-intl';

const Footer = () => {
 const t = useTranslations()
    const [open, setOpen] = useState(false);

    return (
        <div className='relative bg-[#242B35]'>
        <footer className="container text-[#A8B3C4] xl:h-[950px] pt-16">
            <div className="h-[464px]">
                <div className="xl:flex justify-between items-start mb-5 gap-8">
                    <div>
                        <Image src={logofooter} alt="Z Tech Solutions" width={200} height={36} />
                        <p className="mt-2 text-[16px] font-[400] w-[350px] xl:w-full tracking-[0.3]">
                            {t("footer_description")}
                        </p>
                    </div>
                    <LangSwitch />
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 text-sm md:text-base">
                    <div>
                        <h4 className="text-white font-semibold mb-3">{t("sections_heading")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:underline">{t("about_us_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("our_service_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("our_work_link")}</Link></li>
                            <li><Link href="/projects" className="hover:underline">{t("portfolio_link")}</Link></li>
                            <li><Link href="/contact" className="hover:underline">{t("contact_us_link")}</Link></li>
                        </ul>
                    </div>

                    <div className='xl:block hidden'>
                        <h4 className="text-white font-semibold mb-3">{t("about_heading")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">{t("about_us_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("our_mission_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("our_process_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("our_team_link")}</Link></li>
                        </ul>
                    </div>

                    <div className='xl:block hidden'>
                        <h4 className="text-white font-semibold mb-3">{t("portfolio_section_heading")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">{t("project_1_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("project_2_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("project_3_link")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">{t("support_heading")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">{t("get_help_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("faq_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("careers_link")}</Link></li>
                            <li><Link href="/" className="hover:underline">{t("customer_support_link")}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#A8B3C4] pt-2 flex flex-col xl:flex-row justify-between items-center gap-4 text-sm">
                    <p>{t("copyright_text")}</p>
                    <div className="flex items-center gap-3">
                        <Image src={xbutton} alt="X" width={40} height={40} />
                        <Image src={linkedin} alt="LinkedIn" width={40} height={40} />
                        <Image src={instagram} alt="Instagram" width={40} height={40} />
                    </div>
                </div>
            </div>
        </footer>
        <div className="absolute md:hidden bottom-0 left-0 w-full h-[90px] bg-gradient-to-t from-white to-transparent"></div>
    </div>
);
};

export default Footer;
