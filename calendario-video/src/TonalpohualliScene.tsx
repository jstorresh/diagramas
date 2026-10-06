import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "./SceneFrame";

export const TonalpohualliScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame chapter="Cuenta ritual" number="02">
      <div
        style={{
          position: "absolute",
          top: 212,
          left: 80,
          right: 80,
          opacity: interpolate(frame, [0, 24], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            color: "#e36e37",
            fontFamily: "Arial, sans-serif",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          El ciclo ritual
        </div>
        <div style={{ marginTop: 14, fontSize: 58, fontWeight: 700 }}>Tonalpohualli</div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 440,
          left: 210,
          width: 660,
          height: 660,
          border: "2px solid #655d53",
          borderRadius: "50%",
          rotate: `${interpolate(frame, [0, 555], [-14, 16], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 40], [0.82, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 45,
            border: "2px solid #ae3f2d",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 131,
            border: "1px solid #e36e37",
            borderRadius: "50%",
          }}
        />
        {Array.from({ length: 13 }, (_, index) => {
          const angle = (index / 13) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 45}%`,
                left: `${50 + Math.cos(angle) * 45}%`,
                width: 26,
                height: 26,
                border: `2px solid ${index % 3 === 0 ? "#e36e37" : "#b4aaa0"}`,
                borderRadius: "50%",
                backgroundColor: "#1b1a18",
                translate: "-50% -50%",
              }}
            />
          );
        })}
        {Array.from({ length: 20 }, (_, index) => {
          const angle = (index / 20) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 34}%`,
                left: `${50 + Math.cos(angle) * 34}%`,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: index % 4 === 0 ? "#ae3f2d" : "#b4aaa0",
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
            color: "#e9e2d7",
            fontSize: 122,
            fontWeight: 700,
            translate: "-50% -50%",
          }}
        >
          260
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1190,
          left: 80,
          right: 80,
          borderTop: "2px solid #655d53",
          paddingTop: 28,
        }}
      >
        <div
          style={{
            color: "#e36e37",
            fontFamily: "Arial, sans-serif",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          20 signos × 13 numerales
        </div>
        <div
          style={{
            marginTop: 19,
            color: "#d2c8bc",
            fontFamily: "Arial, sans-serif",
            fontSize: 27,
            lineHeight: 1.4,
          }}
        >
          Su combinación marcaba los ritos y el destino de cada día. El ciclo se
          completaba cada 260 días.
        </div>
      </div>
    </SceneFrame>
  );
};