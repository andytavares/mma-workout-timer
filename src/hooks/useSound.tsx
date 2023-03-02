import React from "react";

const useSound = () => {
  return {
    play: (file: any, repeats: number) => {
      const sound = new Audio(file);

      const fnSoundRepeat = () => {
        repeats--;
        sound.currentTime = 0;
        if (repeats > 0) sound.play();
        else sound.removeEventListener("ended", fnSoundRepeat);
      };

      sound.addEventListener("ended", fnSoundRepeat);
      sound.play();
    },
  };
};

export default useSound;
