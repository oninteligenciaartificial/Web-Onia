import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad de OnIA - Cómo recopilamos, usamos y protegemos tus datos.',
}

const sections = [
  {
    title: '1. Información que Recopilamos',
    content: 'Recopilamos información que nos proporcionas directamente, como cuando llenas un formulario de contacto, solicitas una consulta o te comunicas con nosotros. Esto puede incluir:',
    list: ['Nombre, dirección de correo electrónico y número de teléfono', 'Nombre de la empresa y cargo', 'Detalles y requisitos del proyecto', 'Cualquier otra información que decidas proporcionar'],
  },
  {
    title: '2. Cómo Usamos Tu Información',
    content: 'Usamos la información que recopilamos para:',
    list: ['Responder a tus consultas y proporcionar los servicios solicitados', 'Enviarte avisos técnicos, actualizaciones y mensajes administrativos', 'Proveer, mantener y mejorar nuestros servicios', 'Comunicarnos contigo sobre productos, servicios y eventos'],
  },
  {
    title: '3. Seguridad de Datos',
    content: 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.',
  },
  {
    title: '4. Compartir Datos',
    content: 'No vendemos, comercializamos ni alquilamos tu información personal a terceros. Solo podemos compartir tu información en las siguientes circunstancias:',
    list: ['Con tu consentimiento o bajo tu dirección', 'Con proveedores de servicios que asisten en nuestras operaciones', 'Para cumplir con obligaciones legales'],
  },
  {
    title: '5. Cookies y Seguimiento',
    content: 'Nuestro sitio web puede usar cookies y tecnologías de seguimiento similares para mejorar tu experiencia de navegación. Puedes controlar la configuración de cookies a través de las preferencias de tu navegador.',
  },
  {
    title: '6. Tus Derechos',
    content: 'Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos en oninteligenciaartificial@gmail.com.',
  },
  {
    title: '7. Cambios a Esta Política',
    content: 'Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página.',
  },
]

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="text-outline">›</span>
            <span>Política de Privacidad</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Política de Privacidad</h1>
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
