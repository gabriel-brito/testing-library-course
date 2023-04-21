import { useState } from "react";
import "./App.css";

function App() {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const newColor = buttonColor === "red" ? "blue" : "red";
  const handleDisable = (e) => setDisableButton(e.target.checked);

  return (
    <div>
      <button
        disabled={disableButton}
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newColor)}
      >
        Change to {newColor}
      </button>

      <input type="checkbox" checked={disableButton} onChange={handleDisable} />
    </div>
  );
}

export default App;
