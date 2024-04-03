import sounds from "./sounds.json";

type SoundName = keyof typeof sounds;

// Determine the base path dynamically based on the environment
const basePath = process.env.NODE_ENV === "production" ? "./" : "src/";

export const playSound = (soundName: SoundName) => {
  const soundPath = `${basePath}${sounds[soundName]}`;

  if (!soundPath) {
    console.error(`Sound "${soundName}" not found in sounds.json`);
    return;
  }

  const sound = new Howl({
    src: [soundPath],
    preload: true,
  });

  sound.play();
};
