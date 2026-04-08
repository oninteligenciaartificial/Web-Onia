'use client'

import Link from 'next/link'
import RevealOnScroll from './components/RevealOnScroll'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: 'Web Esencial — Landing Pages',
    desc: 'Páginas web modernas, limpias y profesionales para negocios que necesitan presencia digital sólida en Bolivia.',
    href: '/servicios#esencial',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Web Profesional — Páginas para Negocios',
    desc: 'Sitios web estratégicos para empresas en Bolivia que buscan elevar su imagen y convertir más visitas en clientes reales.',
    href: '/servicios#profesional',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
      </svg>
    ),
    title: 'Web Premium — Desarrollo Avanzado',
    desc: 'Experiencias web de alto nivel con animaciones, integraciones de IA y diseño sofisticado para marcas que quieren diferenciarse.',
    href: '/servicios#premium',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
      </svg>
    ),
    title: 'Chatbots y Agentes IA',
    desc: 'Soluciones conversacionales con inteligencia artificial para automatizar atención al cliente y soporte 24/7.',
    href: '#',
    comingSoon: true,
  },
]

const stats = [
  { number: '5', label: 'Proyectos Entregados' },
  { number: '99%', label: 'Satisfacción del Cliente' },
  { number: '+150', label: 'Procesos Automatizados' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary-light font-medium">
                Disponible para nuevos proyectos en Santa Cruz y Bolivia
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl text-balance">
              Diseño Web y Automatización con{' '}
              <span className="gradient-text">Inteligencia Artificial en Bolivia</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <p className="mt-7 text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Creamos páginas web profesionales y automatizamos procesos con IA para negocios en Santa Cruz y toda Bolivia. Más imagen, menos trabajo manual, más ventas.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={3}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contacto"
                className="group px-8 py-4 rounded-xl text-base font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
              >
                Agendar Consulta
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/servicios"
                className="px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Explorar Servicios
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={4}>
            <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/5">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="text-3xl sm:text-4xl font-black gradient-text">{s.number}</div>
                  <div className="text-sm text-on-surface-variant mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 sm:py-32 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Qué Hacemos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 max-w-2xl leading-tight">
              Diseño de páginas web profesionales en Bolivia
            </h2>
            <p className="mt-5 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Ofrecemos diseño de páginas web profesionales adaptadas a negocios en Santa Cruz y Bolivia, con tres niveles de servicio.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-5 mt-14">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i + 1}>
                <div className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:bg-surface-container-high/80 ${s.comingSoon ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}>
                  {s.comingSoon && (
                    <span className="absolute top-6 right-6 text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-md bg-white/10 text-on-surface-variant">
                      Próximamente
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{s.desc}</p>
                  {!s.comingSoon && (
                    <Link href={s.href} className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-primary-light transition-colors group-hover:gap-3">
                      Saber más
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / MISSION ===== */}
      <section className="py-24 sm:py-32" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Nuestra Misión</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4 leading-tight">
                Automatización con IA para empresas en Santa Cruz y Bolivia
              </h2>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                OnIA es la agencia de inteligencia artificial en Santa Cruz, Bolivia, especializada en <strong className="text-white font-medium">diseño web profesional</strong> y automatización de procesos con IA. Ayudamos a negocios a modernizarse digitalmente: mejor imagen, flujos de trabajo simplificados y más oportunidades de crecimiento.
              </p>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Unimos estrategia, tecnología y diseño para transformar ideas en sistemas que generen eficiencia y resultados reales. Cada solución que construimos está pensada para el contexto del mercado boliviano.
              </p>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                Conocer Más Sobre Nosotros
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="glass-card rounded-2xl p-8 sm:p-10">
                <p className="text-lg sm:text-xl font-medium italic text-on-surface-variant leading-relaxed mb-10">
                  &ldquo;Tecnología que entiende tu visión, acompaña tu crecimiento y trabaja a tu favor&rdquo;
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { n: '5', l: 'Proyectos Entregados' },
                    { n: '99%', l: 'Satisfacción del Cliente' },
                    { n: '+150', l: 'Procesos Automatizados' },
                    { n: '2', l: 'Miembros del Equipo' },
                  ].map(stat => (
                    <div key={stat.l} className="text-center">
                      <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.n}</div>
                      <div className="text-xs text-on-surface-variant mt-1.5">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section className="py-16 border-y border-white/5 bg-surface-container-low overflow-hidden" id="clients">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <RevealOnScroll>
            <p className="text-center text-sm text-on-surface-variant/60 uppercase tracking-widest font-medium">
              Confían en nosotros líderes de la industria
            </p>
          </RevealOnScroll>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {Array.from({ length: 16 }).map((_, i) => (
              <a
                key={i}
                href="https://tempohomes.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-12 text-2xl font-bold text-on-surface-variant/20 hover:text-on-surface-variant/40 transition-colors duration-300"
              >
                TempoHomes
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-24 sm:py-32" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <RevealOnScroll>
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Empezar</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4 leading-tight">
                ¿Listo para escalar tu negocio con IA en Bolivia?
              </h2>
              <p className="mt-6 text-on-surface-variant leading-relaxed">
                Contacta a nuestro equipo en Santa Cruz para una auditoría profesional de tus procesos actuales y descubre dónde la automatización con IA puede generar más valor para tu negocio. Sin compromisos.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                    title: 'Email',
                    value: 'oninteligenciaartificial@gmail.com',
                    href: 'mailto:oninteligenciaartificial@gmail.com',
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    title: 'Tiempo de Respuesta',
                    value: 'Dentro de 24 horas',
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                    title: 'Ubicación',
                    value: 'Santa Cruz de la Sierra, Bolivia',
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>,
                    title: 'WhatsApp',
                    value: '+591 75470140',
                    href: 'https://wa.me/59175470140',
                    external: true,
                  },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-on-surface-variant">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Right — Form */}
            <RevealOnScroll delay={2}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  return (
    <form className="glass-card rounded-2xl p-8 sm:p-10 space-y-6" onSubmit={e => {
      e.preventDefault()
      const form = e.currentTarget
      const data = new FormData(form)
      const name = data.get('firstName')
      const last = data.get('lastName')
      const email = data.get('email')
      const service = data.get('service')
      const msg = data.get('message')
      const text = `Hola OnIA! Soy ${name} ${last} (${email}). Servicio: ${service || 'No especificado'}. Mensaje: ${msg}`
      window.open(`https://wa.me/59175470140?text=${encodeURIComponent(text)}`, '_blank')
    }}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Nombre *</label>
          <input type="text" id="firstName" name="firstName" placeholder="Juan" required
            className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-white placeholder:text-on-surface-variant/30 focus:border-primary focus:outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Apellido *</label>
          <input type="text" id="lastName" name="lastName" placeholder="Pérez" required
            className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-white placeholder:text-on-surface-variant/30 focus:border-primary focus:outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Correo Electrónico *</label>
        <input type="email" id="email" name="email" placeholder="juan@empresa.com" required
          className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-white placeholder:text-on-surface-variant/30 focus:border-primary focus:outline-none transition-colors" />
      </div>
      <div>
        <label htmlFor="service" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Servicio de Interés</label>
        <select id="service" name="service"
          className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-on-surface-variant focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer">
          <option value="" className="bg-surface-container">Selecciona un servicio...</option>
          <option value="esencial" className="bg-surface-container">Web Esencial</option>
          <option value="profesional" className="bg-surface-container">Web Profesional</option>
          <option value="premium" className="bg-surface-container">Web Premium</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Mensaje *</label>
        <textarea id="message" name="message" rows={4} placeholder="Cuéntanos sobre tu proyecto y objetivos..." required
          className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-white placeholder:text-on-surface-variant/30 focus:border-primary focus:outline-none transition-colors resize-none" />
      </div>
      <button type="submit"
        className="w-full py-4 rounded-xl font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]">
        Enviar Mensaje
      </button>
    </form>
  )
}
