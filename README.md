<div>
	<h1>Notas del Curso React Native (Serie de 5 Partes)</h1>
    <p>
    	<img alt="Licencia" src="https://img.shields.io/badge/license-MIT-green" />
		<img alt="Estado" src="https://img.shields.io/badge/avance-parte%2005-blue" />
    	<img alt="React Native" src="https://img.shields.io/badge/react--native-expo-blue" />
    	<img alt="Tipo" src="https://img.shields.io/badge/docs-notas-informational" />
    </p>
    <p>Registro estructurado de prácticas basadas en una serie de videos de YouTube sobre la creación de una app con React Native y Expo.</p>

</div>

---

## Descripción

Este repositorio recopila notas en formato Markdown derivadas de la serie publicada en YouTube:

Video base: https://www.youtube.com/watch?v=GaXEzkDs6Yk

Objetivos principales:

- Practicar fundamentos de React Native con Expo.
- Documentar comandos, patrones y componentes usados.
- Facilitar un repaso rápido (índice por parte) sin volver a ver todo el video.

---

## Índice General

Cada parte tiene su archivo en `docs/`. Los commits reflejan la evolución de cada etapa.

| Parte | Archivo                                                              | Contenido principal                                                                                                                                                           |
| ----- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01    | [Parte 01 – Setup & Base](docs/parte_01_setup_base.md)               | Setup, estructura, navegación básica, estilos, tema, inputs                                                                                                                   |
| 02    | [Parte 02 – Proyecto conversor](docs/parte_02_proyecto_conversor.md) | Agrupar rutas con Expo Router, snippet VSCode, imagen remota, input + lógica conversor                                                                                        |
| 03    | [Parte 03 – Listas](docs/parte_03_listas.md)                         | FlatList, SectionList, href vs grupos, styled en no nativos, Vector Icons, Safe Area, estado dinámico, desestructuración, inyección de componentes, gradients, paginación     |
| 04    | [Parte 04 – Navegación](docs/parte_04_navegacion.md)                 | Tabs, Drawer, Fetch API, Axios, TanStack Query, React Query DevTools                                                                                                          |
| 05    | [Parte 05 – Pokédex](docs/parte_05_pokedex.md)                       | Listado y detalle de Pokémons con PokeAPI; React Query + Axios; cacheo y paginado con useInfiniteQuery; cards con colores por tipo; gradientes y assets; navegación a detalle |

---

## Referencias

### Video Principal

- Video base: https://www.youtube.com/watch?v=GaXEzkDs6Yk

### Herramientas y Utilidades

- Generador de snippets: https://snippet-generator.app/
- Hosting rápido de imágenes (para pruebas): https://imgbb.com/
- REST Client extension (tutorial): https://www.youtube.com/watch?v=xDe4qYjU314
- Íconos Expo: https://icons.expo.fyi/Index
- Expo LinearGradient: https://docs.expo.dev/versions/latest/sdk/linear-gradient/
- Expo Image (alto rendimiento): https://docs.expo.dev/versions/latest/sdk/image/
- Axios: https://axios-http.com/

### Documentación Oficial

- Documentación Expo Router (layouts y grupos): https://expo.github.io/router/docs
- Documentación Expo Drawer: https://docs.expo.dev/router/advanced/drawer/
- React Native FlatList: https://reactnative.dev/docs/flatlist
- TanStack Query: https://tanstack.com/
- useInfiniteQuery (docs): https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery

### APIs y Recursos

- Free APIs (listado): https://free-apis.github.io/#/
- Emoji API (usada en ejemplos): https://emojihub.yurace.pro/api/all
- PokeAPI (Parte 05): https://pokeapi.co/

### Desarrollo y Setup

- NVM (Node Version Manager): https://github.com/nvm-sh/nvm#installing-and-updating
- Guía CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
