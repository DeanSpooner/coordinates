import { useEffect, useState } from "react";
import "./TimerScreen.css";
import { playSound } from "../utils/sounds";

const TimerScreen = ({
  currentScreen,
  setScreen,
}: {
  currentScreen: "timerGame" | "timerGameHard";
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const nextScreen = (() => {
    switch (currentScreen) {
      case "timerGame":
        return "game";
      case "timerGameHard":
        return "gameHard";
    }
  })();

  const [currentString, setCurrentString] = useState(0);

  const timerStrings = ["3", "2", "1", "GO"];

  useEffect(() => {
    playSound("beeps", 0.25);
  }, []);

  useEffect(() => {
    // Base case: If the countdown is completed, return early
    if (currentString >= timerStrings.length - 1) return;

    // Schedule the next update after 1 second
    const timeoutId = setTimeout(() => {
      // Update currentString to the next index
      setCurrentString(prevState => prevState + 1);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts or when the countdown is completed
    return () => clearTimeout(timeoutId);
  }, [currentString, timerStrings.length]);

  useEffect(() => {
    setTimeout(() => setScreen(nextScreen), 4000);
  }, [nextScreen, setScreen]);

  return (
    <div className="outer-container">
      <div className="loading-box-container">
        <div className="loading-box">
          <p style={{ fontSize: 120 }}>{timerStrings[currentString]}</p>
        </div>
      </div>
    </div>
  );
};

export default TimerScreen;
