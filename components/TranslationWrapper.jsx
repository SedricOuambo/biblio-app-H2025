'use client';
import { appWithTranslation } from 'next-i18next';
import Body from '@/components/Body'; // Le composant Body qui sera utilisé dans le layout

function TranslationWrapper({ children }) {
    return <Body>{children}</Body>;
}

// Appliquez la traduction uniquement ici
export default appWithTranslation(TranslationWrapper);
