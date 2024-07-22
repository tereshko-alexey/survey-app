import { AssessmentProgressProvider } from "contexts/AssessmentProgressContext";
import "./App.css";
import { Map } from "./modules/map/Map";
import Assessment from "modules/assessment/Assessment";

function App() {
  return (
    <AssessmentProgressProvider>
      <Map />
      <Assessment />
    </AssessmentProgressProvider>
  );
}

export default App;
