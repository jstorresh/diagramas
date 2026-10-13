import { interpolate, useCurrentFrame } from "remotion";
import { vaporwaveFonts, VaporwaveFrame } from "./VaporwaveFrame";

export const VaporwaveIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaporwaveFrame chapter="Dos cuentas · Una danza cósmica" number="01">
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 82,
          right: 82,
          opacity: interpolate(frame, [0, 24], [0, 1], { extrapolateRight: "clamp" }),
          translate: `0px ${interpolate(frame, [0, 30], [35, 0], {
            extrapolateRight: "clamp",
          })}px`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#38F2FF",
            fontFamily: vaporwaveFonts.mono,
            fontSize: 21,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Calendario mexica
        </div>
        <div
          style={{
            marginTop: 32,
            fontFamily: vaporwaveFonts.display,
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1.2,
            textShadow: "3px 0 #38F2FF, -3px 0 #FF4FD8",
          }}
        >
          EL ARTE DEL
          <br />
          TIEMPO AZTECA
        </div>
        <div
          style={{
            marginTop: 36,
            color: "#C9A9FF",
            fontSize: 40,
            fontWeight: 300,
            lineHeight: 1.3,
          }}
        >
          Una danza cósmica entre
          <br />
          el destino y la tierra
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 220,
          top: 820,
          width: 640,
          height: 640,
          border: "2px solid rgba(56,242,255,0.65)",
          borderRadius: "50%",
          boxShadow: "0 0 32px rgba(56,242,255,0.22), inset 0 0 36px rgba(255,79,216,0.12)",
          rotate: `${interpolate(frame, [0, 390], [-9, 13], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 42], [0.78, 1], {
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 40,
            border: "2px solid rgba(255,79,216,0.82)",
            borderRadius: "50%",
            boxShadow: "0 0 22px rgba(255,79,216,0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 130,
            border: "1px solid rgba(201,169,255,0.8)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 210,
            height: 210,
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, #FF9A4D 0%, #FF4FD8 52%, #7A3CFF 100%)",
            boxShadow: "0 0 70px rgba(255,79,216,0.46)",
            translate: "-50% -50%",
          }}
        />
        {Array.from({ length: 20 }, (_, index) => {
          const angle = (index / 20) * Math.PI * 2;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 47}%`,
                left: `${50 + Math.cos(angle) * 47}%`,
                width: index % 5 === 0 ? 13 : 7,
                height: index % 5 === 0 ? 13 : 7,
                borderRadius: "50%",
                backgroundColor: index % 5 === 0 ? "#FF9A4D" : "#38F2FF",
                boxShadow: "0 0 12px currentColor",
                translate: "-50% -50%",
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          top: 1540,
          left: 96,
          right: 96,
          color: "#FFF3FF",
          fontSize: 34,
          lineHeight: 1.45,
          textAlign: "center",
          opacity: interpolate(frame, [28, 56], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        El tiempo: un ciclo sagrado
        <br />
        entre los dioses y la tierra.
      </div>
    </VaporwaveFrame>
  );
};
