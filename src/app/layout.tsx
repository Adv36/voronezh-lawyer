import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ClientBody from './ClientBody';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

// SEO metadata
export const metadata: Metadata = {
  title: 'Воронежадвокат.рф | Адвокат по уголовным делам Рипинский А.А.',
  description: 'Адвокат по уголовным делам в Воронеже - Рипинский Анатолий Анатольевич. Более 28 лет опыта, защита физических лиц и бизнеса, консультации 24/7.',
  keywords: 'адвокат, Воронеж, уголовные дела, защита в суде, адвокат по уголовным делам, юридическая помощь, Рипинский',
  alternates: {
    canonical: 'https://воронежадвокат.рф',
  },
  openGraph: {
    title: 'Адвокат по уголовным делам в Воронеже - Рипинский А.А.',
    description: 'Профессиональная юридическая помощь по уголовным делам. Опыт работы более 28 лет. Консультации 24/7.',
    url: 'https://воронежадвокат.рф',
    siteName: 'Воронежадвокат.рф',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://ext.same-assets.com/1334220929/23094286.jpeg',
        width: 1200,
        height: 630,
        alt: 'Адвокат Рипинский Анатолий Анатольевич',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: 'Рипинский Анатолий Анатольевич',
    },
  ],
  creator: 'Рипинский Анатолий Анатольевич',
  publisher: 'Воронежадвокат.рф',
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
