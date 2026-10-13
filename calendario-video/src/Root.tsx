import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { FuegoNuevoScene } from "./FuegoNuevoScene";
import { OpeningScene } from "./OpeningScene";
import { TonalpohualliScene } from "./TonalpohualliScene";
import { XiuhpohualliScene } from "./XiuhpohualliScene";
import { VaporwaveVideo, vaporwaveDurationInFrames } from "./vaporwave/VaporwaveVideo";
import { VaporwaveFireScene } from "./vaporwave/VaporwaveFireScene";
import { VaporwaveIntroScene } from "./vaporwave/VaporwaveIntroScene";
import { VaporwaveSolarScene } from "./vaporwave/VaporwaveSolarScene";
import { VaporwaveTonalScene } from "./vaporwave/VaporwaveTonalScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="CalendarioAztecaVaporwave"
        component={VaporwaveVideo}
        durationInFrames={vaporwaveDurationInFrames}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="EscenaIntroduccion"
        component={OpeningScene}
        durationInFrames={390}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VaporwaveIntroduccion"
        component={VaporwaveIntroScene}
        durationInFrames={390}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="EscenaTonalpohualli"
        component={TonalpohualliScene}
        durationInFrames={555}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VaporwaveTonalpohualli"
        component={VaporwaveTonalScene}
        durationInFrames={555}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="EscenaXiuhpohualli"
        component={XiuhpohualliScene}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VaporwaveXiuhpohualli"
        component={VaporwaveSolarScene}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="EscenaFuegoNuevo"
        component={FuegoNuevoScene}
        durationInFrames={585}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VaporwaveFuegoNuevo"
        component={VaporwaveFireScene}
        durationInFrames={585}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
