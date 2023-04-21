import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  const result = [];

  for (let i = 0; i < colorName.length; i++) {
    if (colorName.charAt(i) === colorName.charAt(i).toUpperCase()) {
      result.push(" ");
      result.push(colorName.charAt(i));
    } else {
      result.push(colorName.charAt(i));
    }
  }

  return result.join("").trim();
}

// Lecture solution:
// return colorName.replace(/\B( [A-Z] )\/g, ' $1');

function App() {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const newColor = buttonColor === "red" ? "blue" : "red";
  const handleDisable = (e) => setDisableButton(e.target.checked);

  return (
    <div>
      <button
        disabled={disableButton}
        style={{ backgroundColor: disableButton ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newColor)}
      >
        Change to {newColor}
      </button>

      <br />

      <label htmlFor="disable-checkbox">Disable button</label>

      <input
        type="checkbox"
        id="disable-checkbox"
        checked={disableButton}
        onChange={handleDisable}
      />
    </div>
  );
}

export default App;
