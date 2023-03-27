import { useState } from "react";
import "./App.css";

function App() {
  const [buttonProps, setButtonProps] = useState({
    backgroundColor: "red",
    text: "Change to blue",
  });

  const handleButtonClick = () => {
    if (buttonProps.backgroundColor === "red") {
      setButtonProps({
        backgroundColor: "blue",
        text: "Change to red",
      });

      return;
    }

    setButtonProps({
      backgroundColor: "red",
      text: "Change to blue",
    });
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonProps.backgroundColor }}
        onClick={handleButtonClick}
      >
        {buttonProps.text}
      </button>
    </div>
  );
}

export default App;
