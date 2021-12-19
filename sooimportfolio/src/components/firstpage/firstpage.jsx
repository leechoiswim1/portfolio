import React from "react";
import styles from "./firstpage.module.css";
import imageprofile from "../../images/profileImage.png";
import imagecloud from "../../images/cloudImage.jpg";
export const Firstpage = () => {
  return (
    <>
      <img className={styles.outimage} src={imagecloud} alt="imagecloud" />
      <img className={styles.image} src={imageprofile} alt="imageprofile" />

      <div className={styles.Box}>
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.whiteBackground}>
          <p>FRONT-END DEVELOPER SOOIM CHOI</p>
        </div>

        <div className={styles.WrapBox}>
          <div className={styles.InnerBox}>
            <div className={styles.Font}>P</div>
            <div className={styles.Font}>O</div>
            <div className={styles.Font}>R</div>
          </div>
          <div className={styles.InnerBox}>
            <span className={styles.Font}>T </span>
            <span className={styles.Font}>F </span>
          </div>
        </div>
        <div className={`${styles.WrapBox} ${styles.FinalWord}`}>
          <div className={styles.InnerBox}>
            <div className={styles.Font}>O</div>
            <div className={styles.Font}>L</div>
            <div className={styles.Font}>I</div>
            <div className={styles.Font}>O</div>
          </div>
        </div>
      </div>
    </>
  );
};
