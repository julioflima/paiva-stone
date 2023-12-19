import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import '@/styles/chrome-bug.scss';
import '@/styles/main.scss';
import { PropsWithChildren } from 'react';
import SupabaseProvider from './supabase-provider';

const meta = {
  title: 'Aposta GPT',
  description: 'Inteligência Artifical dos Esportes',
  cardImage: '/images/logo_name.svg',
  robots: 'follow, index',
  favicon: '/images/logo_mini.svg',
  url: 'https://apostagpt.com',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <div className="bg-black loading">
      <SupabaseProvider>
        <Navbar />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          {children}
        </main>
        <Footer />
      </SupabaseProvider>
    </div>
  );
}
