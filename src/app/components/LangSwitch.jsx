'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { useLocale } from 'next-intl'; 



import russiaFlag from '../../../public/images/languages/russia.png';
import uzbekFlag from '../../../public/images/languages/uzbekistan.png';

const LangSwitch = () => {
    const router = useRouter();
    const currentLocale = useLocale(); 

    const languages = [
        { name: 'Uzbek', code: 'uz', flag: uzbekFlag },
        { name: 'Russian', code: 'ru', flag: russiaFlag },
        
    ];

    
    const initialSelected = languages.find(lang => lang.code === currentLocale) || languages[0];
    const [selected, setSelected] = useState(initialSelected);
    const [open, setOpen] = useState(false);

    const handleLanguageChange = (code) => {
        
        router.push(`/${code}`);
        setSelected(languages.find(lang => lang.code === code));
        setOpen(false);
    };

    return (
        <div className="relative mt-6 md:mt-0 w-[128px] h-[40px] ">
          
            <div
                onClick={() => setOpen(!open)}
                className="bg-white w-full h-full rounded-[8px] text-black px-2 flex items-center justify-between cursor-pointer font-semibold shadow-md"
            >
                <div className="inline-flex items-center gap-2"> 
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
                            onClick={() => handleLanguageChange(lang.code)}
                            className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        >
                            <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                            <span>{lang.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LangSwitch;
