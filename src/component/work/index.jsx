import { useState } from "react";
import styles from "./style.module.css";

const Work = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Клик</button>
    </div>
  );
};

export default Work;
