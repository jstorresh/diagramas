# Calendario mexica

Proyecto sobre las cuentas del calendario mexica, compuesto por un diagrama en
tres formatos equivalentes y un video animado vertical hecho con Remotion.

## Diagrama

Las tres representaciones cubren el Tonalpohualli (260 días), el Xiuhpohualli
(365 días) y el ciclo de Fuego Nuevo (52 años). Si se modifica el contenido,
mantener la información esencial sincronizada en los tres archivos:

- [`calendario-azteca.svg`](calendario-azteca.svg): versión vectorial para ver
  en navegador y escalar sin perder calidad.
- [`calendario-azteca.excalidraw`](calendario-azteca.excalidraw): versión
  editable en Excalidraw.
- [`calendario-azteca.mmd`](calendario-azteca.mmd): versión Mermaid, editable
  como texto y renderizable en herramientas compatibles.

El estilo obligatorio de los diagramas es Grunge, con una paleta basada en
negro, gris, naranja y rojo. No sustituir estos formatos ni usar generadores de
imágenes para crear diagramas o recursos.

## Video

La aplicación de [`calendario-video/`](calendario-video/) contiene un video
vertical de 1080 × 1920, a 30 fps y 66 segundos, sincronizado con la locución.
Recorre la introducción, el Tonalpohualli, el Xiuhpohualli y el Fuego Nuevo.
Remotion registra la composición estándar `CalendarioAzteca` y una variante
`CalendarioAztecaVaporwave`, además de composiciones para previsualizar escenas.

Los dos videos renderizados están disponibles para reproducir:

- [Video estándar](calendario-video/out/arte-del-tiempo-azteca-vertical.mp4)
- [Video Vaporwave](calendario-video/out/calendario-azteca-vaporwave.mp4)

Para volver a generarlos, ejecuta desde `calendario-video/`:

```sh
npm install
npx remotion render CalendarioAzteca out/arte-del-tiempo-azteca-vertical.mp4
npx remotion render CalendarioAztecaVaporwave out/calendario-azteca-vaporwave.mp4
```

Para abrir Remotion Studio o validar el código:

```sh
npm run dev
npm run lint
```

## Documentación

- [`docs/guion.md`](docs/guion.md): guion narrativo y visual.
- [`docs/estilo-vaporwave.md`](docs/estilo-vaporwave.md): referencia de estilo
  aplicable únicamente cuando se solicite Vaporwave; no reemplaza las reglas
  Grunge de los diagramas.
- [`calendario-video/README.md`](calendario-video/README.md): detalles y
  comandos de la aplicación de video.
