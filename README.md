# \<bbva-card-account>

## Instrucciones para ejecutar el proyecto

```bash
git clone https://github.com/AnaflaviaDiaz/bbva-test.git
cd bbva-test
```

### Instalación de dependencias

```bash
npm install
```

### Ejecutar la demo

Para levantar el servidor con la demostración básica alojada en `demo/index.html`

```bash
npm start
```

## Instrucciones para las pruebas unitarias

```bash
npm run test
```

Generará un reporte con el detalle de la cobertura de código en
`coverage\lcov-report\index.html`

Para ejecutar las pruebas en modo de observación interactivo:

```bash
npm run test:watch
```

Este proyecto tiene una cobertura de:

- 100% Statements 897/897
- 97.67% Branches 42/43
- 100% Functions 25/25
- 100% Lines 897/897

## Analisis de código y formateo

Para analizar el proyecto en busca de errores de linting y de formato:

```bash
npm run lint
```

Para corregir automáticamente los errores de linting y formato:

```bash
npm run format
```

## Demo con Storybook

Demostración de los componentes con sus variaciones.
Además, contiene la configuración para probar su accesibilidad.

```bash
npm run storybook
```

## Decisiones técnicas

- Arquitectura del proyecto: Web Components con Lit y estructura de Design System.

- Lenguaje: Typescript para un tipado estricto y detectar errores en tiempo de desarrollo, además, facilita el mantenimiento para proyectos grandes.

- Documentación de componentes: Storybook y uso de pruebas de accesibilidad integradas.

- Documentación de código: JsDoc

- Testing: @web/test-runner por recomendación de OpenWebComponents y pruebas unitarias con pruebas de integración.

- Formateo de Código y Detección de errores: Prettier y Eslint.

- Accesibilidad: WCAG 2.2 nivel AA.

- Componentes: con una construcción atómica para hacerlos reutilizables y adaptables. Cuentan con accesibilidad, semántica y usabilidad.

- Estilos: basado en Design system con Tokens para centralizar la paleta de colores y tipografía. Nomenclatura BEM.

- Estrategia de diseño: Mobile First para priorizar la creación de interfaces para dispositivos móviles antes que ordenadores.

## Consideraciones de accesibilidad

- Contraste de color

- Estructura semántica

- Imágenes o íconos con texto alternativo

- Uso adecuado de ARIA

- Navegación por teclado

- Gestión de foco
