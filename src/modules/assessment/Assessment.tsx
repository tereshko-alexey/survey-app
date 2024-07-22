import classNames from "classnames";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

const Assessment = () => {
  return (
    <div className={styles.assessment}>
      <div className={styles.header}>
        <h1>You're on this stage now.</h1>
        <p>
          Keep answering and see what you reach by the end of the assessment
        </p>
      </div>
      <div className={styles.barContainer}>
        <div className={styles.bar}>
          <div className={cx([styles.fill, styles.customer])}></div>
          <p>Customer</p>
        </div>
        <div className={styles.bar}>
          <div className={cx([styles.fill, styles.strategy])}></div>
          <p>Strategy</p>
        </div>
        <div className={styles.bar}>
          <div className={cx([styles.fill, styles.technology])}></div>
          <p>Technology</p>
        </div>
        <div className={styles.bar}>
          <div className={cx([styles.fill, styles.operations])}></div>
          <p>Operations</p>
        </div>
        <div className={styles.bar}>
          <div className={cx([styles.fill, styles.organization])}></div>
          <p>Organization & Culture</p>
        </div>
      </div>
      <div className={styles.footer}>
        <button>→ Interesting! Take me to the questions</button>
      </div>
    </div>
  );
};

export default Assessment;
