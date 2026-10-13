import { interpolate, useCurrentFrame } from "remotion";
import { vaporwaveFonts, VaporwaveFrame } from "./VaporwaveFrame";

export const VaporwaveFireScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fireScale = interpolate(frame, [0, 36, 90], [0.7, 1.12, 1], {
    extrapolateRight: "clamp",
    output: "perceptual-scale",
  });

  return (
    <VaporwaveFrame chapter="Fuego Nuevo · La renovación" number="04">
      <div
        style={{
          position: "absolute",
          top: 245,
          left: 84,
          right: 84,
          textAlign: "center",
          opacity: interpolate(frame, [0, 24], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            color: "#38F2FF",
            fontFamily: vaporwaveFonts.mono,
            fontSize: 21,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          El ciclo vuelve a empezar
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#FFF3FF",
            fontFamily: vaporwaveFonts.display,
            fontSize: 82,
            fontWeight: 800,
            textShadow: "2px 0 #38F2FF, -2px 0 #FF4FD8",
          }}
        >
          FUEGO NUEVO
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 210,
          top: 580,
          width: 660,
          height: 660,
          rotate: `${interpolate(frame, [0, 585], [-9, 13], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 48], [0.78, 1], {
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 8,
            border: "2px solid rgba(56,242,255,0.8)",
            borderRadius: "50%",
            boxShadow: "0 0 26px rgba(56,242,255,0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 74,
            border: "2px solid rgba(255,79,216,0.9)",
            borderRadius: "50%",
            boxShadow: "0 0 30px rgba(255,79,216,0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 142,
            border: "2px solid rgba(201,169,255,0.8)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 164,
            height: 164,
            borderRadius: "50%",
            background: "linear-gradient(180deg, #FF9A4D 0%, #FF4FD8 100%)",
            boxShadow: "0 0 0 34px rgba(255,154,77,0.12), 0 0 75px rgba(255,79,216,0.5)",
            scale: fireScale,
            translate: "-50% -50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 48,
            height: 100,
            borderRadius: "50% 50% 48% 48%",
            background: "linear-gradient(180deg, #FFF3FF 0%, #FF9A4D 100%)",
            boxShadow: "0 0 35px #FF9A4D",
            scale: fireScale,
            translate: "-50% -70%",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 12,
            height: 92,
            clipPath: "polygon(0 100%, 12% 72%, 22% 72%, 22% 54%, 32% 54%, 32% 36%, 42% 36%, 42% 17%, 58% 17%, 58% 36%, 68% 36%, 68% 54%, 78% 54%, 78% 72%, 88% 72%, 100% 100%)",
            background: "linear-gradient(90deg, #241048, #C9A9FF 52%, #241048)",
            filter: "drop-shadow(0 0 16px rgba(255,79,216,0.55))",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1320,
          left: 96,
          right: 96,
          textAlign: "center",
          opacity: interpolate(frame, [44, 72], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            color: "#FF9A4D",
            fontFamily: vaporwaveFonts.display,
            fontSize: 72,
            fontWeight: 800,
            textShadow: "0 0 30px rgba(255,154,77,0.6)",
          }}
        >
          52 AÑOS
        </div>
        <div
          style={{
            marginTop: 24,
            paddingTop: 26,
            borderTop: "1px solid rgba(201,169,255,0.55)",
            color: "#FFF3FF",
            fontSize: 36,
            lineHeight: 1.4,
          }}
        >
          Dos calendarios se sincronizan.
          <br />
          El universo renace.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 144,
          left: 96,
          right: 96,
          height: 5,
          backgroundColor: "rgba(201,169,255,0.25)",
        }}
      >
        <div
          style={{
            width: `${interpolate(frame, [0, 585], [0, 100], { extrapolateRight: "clamp" })}%`,
            height: "100%",
            background: "linear-gradient(90deg, #38F2FF, #FF4FD8, #FF9A4D)",
            boxShadow: "0 0 15px rgba(255,79,216,0.8)",
          }}
        />
      </div>
    </VaporwaveFrame>
  );
};
