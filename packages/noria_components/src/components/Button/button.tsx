// "use client";

import { useState } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  
  const [counter, setCounter] = useState(0);  

  return (
    <button onClick={() => setCounter(counter + 1)} className={styles.button}>
      {name} : {counter}
    </button>
  );
};

export default Button;
