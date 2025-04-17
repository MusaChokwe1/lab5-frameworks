import { useState } from "react";

function WelcomeMessage(props) {
  return <h1>Hello, {props.name}! Welcome to React.</h1>;
}

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  const toggle = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button
        onClick={toggle}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && (
        <p>This message is being toggled with React's useState hook!</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <WelcomeMessage name="Student" />
      <ToggleMessage />
    </div>
  );
}
