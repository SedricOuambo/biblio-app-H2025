import Contact from '@/components/Contact';
export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'biblio-app | Contact',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
        title: 'biblio-app | Contact',
        description:
            'Site web présentant les fonctionnalités de React et Next.js.',
        images: ['./react.webp'],
    },
};

export default function Page() {
    return <Contact />;
}
