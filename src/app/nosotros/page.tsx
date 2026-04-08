'use client'

import Link from 'next/link'
import RevealOnScroll from '../components/RevealOnScroll'

const values = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    title: 'Transparencia Radical',
    desc: 'Hablamos claro y sin tecnicismos innecesarios. Te damos visibilidad total sobre cada proceso e implementación para que siempre tengas el control absoluto de tu tecnología.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Sinergia Estratégica',
    desc: 'No somos un proveedor externo, somos tu brazo ejecutor. Nos integramos en el ADN de tu negocio para que la IA trabaje exactamente como tu visión lo requiere.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Resultados de Impacto',
    desc: 'Diseñamos soluciones orientadas a métricas, no a modas. Cada línea de código y cada automatización tiene un propósito: optimizar tu tiempo y maximizar tu rentabilidad.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Integridad Técnica',
    desc: 'Cuidamos tu negocio como si fuera el nuestro. Priorizamos la seguridad de tus datos y la escalabilidad de tus sistemas, garantizando una base tecnológica sólida.',
  },
]

const team = [
  { initials: 'SU', name: 'Sergio Urcullo M.', role: 'Co-Fundador & Automation Director', desc: 'Diseña e implementa páginas web, automatizaciones y soluciones de IA personalizadas para optimizar procesos de negocio.' },
  { initials: 'SA', name: 'Samuel Aguilera S.', role: 'Co-Fundador & Growth Director', desc: 'Lidera la estrategia de crecimiento, marca y comunicación. Experto en UX y marketing digital enfocado a conversiones.' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span className="text-on-surface-variant/40">›</span>
              <span className="text-white">Nosotros</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight max-w-3xl">
              Agencia de Diseño Web e IA en Santa Cruz, Bolivia
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              En OnIA ayudamos a empresas en Santa Cruz y toda Bolivia a crecer digitalmente con diseño web profesional, automatización con inteligencia artificial y estrategia digital a medida.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Nuestra Historia en Santa Cruz, Bolivia</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                OnIA nació en Santa Cruz con el objetivo de ser la agencia de referencia para la digitalización de negocios en Bolivia. Ayudamos a empresas de todo el país a crecer digitalmente mediante <strong className="text-white font-medium">diseño web profesional</strong>, <strong className="text-white font-medium">automatización con IA</strong> y sistemas escalables adaptados a cada sector.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Trabajamos con negocios en Santa Cruz, La Paz, Cochabamba y otras ciudades para impulsar su presencia digital con resultados reales y medibles.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">Nuestros Valores</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i + 1}>
                <div className="glass-card rounded-2xl p-8 group hover:bg-surface-container-high/80 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black">Conoce al Equipo</h2>
              <p className="mt-4 text-on-surface-variant max-w-md mx-auto">Un equipo enfocado en construir soluciones prácticas, modernas y útiles para cada cliente.</p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <RevealOnScroll key={m.name} delay={i + 1}>
                <div className="glass-card rounded-2xl p-8 text-center group hover:bg-surface-container-high/80 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-accent-dark text-2xl font-black mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    {m.initials}
                  </div>
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold mt-1 block">{m.role}</span>
                  <p className="text-sm text-on-surface-variant mt-4 leading-relaxed">{m.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Stats */}
          <RevealOnScroll delay={3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {[
                { n: '5', l: 'Proyectos Entregados' },
                { n: '99%', l: 'Satisfacción del Cliente' },
                { n: '+150', l: 'Procesos Automatizados' },
                { n: '2', l: 'Miembros del Equipo' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black gradient-text">{s.n}</div>
                  <div className="text-xs text-on-surface-variant mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-black">¿Quieres unirte a nuestro camino?</h2>
            <p className="mt-4 text-on-surface-variant max-w-lg mx-auto">
              Siempre estamos buscando personas talentosas y proyectos emocionantes.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl text-base font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]">
              Contáctanos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
