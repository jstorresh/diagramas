# Calendario mexica

Video animado vertical sobre las dos cuentas calendáricas y la ceremonia del
Fuego Nuevo, sincronizado con la locución de `docs/locucion.mp3`. Las dos
composiciones son de 1080 × 1920 (9:16), 30 fps y aproximadamente 66 segundos.

## Videos renderizados

- [Ver video estándar](out/arte-del-tiempo-azteca-vertical.mp4)
- [Ver video Vaporwave](out/calendario-azteca-vaporwave.mp4)

## Escenas

- Introducción: dos cuentas del tiempo.
- Tonalpohualli: 260 días, 20 signos y 13 numerales.
- Xiuhpohualli: 365 días, 18 meses de 20 días y 5 nemontemi.
- Fuego Nuevo: renovación del ciclo de 52 años.

## Comandos

Instalar dependencias:

```sh
npm install
```

Abrir Remotion Studio:

```sh
npm run dev
```

Exportar ambos videos:

```sh
npx remotion render CalendarioAzteca out/arte-del-tiempo-azteca-vertical.mp4
npx remotion render CalendarioAztecaVaporwave out/calendario-azteca-vaporwave.mp4
```

Las cuatro escenas también están registradas por separado en Studio.