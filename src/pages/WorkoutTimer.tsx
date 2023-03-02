import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import Timer from "../components/Timer/Timer";
import { AppContext } from "../contexts/AppContext/AppContext";
import "./Tab1.css";

const WorkoutTimer: React.FC = () => {
  const { workoutLength, difficulty } = useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Workout Timer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Timer workoutLength={workoutLength} difficulty={difficulty} />
      </IonContent>
    </IonPage>
  );
};

export default WorkoutTimer;
