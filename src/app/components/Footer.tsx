import Link from 'next/link'

const footerLinks = {
  servicios: [
    { label: 'Web Esencial', href: '/servicios#esencial' },
    { label: 'Web Profesional', href: '/servicios#profesional' },
    { label: 'Web Premium', href: '/servicios#premium' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos de Servicio', href: '/terminos' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tight">
              On<span className="text-primary">IA</span>
            </Link>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
              Automatización, web y crecimiento
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.tiktok.com/@onia..bo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/onia.bo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a
                href="mailto:oninteligenciaartificial@gmail.com"
                className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-on-surface-variant/60 font-semibold mb-4">Servicios</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.servicios.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-on-surface-variant hover:text-white transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-on-surface-variant/60 font-semibold mb-4">Empresa</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.empresa.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-on-surface-variant hover:text-white transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-on-surface-variant/60 font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.legal.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-on-surface-variant hover:text-white transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-on-surface-variant/60 font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+59175470140" className="text-sm text-on-surface-variant hover:text-white transition-colors duration-300">
                +591 75470140
              </a>
              <a href="mailto:oninteligenciaartificial@gmail.com" className="text-sm text-on-surface-variant hover:text-white transition-colors duration-300">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant/50">
            &copy; 2026 OnIA Agency. Todos los derechos reservados.
          </p>
          <p className="text-xs text-on-surface-variant/30">
            Santa Cruz de la Sierra, Bolivia
          </p>
        </div>
      </div>
    </footer>
  )
}
