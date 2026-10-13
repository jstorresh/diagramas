# Guía de estilo Vaporwave

Referencia visual complementaria extraída de `Definir estilo vaporwave.zip`. Se aplica únicamente a piezas o interfaces que soliciten explícitamente el estilo Vaporwave; los diagramas del proyecto mantienen las reglas Grunge de [`../Agents.md`](../Agents.md).

## Dirección visual

- Evocar una noche retrofuturista con horizontes violetas, atardeceres neón, rejillas en perspectiva y detalles inspirados en pantallas CRT.
- Combinar superficies oscuras con acentos luminosos. Reservar los resplandores y efectos cromáticos para detalles y elementos destacados.
- Mantener el contenido legible y la jerarquía visual clara; los efectos no deben competir con la información.

## Paleta

| Nombre | Token | Color | Uso |
| --- | --- | --- | --- |
| Noche | `--color-night` | `#14072E` | Fondo principal |
| Crepúsculo | `--color-dusk` | `#241048` | Paneles y superficies |
| Violeta | `--color-violet` | `#3B1C7A` | Horizonte y degradados |
| Rosa neón | `--color-pink` | `#FF4FD8` | Acento principal y llamadas a la acción |
| Cian | `--color-cyan` | `#38F2FF` | Acento secundario, rejillas y líneas |
| Sol | `--color-sun` | `#FF9A4D` | Sol y referencias a Fuego Nuevo |
| Lila | `--color-lilac` | `#C9A9FF` | Líneas y texto secundario |
| Menta | `--color-mint` | `#7DFFD4` | Datos y cifras destacadas |
| Tinta clara | `--color-ink` | `#FFF3FF` | Texto principal |

Usar noche y crepúsculo como base. Emplear rosa y cian como acentos contrastantes; naranja y menta para énfasis puntuales, no como fondos de texto extenso.

## Tipografía

- **Unbounded** (`--font-display`): títulos y cifras con presencia.
- **Outfit** (`--font-body`): texto general y lectura continua.
- **DM Mono** (`--font-mono`): etiquetas, códigos, datos y microtexto.
- **DotGothic16** (`--font-kana`): detalles decorativos puntuales; no usar para texto largo.

## Fondos y recursos gráficos

- **Cielo:** degradado vertical de noche a violeta y magenta (`--grad-sky`); para portadas y cierres.
- **Atardecer:** degradado vertical de naranja a rosa y violeta (`--grad-sunset`); para soles y referencias a Fuego Nuevo.
- **Neón:** degradado horizontal de cian a rosa (`--grad-neon`); para barras, líneas y bordes.
- La rejilla cian en perspectiva puede sugerir un suelo digital. Mantenerla tenue detrás del contenido.
- Usar scanlines, aberración cromática y resplandor neón con moderación, evitando degradar la legibilidad.

## Movimiento y accesibilidad

- Reservar animaciones lentas para fondos o detalles decorativos; evitar movimiento continuo en contenido informativo.
- Respetar `prefers-reduced-motion`: desactivar animaciones y desplazamiento suave cuando se solicite movimiento reducido.
- Comprobar contraste suficiente para textos y controles sobre las superficies oscuras. No comunicar estados solo mediante color o resplandor.
