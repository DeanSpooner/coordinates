import { useState } from "react";
import "./App.css";
import Start from "./screens/Start";
import GameScreen from "./screens/GameScreen";

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <>
      {screen === "start" && <Start setScreen={setScreen} />}
      {screen === "game" && <GameScreen setScreen={setScreen} />}
    </>
  );
}

export default App;
