# Nuestro Bar — Landing Page

Landing page para **Nuestro Bar**, tienda de Pisco Sour Valdiviana artesanal desde Valdivia, Chile.

Construida con **Astro** + **Tailwind CSS v4**.

## Tecnologías

- [Astro](https://astro.build) — generador de sitios estáticos
- [Tailwind CSS v4](https://tailwindcss.com) — estilos con `@theme` y utilidades personalizadas
- Google Fonts: Playfair Display + Lato
- Google Material Icons Round
- Optimización automática de imágenes a WebP vía `astro:assets`

## Paleta de colores

| Variable             | Valor     | Uso                        |
| :------------------- | :-------- | :------------------------- |
| `--color-brand-bg`   | `#210d42` | Fondo principal            |
| `--color-brand-text` | `#fdf7ff` | Texto general              |
| `--color-brand-gold` | `#c9a227` | Acentos y CTAs principales |
| `--color-brand-rose` | `#e07ba0` | Acentos secundarios        |
| `--color-brand-card` | `#3a1a6e` | Fondo de tarjetas          |
| `--color-brand-purple`| `#6b3fa0` | Bordes y separadores       |

## Estructura del proyecto

```
src/
├── config/
│   └── site.ts              # WA_LINK e IG_LINK (enlaces compartidos)
├── components/
│   ├── Navbar.astro          # Navegación fija con menú mobile (checkbox hack)
│   ├── Hero.astro            # Hero con imagen de fondo en mobile, grid en desktop
│   ├── Values.astro          # Sección "3 pilares" — Compartir, Momentos, Valdiviana
│   ├── ProductFeature.astro  # Sección producto con lista de características
│   ├── BrandStory.astro      # Historia de marca (solo desktop)
│   ├── Gallery.astro         # Mosaico desktop + carrusel scroll-snap mobile
│   ├── ContactCTA.astro      # CTA WhatsApp + Instagram
│   └── Footer.astro          # Pie de página con enlaces sociales
├── images/
│   ├── logo.jpg
│   ├── SourRosa.jpg
│   ├── compartir.jpg
│   ├── compartir2.jpg
│   └── etiquetas.jpg
├── layouts/
│   └── Layout.astro          # HTML base, fuentes y meta tags
├── pages/
│   └── index.astro           # Ensamblado de componentes
└── styles/
    └── global.css            # @theme de Tailwind v4 + estilos base
```

## Comandos

Ejecutar desde la raíz del proyecto:

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Build de producción en `./dist/`              |
| `npm run preview` | Vista previa del build antes de desplegar     |

## Contacto y redes

- WhatsApp pedidos: [+56 9 3185 7566](https://api.whatsapp.com/send/?phone=56931857566)
- Instagram: [@nuestrobar.valdivia](https://www.instagram.com/nuestrobar.valdivia/)
