import type { Metadata } from 'next'
import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'
import Nav from '@/components/layout/Nav'
import { pretendard } from '@/styles/fonts/fonts'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'NEXT JS SEO',
  description: 'NEXT JS SEO',
  openGraph: {
    title: 'recodelog',
    description: '블로그 만들기',
    type: 'website',
    url: 'https://recodelog.com',
    siteName: 'recodelog',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://recodelog.com/og/og.png', // open graph image url
        width: 800,
        height: 600,
        alt: '', // open graph image alt
      },
      // ... {} 여러개 추가 가능
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@recodelog',
    creator: '@recodelog',
    title: 'recodelog',
    description: '블로그 만들기',
    images: [
      {
        url: 'https://recodelog.com/og/og.png',
        width: 800,
        height: 600,
        alt: '', // open graph image alt
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-pretendard`}>
        <Providers>
          <Header />
          <main className="h-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
