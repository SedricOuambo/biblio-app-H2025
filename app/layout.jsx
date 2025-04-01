'use client';

import MyContextProvider from '@/provider/MyContextProvider';
import Body from '@/components/Body';
import { appWithTranslation } from 'next-i18next';
import i18n from '@/i18next';

import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }) {
    return (
        <html lang={i18n.language}>
            <MyContextProvider>
                <Body>{children}</Body>
            </MyContextProvider>
        </html>
    );
}

export default appWithTranslation(RootLayout);
