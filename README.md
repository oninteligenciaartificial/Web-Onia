# OnIA - Agencia de Diseño Web e IA

Sitio web profesional de OnIA - Agencia de diseño web e inteligencia artificial en Santa Cruz, Bolivia.

## Stack Tecnológico

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Runtime**: Node.js

## Instalación

1. Instalar dependencias:
```bash
npm install
# o
pnpm install
```

2. Crear archivo `.env.local` basado en `.env.example`:
```bash
cp .env.example .env.local
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Estructura de Directorios

```
.
├── app/                      # App directory de Next.js
│   ├── about/               # Página Nosotros
│   ├── services/            # Página Servicios
│   ├── contact/             # Página Contacto
│   ├── privacy/             # Política de Privacidad
│   ├── terms/               # Términos de Servicio
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── src/
│   ├── components/          # Componentes React reutilizables
│   ├── styles/              # Estilos adicionales
│   └── pages/               # Archivos HTML antiguos (para referencia)
├── public/                  # Archivos estáticos (imágenes, etc.)
├── package.json             # Dependencias
├── tailwind.config.ts       # Configuración Tailwind
├── next.config.ts           # Configuración Next.js
└── tsconfig.json            # Configuración TypeScript
```

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta el linter

## Características

- ✅ Responsive design
- ✅ SEO optimizado
- ✅ Performance optimizado
- ✅ Dark mode
- ✅ Número de contacto integrado (+591 75470140)
- ✅ Redes sociales
- ✅ Formulario de contacto

## Proximos Pasos

1. Convertir componentes HTML a React TSX
2. Implementar componentes reutilizables
3. Integrar animaciones con GSAP o Framer Motion
4. Configurar formularios dinámicos
5. Desplegar en producción

## Contacto

- **Teléfono**: +591 75470140
- **Email**: oninteligenciaartificial@gmail.com
- **Sitio**: https://onia.com.bo
