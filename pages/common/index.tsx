import React from "react";
import ButtonCf from "../../components/button";
import styles from "../../styles//Home.module.css";
import Counter from "../features/counter";

const Demo = () => {
  return (
    <div>
      <div className={styles.description}>
        <h1>Button</h1>
        <ButtonCf variant="warning">warning</ButtonCf>
        <ButtonCf variant="default">default</ButtonCf>
      </div>
      <div className={styles.description}>
        <Counter />
      </div>
    </div>
  );
};

export default Demo;
