import { interpolate, useCurrentFrame } from "remotion";
import { vaporwaveFonts, VaporwaveFrame } from "./VaporwaveFrame";

export const VaporwaveSolarScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaporwaveFrame chapter="Cuenta solar · El ciclo agrícola" number="03">
      <div
        style={{
          position: "absolute",
          top: 245,
          left: 84,
          right: 84,
          textAlign: "center",
          opacity: interpolate(frame, [0, 22], [0, 1], { extrapolateRight: "clamp" }),
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
          La cuenta solar
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#FFF3FF",
            fontFamily: vaporwaveFonts.display,
            fontSize: 70,
            fontWeight: 600,
            textShadow: "2px 0 #38F2FF, -2px 0 #FF4FD8",
          }}
        >
          Xiuhpohualli
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 210,
          top: 570,
          width: 660,
          height: 660,
          border: "2px solid #FF9A4D",
          borderRadius: "50%",
          boxShadow: "0 0 38px rgba(255,154,77,0.3), inset 0 0 50px rgba(255,79,216,0.12)",
          rotate: `${interpolate(frame, [0, 450], [11, -12], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 42], [0.82, 1], {
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 39,
            border: "2px solid rgba(255,79,216,0.9)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 137,
            border: "1px solid rgba(56,242,255,0.85)",
            borderRadius: "50%",
          }}
        />
        {Array.from({ length: 18 }, (_, index) => {
          const angle = (index / 18) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 47}%`,
                left: `${50 + Math.cos(angle) * 47}%`,
                width: 31,
                height: 31,
                border: "2px solid #FF9A4D",
                borderRadius: index % 2 === 0 ? "50%" : 4,
                backgroundColor: "#241048",
                boxShadow: "0 0 14px rgba(255,154,77,0.55)",
                translate: "-50% -50%",
              }}
            />
          );
        })}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "#FFF3FF",
            fontFamily: vaporwaveFonts.display,
            fontSize: 158,
            fontWeight: 800,
            textShadow: "0 0 28px rgba(255,79,216,0.7)",
            translate: "-50% -50%",
          }}
        >
          365
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1310,
          left: 96,
          right: 96,
          display: "flex",
          justifyContent: "center",
          gap: 13,
          opacity: interpolate(frame, [32, 58], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            style={{
              width: 76,
              height: 10,
              borderRadius: 8,
              backgroundColor: index === 2 ? "#FF9A4D" : "#FF4FD8",
              boxShadow: "0 0 18px rgba(255,79,216,0.55)",
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 1385,
          left: 96,
          right: 96,
          padding: "28px 30px",
          border: "1px solid rgba(201,169,255,0.45)",
          backgroundColor: "rgba(20,7,46,0.72)",
          textAlign: "center",
          opacity: interpolate(frame, [34, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            color: "#FF9A4D",
            fontFamily: vaporwaveFonts.mono,
            fontSize: 27,
            letterSpacing: 1,
          }}
        >
          18 MESES × 20 DÍAS + 5 NEMONTEMI
        </div>
        <div style={{ marginTop: 17, color: "#FFF3FF", fontSize: 35, lineHeight: 1.35 }}>
          La cuenta que marcaba las estaciones, la siembra y la cosecha.
        </div>
      </div>
    </VaporwaveFrame>
  );
};
