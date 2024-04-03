import sounds from "./sounds.json";

type SoundName = keyof typeof sounds;

// Determine the base path dynamically based on the environment
const basePath = process.env.NODE_ENV === "development" ? "public/" : "./";

export const playSound = (soundName: SoundName) => {
  const soundPath = `${basePath}${sounds[soundName]}`;

  const audio = new Audio(soundPath);
  audio.play();
};
