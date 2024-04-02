import { useCallback, useEffect, useState } from "react";
import ArrowSvg from "./assets/arrow.svg"; // Importing the SVG file
import "./App.css";

function App() {
  const [direction, setDirection] = useState("up");

  const [rotation, setRotation] = useState(90);

  const [coordinates, setCoordinates] = useState([0, 0]);

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
        return [prevCoordinates[0], prevCoordinates[1] + 1]; // Increase y coordinate when moving up
      }
      if (direction === "right") {
        return [prevCoordinates[0] + 1, prevCoordinates[1]]; // Increase x coordinate when moving right
      }
      if (direction === "down") {
        return [prevCoordinates[0], prevCoordinates[1] - 1]; // Decrease y coordinate when moving down
      }
      return [prevCoordinates[0] - 1, prevCoordinates[1]]; // Decrease x coordinate when moving left
    });
  }, [setCoordinates, direction]);

  const downKey = useCallback(() => {
    setCoordinates(prevCoordinates => {
      if (direction === "up") {
        return [prevCoordinates[0], prevCoordinates[1] - 1]; // Decrease y coordinate when facing up
      }
      if (direction === "right") {
        return [prevCoordinates[0] - 1, prevCoordinates[1]]; // Decrease x coordinate when facing right
      }
      if (direction === "down") {
        return [prevCoordinates[0], prevCoordinates[1] + 1]; // Increase y coordinate when facing down
      }
      return [prevCoordinates[0] + 1, prevCoordinates[1]]; // Increase x coordinate when facing left
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

  return (
    <div>
      <p>Press the left or right arrow key:</p>
      <p>
        Direction: <strong>{direction}</strong>
      </p>
      <p>
        Coordinates: x {coordinates[0]}, y {coordinates[1]}
      </p>
      <button onClick={() => upKey()}>UP</button>
      <button onClick={() => leftKey()}>LEFT</button>
      <button onClick={() => rightKey()}>RIGHT</button>
      <button onClick={() => downKey()}>DOWN</button>
      <img
        src={ArrowSvg}
        alt="Arrow"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
          maxHeight: "20vh",
        }}
      />
    </div>
  );
}

export default App;
