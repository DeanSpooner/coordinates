import { useEffect, useState } from "react";
import "./App.css";
import Start from "./screens/Start";
import GameScreen from "./screens/GameScreen";
import ReactHowler from "react-howler";
import { getMusicPath } from "./utils/music";
import styled from "styled-components";
import Speaker from "./assets/Speaker";
import MusicSymbol from "./assets/MusicSymbol";
import TimerScreen from "./screens/TimerScreen";
import ScoreScreen from "./screens/ScoreScreen";
import HomeSymbol from "./assets/HomeSymbol";

function App() {
  const [screen, setScreen] = useState("start");

  const [sliderShown, setSliderShown] = useState(false);

  const [isMusicMuted, setIsMusicMuted] = useState(true);

  // Update to useState when multiple tracks are available:
  const track = getMusicPath("wonder");

  const [isSfxMuted, setIsSfxMuted] = useState(true);

  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    setSliderShown(true);
    setTimeout(() => setSliderShown(false), 300);
  }, [screen]);

  return (
    <>
      <Slider sliderShown={sliderShown} />
      <Wrapper sliderShown={sliderShown}>
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
        <SoundButton onClick={() => screen !== "start" && setScreen("start")}>
          <HomeSymbol
            style={{
              height: "8vh",
              width: "8vh",
            }}
          />
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
            setFinalScore={setFinalScore}
          />
        )}
        {screen === "score" && (
          <ScoreScreen setScreen={setScreen} finalScore={finalScore} />
        )}
      </Wrapper>
    </>
  );
}

export default App;

const SoundButton = styled.button`
  width: 150px;
  max-width: 30vw;
  height: 10vh;
`;

const Slider = styled.div<{ sliderShown: boolean }>`
  background-color: #fccd40;
  position: absolute;
  width: 100vw;
  height: 100vh;
  bottom: ${props => (props.sliderShown ? "0" : "100vh")};
  left: 0;
  z-index: 2;
  transition: bottom 0.3s ease-in-out; /* Add transition for smoother effect */
`;

const Wrapper = styled.div<{ sliderShown: boolean }>`
  opacity: ${props => (props.sliderShown ? "0" : "1")};

  z-index: ${props =>
    props.sliderShown
      ? "0"
      : "1"}; /* Ensure wrapper is above everything when slider is shown */
  pointer-events: ${props =>
    props.sliderShown
      ? "none"
      : "auto"}; /* Allow interaction when slider is shown */
`;
