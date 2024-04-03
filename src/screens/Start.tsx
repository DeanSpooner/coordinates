import React from "react";

const Start = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <button onClick={() => setScreen("game")}>Start</button>
      <button onClick={() => setScreen("gameHard")}>Start Hard</button>
    </div>
  );
};

export default Start;
