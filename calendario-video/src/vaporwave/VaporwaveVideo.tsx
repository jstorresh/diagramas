import { Audio } from "@remotion/media";
import { Series, staticFile, useVideoConfig } from "remotion";
import { VaporwaveFireScene } from "./VaporwaveFireScene";
import { VaporwaveIntroScene } from "./VaporwaveIntroScene";
import { VaporwaveSolarScene } from "./VaporwaveSolarScene";
import { VaporwaveTonalScene } from "./VaporwaveTonalScene";

export const vaporwaveDurationInFrames = 1980;

export const VaporwaveVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Audio name="Locución" src={staticFile("locucion.mp3")} premountFor={fps} />
      <Series>
        <Series.Sequence name="Introducción Vaporwave" durationInFrames={390} premountFor={fps}>
          <VaporwaveIntroScene />
        </Series.Sequence>
        <Series.Sequence name="Tonalpohualli Vaporwave" durationInFrames={555} premountFor={fps}>
          <VaporwaveTonalScene />
        </Series.Sequence>
        <Series.Sequence name="Xiuhpohualli Vaporwave" durationInFrames={450} premountFor={fps}>
          <VaporwaveSolarScene />
        </Series.Sequence>
        <Series.Sequence name="Fuego Nuevo Vaporwave" durationInFrames={585} premountFor={fps}>
          <VaporwaveFireScene />
        </Series.Sequence>
      </Series>
    </>
  );
};
