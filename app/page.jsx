import Home from '@/components/Home';

export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'biblio-app | Accueil',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
        title: 'biblio-app | Accueil',
        description:
            'Site web présentant les fonctionnalités de React et Next.js.',
        images: ['./react.webp'],
    },
};

export default function Page() {
    return (
        <main className="flex-1">
            <Home />
        </main>
    );
}
