import { interpolate, useCurrentFrame } from "remotion";
import { vaporwaveFonts, VaporwaveFrame } from "./VaporwaveFrame";

export const VaporwaveTonalScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaporwaveFrame chapter="Cuenta ritual · El ciclo sagrado" number="02">
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
          La cuenta ritual
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#FFF3FF",
            fontFamily: vaporwaveFonts.display,
            fontSize: 72,
            fontWeight: 600,
            textShadow: "2px 0 #38F2FF, -2px 0 #FF4FD8",
          }}
        >
          Tonalpohualli
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 210,
          top: 600,
          width: 660,
          height: 660,
          border: "2px solid #C9A9FF",
          borderRadius: "50%",
          boxShadow: "0 0 28px rgba(56,242,255,0.23), inset 0 0 32px rgba(255,79,216,0.1)",
          rotate: `${interpolate(frame, [0, 555], [-8, 14], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 42], [0.82, 1], {
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "2px solid #FF4FD8",
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(255,79,216,0.23)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 132,
            border: "1px solid #38F2FF",
            borderRadius: "50%",
          }}
        />
        {Array.from({ length: 13 }, (_, index) => {
          const angle = (index / 13) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={`number-${index}`}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 47}%`,
                left: `${50 + Math.cos(angle) * 47}%`,
                width: 28,
                height: 28,
                border: "2px solid #38F2FF",
                borderRadius: "50%",
                backgroundColor: "#14072E",
                boxShadow: "0 0 15px rgba(56,242,255,0.55)",
                translate: "-50% -50%",
              }}
            />
          );
        })}
        {Array.from({ length: 20 }, (_, index) => {
          const angle = (index / 20) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={`sign-${index}`}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 35}%`,
                left: `${50 + Math.cos(angle) * 35}%`,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: index % 4 === 0 ? "#FF9A4D" : "#FF4FD8",
                boxShadow: "0 0 13px rgba(255,79,216,0.8)",
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
            color: "#7DFFD4",
            fontFamily: vaporwaveFonts.display,
            fontSize: 158,
            fontWeight: 800,
            textShadow: "0 0 30px rgba(125,255,212,0.55)",
            translate: "-50% -50%",
          }}
        >
          260
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1365,
          left: 96,
          right: 96,
          padding: "32px 30px",
          border: "1px solid rgba(201,169,255,0.45)",
          backgroundColor: "rgba(20,7,46,0.72)",
          boxShadow: "0 0 35px rgba(56,242,255,0.09)",
          opacity: interpolate(frame, [30, 58], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            color: "#FF9A4D",
            fontFamily: vaporwaveFonts.mono,
            fontSize: 28,
            letterSpacing: 2,
          }}
        >
          20 SIGNOS × 13 NUMERALES
        </div>
        <div style={{ marginTop: 16, color: "#FFF3FF", fontSize: 36, lineHeight: 1.38 }}>
          Cada combinación marcaba los ritos y el destino de un día.
        </div>
      </div>
    </VaporwaveFrame>
  );
};
