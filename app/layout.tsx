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
  title: 'Antalya Vision Clinic | ZEISS Smart Lens & Laser Eye Surgery | Nova Group',
  description: 'Doctor-Supervised Eye Surgery in Antalya. ZEISS Trifocal Smart Lens, No-Touch Laser & Blepharoplasty. All-inclusive packages with 5-star beachfront hotel, VIP Mercedes Vito transfer, and European Board Certified surgeons at 70% less cost. £0 upfront deposit — pay at clinic.',
  keywords: 'eye surgery antalya, smart lens antalya, trifocal lens replacement antalya, lasik turkey, blepharoplasty antalya, zeiss eye surgery turkey, medical tourism antalya',
  authors: [{ name: 'Antalya Vision Clinic' }],
  metadataBase: new URL('https://novaeye.vercel.app'),
  alternates: {
    canonical: 'https://novaeye.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://novaeye.vercel.app',
    title: 'Antalya Vision Clinic | ZEISS Smart Lens & Laser Eye Surgery',
    description: 'All-inclusive ZEISS Smart Lens & Laser Eye Surgery in Antalya with 5-star hotel and VIP Mercedes transfer. £0 upfront deposit.',
    images: [{ url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Vision Clinic | ZEISS Smart Lens & Laser Eye Surgery',
    description: 'All-inclusive ZEISS Smart Lens & Laser Eye Surgery in Antalya. £0 deposit — pay at clinic.',
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
    name: 'Antalya Vision Clinic',
    url: 'https://novaeye.vercel.app',
    description: 'Premium medical tourism and ZEISS eye surgery coordination in Antalya, Turkey',
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
