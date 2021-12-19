import React from "react";
import styles from "./fifthpage.module.css";
export const Fifthpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.main} ${styles.left}`}>
        <p className={styles.Font}>
          Let's
          <br /> Work
          <br /> with
          <br /> Me!
        </p>
      </div>

      <div className={`${styles.main} ${styles.right}`}></div>
    </div>
  );
};
