import Documents from '@/components/Documents';
export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'biblio-app | Documents',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
        title: 'biblio-app | Documents',
        description:
            'Site web présentant les fonctionnalités de React et Next.js.',
        images: ['./react.webp'],
    },
};
export default function Page() {
    return <Documents />;
}
