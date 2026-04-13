# ¿Qué quieres ser de mayor?

Una herramienta interactiva que ayuda a estudiantes de 4º de ESO a elegir su itinerario de Bachillerato descubriendo qué carreras universitarias encajan mejor con su forma de ver el mundo.

![Pantalla principal](docs/screenshot-main.png)

## ¿Cómo funciona?

El alumno avanza por un árbol de decisión eligiendo imágenes que representan situaciones que se imagina en su futuro. En cada paso, las opciones se van concretando hasta llegar a un conjunto de **carreras universitarias** recomendadas junto con la **modalidad de Bachillerato** que mejor las prepara (Ciencias, Tecnológico, Humanidades y Ciencias Sociales, o Artes).

En cualquier momento se puede retroceder y explorar un camino diferente.

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript 5 |
| Tests | Jest 30 + React Testing Library |

## Desarrollo local

```bash
npm install
npm run dev
```

La app arranca en [http://localhost:3040](http://localhost:3040).

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Inicia el build de producción |
| `npm run test` | Ejecuta los tests |
| `npm run lint` | Comprueba el código con ESLint |
