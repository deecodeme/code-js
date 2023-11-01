import { useState } from "react";
import Alert from "./Alert";

interface props {
  color?: 'primary' | 'secondary' | 'danger'
  text: string;
  onButtonClick: (message: string) => void;
}

const Button = ({ color='primary', text, onButtonClick }: props) => {
  const [afterClick, setAfterClick] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Close this alert</Alert>}
    <button
      className={'btn btn-' +color}
      onClick={() => {
        onButtonClick("button clicked");
        setAfterClick("Clicked!");
        setAlertVisibility(true)
      }}
    >
      {afterClick ? afterClick : text}
    </button>
    </>
  );
};

export default Button;
