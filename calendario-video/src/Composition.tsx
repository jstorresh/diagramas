import { Audio } from "@remotion/media";
import { Composition, Series, staticFile, useVideoConfig } from "remotion";
import { FuegoNuevoScene } from "./FuegoNuevoScene";
import { OpeningScene } from "./OpeningScene";
import { TonalpohualliScene } from "./TonalpohualliScene";
import { XiuhpohualliScene } from "./XiuhpohualliScene";

export const MyComposition = () => {
  return (
    <Composition
      id="CalendarioAzteca"
      component={AztecCalendarVideo}
      durationInFrames={1980}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

export const AztecCalendarVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Audio name="Locución" src={staticFile("locucion.mp3")} premountFor={fps} />
      <Series>
        <Series.Sequence name="Introduccion" durationInFrames={390} premountFor={fps}>
          <OpeningScene />
        </Series.Sequence>
        <Series.Sequence name="Tonalpohualli" durationInFrames={555} premountFor={fps}>
          <TonalpohualliScene />
        </Series.Sequence>
        <Series.Sequence name="Xiuhpohualli" durationInFrames={450} premountFor={fps}>
          <XiuhpohualliScene />
        </Series.Sequence>
        <Series.Sequence name="FuegoNuevo" durationInFrames={585} premountFor={fps}>
          <FuegoNuevoScene />
        </Series.Sequence>
      </Series>
    </>
  );
};
