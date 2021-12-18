import React from "react";
import styles from "./firstpage.module.css";
import imageprofile from "../../images/profileImage.png";
export const Firstpage = () => {
  return (
    <>
      <div className={styles.Box}>
        <img className={styles.image} src={imageprofile} alt="imageprofile" />
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.white} />
        <div className={styles.WrapBox}>
          <div className={styles.InnerBox}>
            <div className={styles.Font}>P</div>
            <div className={styles.Font}>O</div>
            <div className={styles.Font}>R</div>
          </div>
          <div className={styles.InnerBox}>
            <span className={styles.Font}>T </span>
            <span className={styles.Font}>P </span>
          </div>
          <div className={styles.BackgroundWhite}>
            <div className={`${styles.InnerBox} ${styles.important}`}>
              <div className={styles.Font}>O </div>
              <div className={styles.Font}>L</div>
              <div className={styles.Font}>I</div>
              <div className={styles.Font}>O</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
