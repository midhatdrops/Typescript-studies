import React from "react";
import Contador from "./Components/Contador/index";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Contador valorInicial={1234} />
    </div>
  );
}

export default App;
