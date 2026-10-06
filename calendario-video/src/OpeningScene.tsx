import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "./SceneFrame";

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame chapter="Dos cuentas" number="01">
      <div
        style={{
          position: "absolute",
          top: 205,
          left: 78,
          right: 78,
          opacity: interpolate(frame, [0, 24], [0, 1], { extrapolateRight: "clamp" }),
          translate: `0px ${interpolate(frame, [0, 28], [30, 0], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        <div
          style={{
            color: "#e36e37",
            fontFamily: "Arial, sans-serif",
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Calendario mexica
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 77,
            fontWeight: 700,
            lineHeight: 0.99,
            textTransform: "uppercase",
          }}
        >
          El arte del
          <br />
          tiempo azteca
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#b4aaa0",
            fontFamily: "Arial, sans-serif",
            fontSize: 25,
          }}
        >
          Una danza cósmica entre el destino y la tierra
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 630,
          left: 220,
          width: 640,
          height: 640,
          border: "2px solid #655d53",
          borderRadius: "50%",
          rotate: `${interpolate(frame, [0, 390], [-12, 18], { extrapolateRight: "clamp" })}deg`,
          scale: interpolate(frame, [0, 42], [0.76, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 46,
            border: "2px solid #ae3f2d",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 145,
            border: "1px solid #e36e37",
            borderRadius: "50%",
          }}
        />
        {Array.from({ length: 20 }, (_, index) => {
          const angle = (index / 20) * Math.PI * 2;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${50 + Math.sin(angle) * 46}%`,
                left: `${50 + Math.cos(angle) * 46}%`,
                width: 6,
                height: 23,
                backgroundColor: index % 5 === 0 ? "#e36e37" : "#b4aaa0",
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
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "#e36e37",
            boxShadow: "0 0 0 20px rgba(227,110,55,0.12)",
            translate: "-50% -50%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1005,
          left: 345,
          width: 390,
          height: 255,
          backgroundColor: "rgba(27,26,24,0.92)",
          clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          borderBottom: "3px solid #e36e37",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 1360,
          left: 80,
          right: 80,
          paddingTop: 25,
          borderTop: "2px solid #655d53",
          color: "#d2c8bc",
          fontFamily: "Arial, sans-serif",
          fontSize: 27,
          lineHeight: 1.4,
        }}
      >
        Para la civilización azteca, el tiempo no era un hilo sin retorno: era una
        danza cósmica donde el destino divino y la tierra se entrelazaban.
      </div>
    </SceneFrame>
  );
};