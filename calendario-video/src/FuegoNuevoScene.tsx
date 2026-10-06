import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "./SceneFrame";

export const FuegoNuevoScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame chapter="Renovación" number="04">
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
          La gran renovación
        </div>
        <div style={{ marginTop: 14, fontSize: 62, fontWeight: 700 }}>Fuego Nuevo</div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 440,
          left: 210,
          width: 660,
          height: 660,
          rotate: `${interpolate(frame, [0, 585], [-10, 18], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 48], [0.78, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 7,
            border: "2px solid #655d53",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 75,
            border: "2px solid #ae3f2d",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 143,
            border: "2px solid #e36e37",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 130,
            height: 130,
            borderRadius: "50%",
            backgroundColor: "#ae3f2d",
            boxShadow: "0 0 0 30px rgba(227,110,55,0.12)",
            scale: interpolate(frame, [0, 30, 75], [0.65, 1.12, 1], {
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            translate: "-50% -50%",
          }}
        />
        {[
          { label: "RITUAL", angle: -90 },
          { label: "SOL", angle: 30 },
          { label: "RENOVACIÓN", angle: 150 },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              position: "absolute",
              top: `${50 + Math.sin((item.angle * Math.PI) / 180) * 47}%`,
              left: `${50 + Math.cos((item.angle * Math.PI) / 180) * 47}%`,
              padding: "11px 13px",
              border: "1px solid #b4aaa0",
              backgroundColor: "#1b1a18",
              color: "#e9e2d7",
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              letterSpacing: 1,
              translate: "-50% -50%",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 1190,
          left: 80,
          right: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#e36e37",
            fontFamily: "Arial, sans-serif",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Cada 52 años
        </div>
        <div
          style={{
            marginTop: 22,
            paddingTop: 25,
            borderTop: "2px solid #655d53",
            color: "#d2c8bc",
            fontFamily: "Arial, sans-serif",
            fontSize: 27,
            lineHeight: 1.4,
            textAlign: "left",
          }}
        >
          Ambos ciclos volvían a coincidir. El Fuego Nuevo renovaba el vínculo entre
          el ritual y la agricultura: una nueva rueda para la continuidad de la vida.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 177,
          left: 80,
          right: 80,
          height: 4,
          backgroundColor: "#655d53",
        }}
      >
        <div
          style={{
            width: `${interpolate(frame, [0, 585], [0, 100], { extrapolateRight: "clamp" })}%`,
            height: "100%",
            backgroundColor: "#e36e37",
          }}
        />
      </div>
    </SceneFrame>
  );
};