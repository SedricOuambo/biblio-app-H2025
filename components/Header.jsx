'use client';
import Image from 'next/image';
import logo from '@/public/img/react.webp';
import NavBar from './NavBar';
import Link from 'next/link';

import { IoSunny } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';

//NEW
import i18next from 'i18next';

import { useMyContext } from '@/provider/MyContextProvider';
import { IoMdMenu } from 'react-icons/io';

export default function Header() {
    const { theme, toggleTheme } = useMyContext();
    return (
        <header className="bg-primary text-white p-4">
            <nav className="flex justify-center items-center">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo React"
                        width={50}
                        className="cursor-pointer"
                    />
                </Link>
                <IoMdMenu className="md:hidden" />
                <NavBar />
                <button className="ml-auto text-2xl" onClick={toggleTheme}>
                    {theme === 'light' ? <IoMdMoon /> : <IoSunny />}
                </button>

                <select
                    onChange={(e) => i18next.changeLanguage(e.target.value)}
                    defaultValue={i18next.language}
                    className="text-black"
                >
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                    <option value="sp">SP</option>
                </select>
            </nav>
        </header>
    );
}
