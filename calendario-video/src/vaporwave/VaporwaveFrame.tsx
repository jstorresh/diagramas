import type { ReactNode } from "react";
import { loadFont as loadDMMono } from "@remotion/google-fonts/DMMono";
import { loadFont as loadOutfit } from "@remotion/google-fonts/Outfit";
import { loadFont as loadUnbounded } from "@remotion/google-fonts/Unbounded";

const { fontFamily: displayFont } = loadUnbounded("normal", {
  weights: ["400", "600", "800"],
  subsets: ["latin"],
});
const { fontFamily: bodyFont } = loadOutfit("normal", {
  weights: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const { fontFamily: monoFont } = loadDMMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});

const stars = [
  [8, 13],
  [17, 21],
  [28, 9],
  [38, 17],
  [51, 8],
  [63, 18],
  [75, 11],
  [88, 20],
  [94, 9],
  [12, 39],
  [84, 42],
  [5, 66],
  [94, 70],
  [18, 81],
  [79, 86],
  [91, 92],
];

type VaporwaveFrameProps = {
  readonly children: ReactNode;
  readonly chapter: string;
  readonly number: string;
};

export const vaporwaveFonts = {
  body: bodyFont,
  display: displayFont,
  mono: monoFont,
};

export const VaporwaveFrame: React.FC<VaporwaveFrameProps> = ({
  children,
  chapter,
  number,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "#14072E",
        backgroundImage:
          "radial-gradient(ellipse at 50% 58%, rgba(255,79,216,0.24), transparent 47%), linear-gradient(180deg, #14072E 0%, #241048 41%, #3B1C7A 66%, #14072E 100%)",
        color: "#FFF3FF",
        fontFamily: bodyFont,
      }}
    >
      {stars.map(([left, top], index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            width: index % 4 === 0 ? 5 : 3,
            height: index % 4 === 0 ? 5 : 3,
            borderRadius: "50%",
            backgroundColor: index % 3 === 0 ? "#38F2FF" : "#FFF3FF",
            boxShadow: `0 0 12px ${index % 3 === 0 ? "#38F2FF" : "#C9A9FF"}`,
            opacity: 0.7,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: -100,
          right: -100,
          bottom: -155,
          height: 760,
          transform: "perspective(430px) rotateX(64deg)",
          transformOrigin: "bottom center",
          backgroundImage:
            "linear-gradient(rgba(56,242,255,0.38) 1px, transparent 1px), linear-gradient(90deg, rgba(56,242,255,0.38) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          maskImage: "linear-gradient(180deg, transparent 0%, #000 32%, #000 100%)",
          opacity: 0.58,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0 1px, transparent 1px 5px)",
          opacity: 0.38,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 30,
          border: "1px solid rgba(201,169,255,0.32)",
          boxShadow: "inset 0 0 35px rgba(56,242,255,0.035)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 76,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          color: "#C9A9FF",
          fontFamily: monoFont,
          fontSize: 18,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        <span>Archivo del tiempo</span>
        <span>{number} / 04</span>
      </div>
      {children}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#C9A9FF",
          fontFamily: monoFont,
          fontSize: 16,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        <span>{chapter}</span>
        <span style={{ color: "#38F2FF" }}>Mesoamérica · 1325</span>
      </div>
    </div>
  );
};
