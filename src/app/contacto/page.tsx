'use client'

import Link from 'next/link'
import RevealOnScroll from '../components/RevealOnScroll'

const contactInfo = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    title: 'Email',
    value: 'oninteligenciaartificial@gmail.com',
    href: 'mailto:oninteligenciaartificial@gmail.com',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    title: 'Teléfono',
    value: '+591 75470140',
    href: 'tel:+59175470140',
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
]

export default function ContactoPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span className="text-on-surface-variant/40">›</span>
              <span className="text-white">Contacto</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight max-w-3xl">
              Contacta a OnIA — Diseño Web e IA en Santa Cruz, Bolivia
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Agenda una consulta gratuita con nuestro equipo en Santa Cruz. Descubre cómo la <strong className="text-white font-medium">automatización con IA</strong> y el <strong className="text-white font-medium">diseño web profesional</strong> pueden transformar tu negocio en Bolivia.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <RevealOnScroll>
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Información de Contacto</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-3">Soluciones Digitales para Empresas</h2>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                Estamos listos para ayudarte con el <strong className="text-white font-medium">desarrollo web profesional</strong> y sistemas inteligentes que aceleren tu crecimiento.
              </p>

              <div className="space-y-5">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
                        >
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
              <form
                className="glass-card rounded-2xl p-8 sm:p-10 space-y-6"
                onSubmit={e => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const data = new FormData(form)
                  const name = data.get('firstName')
                  const last = data.get('lastName')
                  const email = data.get('email')
                  const service = data.get('service')
                  const msg = data.get('message')
                  const text = `Hola OnIA! Soy ${name} ${last} (${email}). Interesado en: ${service || 'No especificado'}. Mensaje: ${msg}`
                  window.open(`https://wa.me/59175470140?text=${encodeURIComponent(text)}`, '_blank')
                }}
              >
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
                    <option value="Web Esencial" className="bg-surface-container">Web Esencial</option>
                    <option value="Web Profesional" className="bg-surface-container">Web Profesional</option>
                    <option value="Web Premium" className="bg-surface-container">Web Premium</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-on-surface-variant/70 font-semibold mb-2">Mensaje *</label>
                  <textarea id="message" name="message" rows={4} placeholder="Cuéntanos sobre tu proyecto y objetivos..." required
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-white placeholder:text-on-surface-variant/30 focus:border-primary focus:outline-none transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl font-semibold gradient-primary text-accent-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] text-base">
                  Enviar Mensaje
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
