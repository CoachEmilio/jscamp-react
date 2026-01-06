🚀 Tech Explorer — React Practice (JSCamp)

Este proyecto es una aplicación frontend construida desde cero con React + Vite, desarrollada como práctica intensiva siguiendo el enfoque y roadmap de JSCamp (midudev).

El objetivo principal fue entender React de verdad, no solo “hacer que funcione”, aplicando buenas prácticas de arquitectura, estado, efectos, UX y organización del código.

🧠 Objetivos de aprendizaje

Comprender la diferencia entre JavaScript puro y JSX

Separar lógica de negocio y UI

Construir una SPA real con React Router

Manejar estado local y global correctamente

Trabajar con datos asíncronos (fetch, loading, error)

Consolidar UX básica sin frameworks de CSS

Aplicar principios de alta cohesión y bajo acoplamiento

🛠️ Tecnologías usadas

React 18

Vite

React Router DOM

Zustand (estado global + persistencia)

JavaScript (ES6+)

CSS vanilla (sin frameworks)

🗂️ Arquitectura del proyecto
src/
  components/        # Componentes reutilizables (UI)
  pages/             # Páginas de la aplicación
  hooks/             # Custom hooks (lógica)
  layouts/           # Layouts con React Router (Outlet)
  store/             # Estado global (Zustand)
  App.jsx            # Definición de rutas
  main.jsx           # Punto de entrada
public/
  techs.json         # Datos mockeados (simulación de API)


La app está organizada siguiendo el principio de:

Lógica en hooks y stores — UI en componentes y páginas

✨ Funcionalidades principales
📄 Navegación (SPA)

Home

Techs

About

Navegación sin recarga usando React Router

Layout compartido con Outlet

📡 Carga de datos

Fetch de datos desde public/techs.json

Manejo de:

loading

error

estados vacíos

Uso de AbortController para evitar efectos colaterales

🧩 Custom Hooks

useTechs

Encapsula toda la lógica de fetch

Mantiene los componentes limpios y declarativos

🌍 Estado global (Zustand)

Usuario global (login / logout)

Favoritos

Persistencia en localStorage

Uso de selectors para evitar renders innecesarios

⭐ Favoritos

Marcar / desmarcar tecnologías

Persisten al recargar la página

Ordenados para mostrarse primero

🔎 UX básica

Buscador de tecnologías

Filtro “solo favoritos”

Contador de resultados

Mensajes inteligentes según el estado

Skeleton de carga simple

🎨 Estilos (CSS)

CSS vanilla (sin Tailwind, Bootstrap ni frameworks)

Variables CSS para colores

Layout centrado

Navbar y footer simples

Enfoque en legibilidad y estructura, no diseño pesado

🧪 Modo desarrollo

Instalar dependencias:

npm install


Levantar el proyecto:

npm run dev

📌 Notas importantes

El archivo techs.json se usa solo con fines educativos para simular una API.

El proyecto está pensado como base sólida para luego conectar un backend real (Node.js).

El foco está en entender React, no en copiar código.

📚 Referencias

JSCamp

Repositorio oficial JSCamp

Documentación de React

Zustand

🧑‍💻 Autor Emilio

Proyecto desarrollado como práctica personal siguiendo el roadmap de JSCamp.
