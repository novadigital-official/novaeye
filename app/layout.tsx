import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/lib/context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Premium Eye Surgery Turkey | ZEISS Smart Lens & Laser | MedTurkey Elite',
  description: 'Premium Refractive & Eye Surgery in Turkey. ZEISS Trifocal Smart Lens, No-Touch Laser & Blepharoplasty. All-inclusive packages with 5-star hotel, VIP Mercedes transfer, and European Board Certified surgeons at 70% less cost. £0 deposit — pay at clinic.',
  keywords: 'eye surgery turkey, smart lens turkey, trifocal lens replacement, lasik turkey, blepharoplasty turkey, zeiss eye surgery, medical tourism turkey',
  authors: [{ name: 'MedTurkey Elite' }],
  metadataBase: new URL('https://medturkey-elite.vercel.app'),
  alternates: {
    canonical: 'https://medturkey-elite.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://medturkey-elite.vercel.app',
    title: 'Premium Eye Surgery Turkey | MedTurkey Elite',
    description: 'All-inclusive ZEISS Smart Lens & Laser Eye Surgery in Turkey with 5-star hotel and VIP Mercedes transfer. £0 upfront deposit.',
    images: [{ url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Eye Surgery Turkey | MedTurkey Elite',
    description: 'All-inclusive ZEISS Smart Lens & Laser Eye Surgery in Turkey. £0 deposit — pay at clinic.',
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'MedTurkey Elite',
    url: 'https://medturkey-elite.vercel.app',
    description: 'Premium medical tourism and ZEISS eye surgery coordination in Turkey',
    medicalSpecialty: ['Ophthalmology', 'PlasticSurgery'],
    priceRange: '££',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1700'
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-amber-400 selection:text-slate-950">
        <SiteProvider>
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
