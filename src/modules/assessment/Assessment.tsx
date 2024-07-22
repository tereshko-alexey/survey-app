import { useContext, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { AssessmentProgressContext } from "contexts/AssessmentProgressContext";
import { ReactComponent as CrossIconSvg } from "assets/cross.svg";

const cx = classNames.bind(styles);

const Assessment = () => {
  const { maturity } = useContext(AssessmentProgressContext);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    console.log("Close assessment");
    setCollapsed(true);
  };

  const onExpand = () => {
    setCollapsed(false);
  };

  if (collapsed) {
    return (
      <div
        className={cx([styles.assessment, styles.expandButton])}
        onClick={onExpand}
      >
        <p>{`>`}</p>
      </div>
    );
  }

  return (
    <div className={styles.assessment}>
      <div className={styles.crossButton} onClick={onCollapse}>
        <CrossIconSvg />
      </div>
      <div className={styles.header}>
        <h1>You're on this stage now.</h1>
        <p>
          Keep answering and see what you reach by the end of the assessment
        </p>
      </div>
      <div className={styles.barContainer}>
        <div className={styles.bar}>
          <div
            className={cx([styles.fill, styles.customer])}
            style={{ height: `${maturity.customer.score * 100}%` }}
          ></div>
          <p>Customer</p>
        </div>
        <div className={styles.bar}>
          <div
            className={cx([styles.fill, styles.strategy])}
            style={{ height: `${maturity.strategy.score * 100}%` }}
          ></div>
          <p>Strategy</p>
        </div>
        <div className={styles.bar}>
          <div
            className={cx([styles.fill, styles.technology])}
            style={{ height: `${maturity.technology.score * 100}%` }}
          ></div>
          <p>Technology</p>
        </div>
        <div className={styles.bar}>
          <div
            className={cx([styles.fill, styles.operations])}
            style={{ height: `${maturity.operations.score * 100}%` }}
          ></div>
          <p>Operations</p>
        </div>
        <div className={styles.bar}>
          <div
            className={cx([styles.fill, styles.organization])}
            style={{ height: `${maturity.organization.score * 100}%` }}
          ></div>
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
