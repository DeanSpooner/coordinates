import React from "react";

const Start = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <button onClick={() => setScreen("timerGame")}>Start</button>
      <button onClick={() => setScreen("timerGameHard")}>Start Hard</button>
    </div>
  );
};

export default Start;
