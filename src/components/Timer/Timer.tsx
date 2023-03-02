import { useTimer } from "use-timer";
import moment from "moment";
import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContext";
import { workouts } from "../../resources/workouts";
import useSpeech from "../../hooks/useSpeech";
const bell = require("../../sounds/bell.mp3");
const sticks = require("../../sounds/sticks.wav");

interface ITimerProps {
  workoutLength: number;
  difficulty: number;
}

const Timer = ({ workoutLength, difficulty }: ITimerProps) => {
  const { say, cancel } = useSpeech();
  const toDo = workouts;
  const { nextCallout, setNextCallout } = useContext(AppContext);
  const { time, start, pause, reset, status } = useTimer({
    initialTime: workoutLength,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeUpdate: () => {
      const el = Math.floor(Math.random() * toDo.length);

      // if (time === 10) {
      //   const stickSound = new Audio(sticks);
      //   playSticks(3, stickSound);
      // }
      if (workoutLength - time === nextCallout * difficulty) {
        say(toDo[el].name);
        setNextCallout(workoutLength - time + toDo[el].time);
      }
    },
    onTimeOver: () => {
      if (time === 0) {
        cancel();
        const bellSound = new Audio(bell);
        bellSound.play();
      }
    },
  });

  const pauseTimer = () => {
    cancel();
    pause();
  };
  const resetTimer = () => {
    setNextCallout(null);
    cancel();
    reset();
  };
  const startTimer = () => {
    const bellSound = new Audio(bell);
    bellSound.play();
    start();
  };
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12" className="ion-text-center">
          <h1>{moment.utc(time * 1000).format("HH:mm:ss")}</h1>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" className="ion-text-center">
          {status !== "RUNNING" ? (
            <IonButton onClick={startTimer}>Start</IonButton>
          ) : null}
          {status !== "PAUSED" ? (
            <IonButton onClick={pauseTimer}>Pause</IonButton>
          ) : null}
          {status === "PAUSED" ? (
            <IonButton onClick={resetTimer}>Reset</IonButton>
          ) : null}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Timer;
