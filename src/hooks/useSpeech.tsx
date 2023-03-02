import React from "react";

const useSpeech = () => {
  return {
    say: (text: string) => {
      const speechSynthesisUtterance = new SpeechSynthesisUtterance();
      speechSynthesisUtterance.volume = 1;
      speechSynthesisUtterance.text = text;
      speechSynthesisUtterance.lang = "en-US";
      window.speechSynthesis.speak(speechSynthesisUtterance);
    },
    cancel: () => window.speechSynthesis.cancel(),
  };
};

export default useSpeech;
