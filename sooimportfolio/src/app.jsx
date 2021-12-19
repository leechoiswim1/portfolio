import React from "react";
import styles from "./app.module.css";
import { Firstpage } from "./components/firstpage/firstpage";
import { Fifthpage } from "./components/fifthpage/fifthpage";
function App() {
  return (
    <div className={styles.display}>
      <div className={styles.Wrapper}>
        <Firstpage />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.normalFont}>About myself</p>
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.normalFont}>Work Skill</p>
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.timeLine.rightPage}>
          <div className={styles.timeBox.rightBox}>
            <p className={styles.timedesc}> 포트폴리오사이트</p>
            <div className={styles.circle.rightCircle} />
          </div>
        </div>
      </div>
      <div className={styles.Wrapper}>
        <Fifthpage />
      </div>
    </div>
  );
}

export default App;
