# Guía para agentes

## Alcance del proyecto

- Consulta [`README.md`](README.md) para el estado, los entregables y los
  comandos vigentes.
- El repositorio incluye tres formatos de diagrama y una aplicación de video
  Remotion en `calendario-video/`. No confundas las reglas visuales de los
  diagramas con las variantes de video.

## Diagramas

- Cada diagrama debe entregarse en `.svg`, `.excalidraw` y `.mmd`. Conserva el
  mismo tema y contenido esencial en las tres representaciones; actualízalas
  juntas cuando cambie el diagrama.
- Usa el estilo Grunge y una paleta basada en negro, gris, naranja y rojo.
- No uses generadores de imágenes para crear diagramas ni sus recursos.
- La referencia Vaporwave de [`docs/estilo-vaporwave.md`](docs/estilo-vaporwave.md)
  solo se aplica cuando una tarea pide explícitamente ese estilo. No sustituye
  las reglas Grunge de los diagramas.

## Aplicación de video

- Trabaja dentro de `calendario-video/` y sigue sus dependencias, formato y
  convenciones existentes.
- Para instalar, iniciar Remotion Studio y validar tipos/lint, ejecuta desde
  `calendario-video/`: `npm install`, `npm run dev` y `npm run lint`.
- Los renders se guardan en `calendario-video/out/`, excluido de Git. No
  elimines ni reemplaces renders existentes sin que la tarea lo requiera.

## Cambios y validación

- Mantén sincronizados los entregables relacionados y actualiza la
  documentación pertinente cuando cambie el uso o el estado del proyecto.
- Ejecuta la validación más pequeña que cubra el cambio; para la aplicación de
  video, usa `npm run lint` desde `calendario-video/`.
