import { useState } from "react";
import "./App.css";
import Start from "./screens/Start";
import GameScreen from "./screens/GameScreen";
import ReactHowler from "react-howler";
import { getMusicPath } from "./utils/music";
import styled from "styled-components";
import Speaker from "./assets/Speaker";
import MusicSymbol from "./assets/MusicSymbol";

function App() {
  const [screen, setScreen] = useState("start");

  const [isMusicMuted, setIsMusicMuted] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [track, setTrack] = useState(getMusicPath("wonder"));

  const [isSfxMuted, setIsSfxMuted] = useState(false);

  return (
    <>
      <SoundButton onClick={() => setIsMusicMuted(prevState => !prevState)}>
        {isMusicMuted ? (
          <MusicSymbol
            style={{
              height: "8vh",
              width: "8vh",
            }}
            fillColor="grey"
          />
        ) : (
          <MusicSymbol
            style={{
              height: "8vh",
              width: "8vh",
            }}
          />
        )}
      </SoundButton>
      <SoundButton onClick={() => setIsSfxMuted(prevState => !prevState)}>
        {isSfxMuted ? (
          <Speaker
            style={{
              height: "8vh",
              width: "8vh",
            }}
            fillColor="grey"
          />
        ) : (
          <Speaker
            style={{
              height: "8vh",
              width: "8vh",
            }}
          />
        )}
      </SoundButton>
      <ReactHowler
        src={track}
        volume={0.5}
        loop
        preload
        mute={isMusicMuted}
        playing={!isMusicMuted}
      />
      {screen === "start" && <Start setScreen={setScreen} />}
      {screen === "game" && (
        <GameScreen setScreen={setScreen} isSfxMuted={isSfxMuted} />
      )}
    </>
  );
}

export default App;

const SoundButton = styled.button`
  width: 40vw;
  max-width: 200px;
  height: 10vh;
`;
