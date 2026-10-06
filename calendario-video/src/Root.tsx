import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { FuegoNuevoScene } from "./FuegoNuevoScene";
import { OpeningScene } from "./OpeningScene";
import { TonalpohualliScene } from "./TonalpohualliScene";
import { XiuhpohualliScene } from "./XiuhpohualliScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="EscenaIntroduccion"
        component={OpeningScene}
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
        id="EscenaXiuhpohualli"
        component={XiuhpohualliScene}
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
    </>
  );
};
