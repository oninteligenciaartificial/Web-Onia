import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description: 'Términos y condiciones para el uso de los servicios de OnIA Agency.',
}

const sections = [
  {
    title: '1. Aceptación de Términos',
    content: 'Al acceder y utilizar el sitio web y servicios de OnIA, aceptas y te comprometes a cumplir con los términos y disposiciones de este acuerdo. Si no estás de acuerdo con estos términos, por favor no utilices nuestros servicios.',
  },
  {
    title: '2. Descripción de Servicios',
    content: 'OnIA provee servicios de consultoría de IA, diseño web, automatización, análisis de datos y desarrollo de IA personalizada. Los términos específicos de cada compromiso se detallarán en un Acuerdo de Trabajo (SOW) separado.',
  },
  {
    title: '3. Propiedad Intelectual',
    content: 'Todo el contenido en este sitio web es propiedad de OnIA Agency y está protegido por las leyes de propiedad intelectual.',
    list: ['Los entregables personalizados se convierten en propiedad del cliente tras el pago completo', 'OnIA retiene los derechos sobre metodologías generales y herramientas', 'La propiedad intelectual preexistente permanece con su propietario original'],
  },
  {
    title: '4. Confidencialidad',
    content: 'Ambas partes acuerdan mantener confidencial cualquier información de negocios, técnica o de otro tipo que sea designada como confidencial. Esta obligación permanece por dos años después de la terminación del acuerdo.',
  },
  {
    title: '5. Limitación de Responsabilidad',
    content: 'OnIA no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pérdida de ganancias o datos, que surja del uso de nuestros servicios.',
  },
  {
    title: '6. Terminación',
    content: 'Cualquiera de las partes puede terminar el acuerdo de servicios con 30 días de aviso escrito. OnIA puede terminar inmediatamente si hay violación de estos términos.',
  },
  {
    title: '7. Cambios a los Términos',
    content: 'OnIA se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio.',
  },
  {
    title: '8. Contacto',
    content: 'Para preguntas sobre estos Términos de Servicio, contáctanos en oninteligenciaartificial@gmail.com.',
  },
]

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="text-outline">›</span>
            <span>Términos de Servicio</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Términos de Servicio</h1>
          <p className="text-on-surface-variant">Última actualización: 12 de marzo de 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold mb-3 text-white">{s.title}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-3">{s.content}</p>
              {s.list && (
                <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
