import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ArrowStraight from "../assets/ArrowStraight";
import ArrowTurn from "../assets/ArrowTurn";
import Chevron from "../assets/Chevron";
import { randomInteger, integerRange } from "../utils/number";
import { playSound } from "../utils/sounds";

const GameScreen = ({
  setScreen,
  setFinalScore,
  isSfxMuted,
  isHard = false,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setFinalScore: React.Dispatch<React.SetStateAction<number>>;
  isSfxMuted: boolean;
  isHard?: boolean;
}) => {
  const [direction, setDirection] = useState("up");

  const [rotation, setRotation] = useState(90);

  const [coordinates, setCoordinates] = useState([2, 2]);

  const [timer, setTimer] = useState(30);

  const xOrY = randomInteger(0, 1);
  const selectedCells = randomInteger(0, 4, [2]);

  const [deadCells, setDeadCells] = useState(
    isHard ? (xOrY === 0 ? [selectedCells, -1] : [-1, selectedCells]) : [-1, -1]
  );

  const [deadCellsActive, setDeadCellsActive] = useState(false);

  const [deadCellTimer, setDeadCellTimer] = useState(5000);

  const [pelletCoordinates, setPelletCoordinates] = useState([
    randomInteger(0, 4, [2]),
    randomInteger(0, 4, [2]),
  ]);

  const [score, setScore] = useState(0);

  const leftKey = useCallback(() => {
    setRotation(prevRotation => prevRotation - 90);
    setDirection(prevDirection => {
      if (prevDirection === "up") return "left";
      if (prevDirection === "left") return "down";
      if (prevDirection === "down") return "right";
      return "up";
    });
  }, [setRotation, setDirection]);

  const rightKey = useCallback(() => {
    setRotation(prevRotation => prevRotation + 90);
    setDirection(prevDirection => {
      if (prevDirection === "up") return "right";
      if (prevDirection === "right") return "down";
      if (prevDirection === "down") return "left";
      return "up";
    });
  }, [setRotation, setDirection]);

  const upKey = useCallback(() => {
    setCoordinates(prevCoordinates => {
      if (direction === "up") {
        return prevCoordinates[1] === 0
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0], prevCoordinates[1] - 1]; // Decrease y coordinate when moving up
      }
      if (direction === "right") {
        return prevCoordinates[0] === 4
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0] + 1, prevCoordinates[1]]; // Increase x coordinate when moving right
      }
      if (direction === "down") {
        return prevCoordinates[1] === 4
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0], prevCoordinates[1] + 1]; // Increase y coordinate when moving down
      }
      return prevCoordinates[0] === 0
        ? [prevCoordinates[0], prevCoordinates[1]]
        : [prevCoordinates[0] - 1, prevCoordinates[1]]; // Decrease x coordinate when moving left
    });
  }, [setCoordinates, direction]);

  const downKey = useCallback(() => {
    setCoordinates(prevCoordinates => {
      if (direction === "up") {
        return prevCoordinates[1] === 4
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0], prevCoordinates[1] + 1]; // Increase y coordinate when facing up
      }
      if (direction === "right") {
        return prevCoordinates[0] === 0
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0] - 1, prevCoordinates[1]]; // Decrease x coordinate when facing right
      }
      if (direction === "down") {
        return prevCoordinates[1] === 0
          ? [prevCoordinates[0], prevCoordinates[1]]
          : [prevCoordinates[0], prevCoordinates[1] - 1]; // Decrease y coordinate when facing down
      }
      return prevCoordinates[0] === 4
        ? [prevCoordinates[0], prevCoordinates[1]]
        : [prevCoordinates[0] + 1, prevCoordinates[1]]; // Increase x coordinate when facing left
    });
  }, [setCoordinates, direction]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          leftKey();
          break;
        case "ArrowRight":
          rightKey();
          break;
        case "ArrowUp":
          upKey();
          break;
        case "ArrowDown":
          downKey();
          break;
        default:
          // No change for other keys
          break;
      }
    },
    [leftKey, rightKey, upKey, downKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // Add handleKeyDown as a dependency

  useEffect(() => {
    if (
      coordinates[0] === pelletCoordinates[0] &&
      coordinates[1] === pelletCoordinates[1]
    ) {
      setPelletCoordinates([
        randomInteger(0, 4, [coordinates[0]]),
        randomInteger(0, 4, [coordinates[1]]),
      ]);
      setScore(score + 1);
      !isSfxMuted && playSound("point");
    }
    if (
      (coordinates[0] === deadCells[0] || coordinates[1] === deadCells[1]) &&
      deadCellsActive
    ) {
      setScore(0);
    }
  }, [
    coordinates,
    deadCells,
    deadCellsActive,
    isSfxMuted,
    pelletCoordinates,
    score,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isHard) {
        const xOrY = randomInteger(0, 1);
        const selectedCells = randomInteger(0, 4, [deadCells[xOrY]]);
        setDeadCells(xOrY === 0 ? [selectedCells, -1] : [-1, selectedCells]);
        setDeadCellsActive(false);
      }
    }, deadCellTimer);

    const newTimer = randomInteger(2, 7) * 1000;
    setDeadCellTimer(newTimer); // Set the new timer value

    return () => clearInterval(intervalId);
  }, [deadCellTimer, deadCells, isHard]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevState => prevState - 1);
    }, 1000);

    if (timer === -1) {
      setScreen("score");
      setFinalScore(score);
    }

    return () => clearInterval(intervalId);
  }, [score, setFinalScore, setScreen, timer]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDeadCellsActive(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [deadCells]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "1.5em" }}>
          Score: <strong>{score}</strong>
        </p>
        <p style={{ fontSize: "1.5em" }}>
          Time left: <strong>{timer}</strong>
        </p>
      </div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        {integerRange(0, 4).map(arr => {
          return (
            <div style={{ flexDirection: "row", display: "flex" }} key={arr}>
              {integerRange(0, 4).map(num => {
                return (
                  <Cell
                    num={num}
                    arr={arr}
                    key={num}
                    isDeadCell={num === deadCells[0] || arr === deadCells[1]}
                  >
                    {coordinates[0] === num && coordinates[1] === arr ? (
                      <Chevron
                        style={{
                          transform: `rotate(${rotation}deg)`,
                          transition: "transform 0.3s ease",
                          height: "6vmin",
                          width: "6vmin",
                        }}
                      />
                    ) : pelletCoordinates[0] === num &&
                      pelletCoordinates[1] === arr ? (
                      <Pellet />
                    ) : (
                      <></>
                    )}
                  </Cell>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <DirectionButton onClick={() => upKey()}>
          <ArrowStraight
            style={{
              height: "8vh",
              width: "8vh",
            }}
          />
        </DirectionButton>
        <div>
          <DirectionButton onClick={() => leftKey()}>
            <ArrowTurn
              style={{
                height: "8vh",
                width: "8vh",
                transform: "rotate(90deg) scaleY(-1)",
              }}
            />
          </DirectionButton>
          <DirectionButton onClick={() => rightKey()}>
            <ArrowTurn
              style={{
                height: "8vh",
                width: "8vh",
                transform: "rotate(90deg)",
              }}
            />
          </DirectionButton>
        </div>
        <DirectionButton onClick={() => downKey()}>
          <ArrowStraight
            style={{
              height: "8vh",
              width: "8vh",
              transform: "scaleY(-1)",
            }}
          />
        </DirectionButton>
      </div>
    </div>
  );
};

const Cell = styled.div<{ num?: number; arr?: number; isDeadCell?: boolean }>`
  display: flex;
  border: 2px solid #4169e2;
  border-right-width: ${props => (props.num === 4 ? "2px" : 0)};
  border-bottom-width: ${props => (props.arr === 4 ? "2px" : 0)};
  width: 8vmin;
  height: 8vmin;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDeadCell ? "red" : "transparent")};
  transition: background-color 1s ease-in-out; /* Add transition for smoother effect */
`;

const DirectionButton = styled.button`
  width: 40vw;
  max-width: 200px;
  height: 10vh;
`;

const Pellet = styled.div`
  width: 5vmin;
  height: 5vmin;
  border: 2px solid mediumspringgreen;
  border-radius: 50%;
  background-color: #fccd40;
`;

export default GameScreen;
