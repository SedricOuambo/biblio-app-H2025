'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

//NEW
//importer le hook useTranslation pour traduire les textes
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    //NEW
    // Utiliser le hook useTranslation pour acceder à la fonction t
    const { t } = useTranslation('header');

    const routeur = useRouter();
    return (
        <ul className="hidden md:flex justify-center gap-x-8 flex-grow">
            <li>
                <Link href="/">{t('header.home')}</Link>
            </li>
            <li>
                <button onClick={() => routeur.push('/documents')}>
                    {t('header.documents')}
                </button>
            </li>
            <li>
                <Link href="/contact">{t('header.contact')}</Link>
            </li>
            <li>
                <Link href="/connexion">{t('header.login')}</Link>
            </li>
        </ul>
    );
}
