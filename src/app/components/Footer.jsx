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
const languages = [
    { code: 'en', name: 'English', flag: english },
    { code: 'uz', name: 'Uzbek', flag: uzbek },
    { code: 'ru', name: 'Russian', flag: russia },
];
const Footer = () => {
    const [selected, setSelected] = useState(languages[0]);
    const [open, setOpen] = useState(false);

    return (
    <div className='bg-[#242B35]'>
            <footer data-aos="fade-up"
            data-aos-duration="3000" className="  relative text-[#A8B3C4] md:h-[950px] h-[600px] py-16">
            <div className=" container h-[464px] space-y-12">
                {/* Top section */}
                <div className="md:flex justify-between items-start gap-8">
                    <div>
                        <Image src={logofooter} alt="Z Tech Solutions" width={200} height={36} />
                        <p className="mt-2 text-[16px] font-[400] w-[358px] md:w-full tracking-[0.3]">
                            Partner with us to craft innovative strategies and design solutions that drive measurable results and elevate your brand to new heights.
                        </p>
                    </div>

                    <div className="relative  mt-6 md:mt-0 w-[128px] h-[40px]">
                        <div
                            onClick={() => setOpen(!open)}
                            className="bg-white w-full h-full rounded-[8px] text-black px-2 flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <Image src={selected.flag} alt={selected.name} width={20} height={20} />
                                <span>{selected.name}</span>
                            </div>
                            <span>▾</span>
                        </div>

                        {open && (
                            <div className="absolute top-[42px] left-0 bg-white shadow-md rounded-md w-full z-10">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        onClick={() => {
                                            setSelected(lang);
                                            setOpen(false);
                                        }}
                                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                    >
                                        <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                                        <span>{lang.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>



                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
                    <div>
                        <h4 className="text-white font-semibold mb-3">Sections</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link href="/services" className="hover:underline">Our Service</Link></li>
                            <li><Link href="/our-work" className="hover:underline">Our Work</Link></li>
                            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className='md:block hidden'>
                        <h4 className="text-white  font-semibold mb-3">About</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link href="/mission" className="hover:underline">Our Mission</Link></li>
                            <li><Link href="/process" className="hover:underline">Our Process</Link></li>
                            <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                        </ul>
                    </div>

                    <div className='md:block hidden'>
                        <h4 className="text-white  font-semibold mb-3">Portfolio</h4>
                        <ul className="space-y-2">
                            <li><Link href="/portfolio/project-1" className="hover:underline">Project 1</Link></li>
                            <li><Link href="/portfolio/project-2" className="hover:underline">Project 2</Link></li>
                            <li><Link href="/portfolio/project-3" className="hover:underline">Project 3</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Support</h4>
                        <ul className="space-y-2">
                            <li><Link href="/support" className="hover:underline">Get Help</Link></li>
                            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                            <li><Link href="/customer-support" className="hover:underline">Customer Support</Link></li>
                        </ul>
                    </div>
                </div>


                {/* Bottom section */}
                <div className="border-t border-[#A8B3C4] pt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© Z Tech Solutions 2025, All Rights Reserved</p>
                    <div className="flex items-center gap-3">
                        <Image src={xbutton} alt="X" width={40} height={40} />
                        <Image src={linkedin} alt="LinkedIn" width={40} height={40} />
                        <Image src={instagram} alt="Instagram" width={40} height={40} />
                    </div>
                </div>
            </div>
            <div className="absolute md:hidden bottom-0 left-0 w-full h-[90px] bg-gradient-to-t from-white to-transparent"></div>

        </footer>
    </div>
    );
};

export default Footer;
