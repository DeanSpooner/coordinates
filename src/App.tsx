import { useState } from "react";
import "./App.css";
import Start from "./screens/Start";
import GameScreen from "./screens/GameScreen";
import ReactHowler from "react-howler";
import { getMusicPath } from "./utils/music";
import styled from "styled-components";
import Speaker from "./assets/Speaker";
import MusicSymbol from "./assets/MusicSymbol";
import TimerScreen from "./screens/TimerScreen";

function App() {
  const [screen, setScreen] = useState("start");

  const [isMusicMuted, setIsMusicMuted] = useState(true);

  // Update to useState when multiple tracks are available:
  const track = getMusicPath("wonder");

  const [isSfxMuted, setIsSfxMuted] = useState(true);

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
      {(screen === "timerGame" || screen === "timerGameHard") && (
        <TimerScreen
          setScreen={setScreen}
          currentScreen={screen}
          isSfxMuted={isSfxMuted}
        />
      )}
      {(screen === "game" || screen === "gameHard") && (
        <GameScreen
          setScreen={setScreen}
          isSfxMuted={isSfxMuted}
          isHard={screen === "gameHard"}
        />
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
