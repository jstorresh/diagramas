import type { ReactNode } from "react";

type SceneFrameProps = {
  readonly children: ReactNode;
  readonly chapter: string;
  readonly number: string;
};

export const SceneFrame: React.FC<SceneFrameProps> = ({ children, chapter, number }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
          backgroundColor: "#1b1a18",
        color: "#e9e2d7",
        fontFamily: "Georgia, 'Times New Roman', serif",
          backgroundImage:
            "radial-gradient(ellipse at 50% 44%, rgba(92,57,37,0.18), transparent 63%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 7px, rgba(225,215,199,0.16) 8px, transparent 9px), repeating-linear-gradient(92deg, transparent 0 13px, rgba(225,215,199,0.1) 14px, transparent 15px)",
          backgroundSize: "100% 17px, 23px 100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "1px solid rgba(233,226,215,0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 63,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          color: "#b4aaa0",
          fontFamily: "Arial, sans-serif",
          fontSize: 15,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        <span>Archivo del tiempo</span>
        <span>{number} — 04</span>
      </div>
      {children}
      <div
        style={{
          position: "absolute",
          bottom: 55,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "center",
          color: "#827c73",
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        <span>{chapter} · Mesoamérica</span>
      </div>
    </div>
  );
};