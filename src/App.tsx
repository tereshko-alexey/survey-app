import { AssessmentProgressProvider } from "contexts/AssessmentProgressContext";
import "./App.css";
import { Map } from "./modules/map/Map";

function App() {
  return (
    <AssessmentProgressProvider>
      <Map />
    </AssessmentProgressProvider>
  );
}

export default App;
