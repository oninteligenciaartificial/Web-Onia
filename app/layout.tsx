import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'OnIA | Diseño Web y Automatización con IA en Santa Cruz, Bolivia',
    template: '%s | OnIA Agency',
  },
  description: 'OnIA: diseño web profesional y automatización con inteligencia artificial para empresas en Santa Cruz y toda Bolivia. Más imagen, menos trabajo manual, más ventas.',
  keywords: 'diseño web Santa Cruz Bolivia, páginas web para negocios Bolivia, agencia de inteligencia artificial Santa Cruz, automatización con IA Bolivia',
  metadataBase: new URL('https://onia.com.bo'),
  openGraph: {
    type: 'website',
    locale: 'es_BO',
    url: 'https://onia.com.bo',
    siteName: 'OnIA Agency',
    title: 'OnIA | Diseño Web y Automatización con IA en Bolivia',
    description: 'Impulsamos negocios con páginas web profesionales, automatización con IA y soluciones digitales en Santa Cruz y toda Bolivia.',
    images: [{ url: '/img/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnIA | Diseño Web y Automatización con IA en Bolivia',
    description: 'Páginas web profesionales y automatización con IA para negocios en Santa Cruz y Bolivia.',
    images: ['/img/og-image.png'],
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-surface text-on-surface antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
