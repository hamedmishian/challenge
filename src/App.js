import "./App.css";
import Page from "./Pages/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Page />
      </div>
    </Router>
  );
}

export default App;
