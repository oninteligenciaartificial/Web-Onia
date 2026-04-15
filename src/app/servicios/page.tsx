'use client'

import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '../components/RevealOnScroll'

const SaasVisual = () => (
  <div className="w-full h-full bg-surface-container flex items-center justify-center p-6 relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
    <div className="relative z-10 w-full max-w-sm space-y-3">
      {/* Top bar */}
      <div className="glass-card rounded-xl p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2DB542" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-2 bg-white/10 rounded w-3/4" />
          <div className="h-2 bg-white/5 rounded w-1/2" />
        </div>
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>
      {/* Modules */}
      <div className="grid grid-cols-2 gap-3">
        {['CRM', 'Facturación', 'Inventario', 'Reportes'].map((mod, i) => (
          <div key={mod} className="glass-card rounded-xl p-3 flex flex-col gap-2">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${i % 2 === 0 ? 'bg-primary/20' : 'bg-white/5'}`}>
              <div className={`w-3 h-3 rounded ${i % 2 === 0 ? 'bg-primary' : 'bg-white/30'}`} />
            </div>
            <span className="text-[11px] font-semibold text-on-surface-variant">{mod}</span>
            <div className="h-1 bg-white/10 rounded w-full" />
          </div>
        ))}
      </div>
      {/* Status bar */}
      <div className="glass-card rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[11px] text-on-surface-variant">Sistema activo</span>
        </div>
        <span className="text-[11px] font-bold text-primary">Tu marca</span>
      </div>
    </div>
  </div>
)

const services = [
  {
    id: 'esencial',
    number: '01',
    label: 'Servicio Esencial',
    title: 'Diseño Web Esencial',
    desc: 'Construimos páginas web modernas, limpias y funcionales para marcas que necesitan una presencia digital clara, profesional y bien presentada. Es la opción ideal para empezar con una base sólida y transmitir confianza desde el primer vistazo.',
    features: [
      'Diseño visual cuidado y profesional',
      'Adaptación para móvil y escritorio',
      'Estructura clara para presentar tu negocio',
      'Carga optimizada y navegación simple',
      'Formularios de contacto funcionales',
    ],
    tags: ['Landing Pages', 'Marca Personal', 'Servicios', 'Catálogo básico'],
    image: '/web-esencial.jpg',
  },
  {
    id: 'profesional',
    number: '02',
    label: 'Servicio Profesional',
    title: 'Páginas Web para Negocios en Bolivia',
    desc: 'Desarrollamos sitios web más completos y estratégicos para negocios que buscan elevar su imagen, comunicar mejor su propuesta y convertir más visitas en oportunidades reales.',
    features: [
      'Diseño UI/UX moderno y estratégico',
      'Responsive en móvil, tablet y desktop',
      'Estructura pensada para conversión',
      'Optimización de velocidad y SEO base',
      'Integraciones inteligentes según el proyecto',
    ],
    tags: ['Empresas', 'Portafolios', 'Negocios de servicios', 'Web corporativa'],
    image: '/web-profesional.jpg',
    reverse: true,
  },
  {
    id: 'premium',
    number: '03',
    label: 'Servicio Premium',
    title: 'Desarrollo Web Premium con IA',
    desc: 'Creamos experiencias web de alto nivel para marcas que quieren diferenciarse con una presencia digital más potente, sofisticada y preparada para crecer.',
    features: [
      'Diseño premium con enfoque estratégico',
      'Experiencia fluida en todos los dispositivos',
      'Estructura escalable y optimizada para rendimiento',
      'Animaciones e interacciones de alto impacto',
      'Integración de automatizaciones y chatbots',
    ],
    tags: ['E-commerce', 'Apps Web', 'SaaS', 'Proyectos escalables'],
    image: '/web-premium.jpg',
  },
  {
    id: 'saas',
    number: '04',
    label: 'SaaS Personalizado',
    title: 'Software a la Medida de tu Negocio',
    desc: 'Desarrollamos plataformas SaaS completamente adaptadas a los procesos únicos de tu empresa. Desde sistemas de gestión internos hasta herramientas que puedes ofrecer como servicio a tus propios clientes.',
    features: [
      'Módulos 100% configurables a tu flujo de trabajo',
      'Panel de administración propio con tu marca',
      'Base de datos segura y escalable en la nube',
      'Acceso por roles: administrador, empleado, cliente',
      'Integraciones con WhatsApp, pagos y APIs externas',
      'Soporte continuo y actualizaciones incluidas',
    ],
    tags: ['Gestión interna', 'Facturación', 'CRM', 'Inventario', 'Reservas', 'Control de personal'],
    visual: SaasVisual,
    reverse: true,
  },
]

const processSteps = [
  { n: '1', title: 'Nos conocemos', desc: 'Nos sentamos a charlar para entender bien qué necesitas, qué te frena hoy y a dónde quieres llegar con tu negocio.' },
  { n: '2', title: 'Armamos el plan', desc: 'A partir de lo que hablamos, trazamos una ruta clara y a tu medida, combinando buen diseño y tecnología práctica.' },
  { n: '3', title: 'Manos a la obra', desc: 'Construimos lo que necesitas manteniéndote siempre al tanto. Verás los avances poco a poco para asegurar que todo quede genial.' },
  { n: '4', title: 'Despegamos', desc: '¡Salimos al mundo! Te entregamos el proyecto listo para usar y seguimos cerca por si necesitas cualquier ajuste.' },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span className="text-on-surface-variant/40">›</span>
              <span className="text-white">Servicios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight max-w-3xl">
              Diseño de Páginas Web Profesionales en Santa Cruz y Bolivia
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Ofrecemos diseño de páginas web profesionales para negocios en Santa Cruz y toda Bolivia. Tres planes adaptados a cada etapa de tu empresa.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((s) => (
            <RevealOnScroll key={s.id} delay={1}>
              <div id={s.id} className={`grid lg:grid-cols-2 gap-12 items-center ${s.reverse ? 'lg:direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container-high group ${s.reverse ? 'lg:order-2' : ''}`}>
                  {'visual' in s && s.visual ? (
                    <s.visual />
                  ) : (
                    <>
                      <Image
                        src={(s as {image: string}).image}
                        alt={`${s.title} — diseño web para negocios en Bolivia`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className={s.reverse ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-on-surface-variant/10">{s.number}</span>
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold px-3 py-1 rounded-full bg-primary/10">{s.label}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{s.desc}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2DB542" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="text-sm text-on-surface-variant">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contacto" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]">
                    Solicitar por WhatsApp
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* Coming Soon Service */}
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 items-center opacity-50 pointer-events-none">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container-high lg:order-2">
                <Image src="/chatbots.jpg" alt="Chatbots y IA para empresas — próximamente" fill className="object-cover grayscale" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
              <div className="lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-black text-on-surface-variant/10">04</span>
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full bg-white/10 text-on-surface-variant">Próximamente</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Automatización con IA para Empresas</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Estamos desarrollando soluciones conversacionales avanzadas para automatizar la atención al cliente, captación de leads y soporte 24/7.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Paso a Paso</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4">¿Cómo trabajamos juntos?</h2>
              <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">Hacemos las cosas simples, directas y sin misterios.</p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.n} delay={i + 1}>
                <div className="glass-card rounded-2xl p-7 text-center group hover:bg-surface-container-high/80 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-accent-dark font-bold text-lg mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="glass-card rounded-3xl p-10 sm:p-16 text-center">
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Da el Siguiente Paso</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4">¿Listo para elevar tu presencia digital?</h2>
              <p className="mt-4 text-on-surface-variant max-w-lg mx-auto">
                Cada proyecto comienza con una conversación. Cuéntanos tu visión y te mostraremos la mejor opción para tu negocio.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link href="/contacto" className="px-8 py-4 rounded-xl text-base font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">
                  Agendar Consulta Gratuita
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href="mailto:oninteligenciaartificial@gmail.com" className="px-8 py-4 rounded-xl text-base font-semibold border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                  Escribir por Email
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
