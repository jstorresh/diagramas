import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "./SceneFrame";

export const XiuhpohualliScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame chapter="Cuenta solar" number="03">
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
          El ciclo solar
        </div>
        <div style={{ marginTop: 14, fontSize: 58, fontWeight: 700 }}>Xiuhpohualli</div>
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
          rotate: `${interpolate(frame, [0, 450], [12, -16], { extrapolateRight: "clamp" })}deg`,
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
            border: "2px solid #e36e37",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 131,
            border: "1px solid #655d53",
            borderRadius: "50%",
          }}
        />
        {Array.from({ length: 18 }, (_, index) => {
          const angle = (index / 18) * Math.PI * 2 - Math.PI / 2;
          const isNemontemi = index >= 15;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 45}%`,
                left: `${50 + Math.cos(angle) * 45}%`,
                width: 31,
                height: isNemontemi ? 16 : 31,
                border: `2px solid ${isNemontemi ? "#ae3f2d" : "#e36e37"}`,
                backgroundColor: isNemontemi ? "#ae3f2d" : "#1b1a18",
                rotate: `${(angle * 180) / Math.PI + 90}deg`,
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
          365
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
          18 meses × 20 días + 5
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
          El Xiuhpohualli marcaba las estaciones, la siembra y la cosecha. Los 5
          días nemontemi completaban el ciclo de 365 días.
        </div>
      </div>
    </SceneFrame>
  );
};