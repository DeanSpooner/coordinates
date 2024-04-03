import sounds from "./sounds.json";

type SoundName = keyof typeof sounds;

// Determine the base path dynamically based on the environment
const basePath = process.env.NODE_ENV === "development" ? "public/" : "./";

export const playSound = (soundName: SoundName, volume?: number) => {
  const soundPath = `${basePath}${sounds[soundName]}`;

  const audio = new Audio(soundPath);

  audio.volume = volume ?? 1;

  audio.play();
};
