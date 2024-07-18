import styles from "../styles/question-intro.module.css";

export const QuestionIntro = () => {
  <div className={styles.container}>
    <h1 className={styles.header}>
      Section 1. <span className={styles.highlight}>General</span>
    </h1>
    <p className={styles.paragraph}>
      Understanding the industry context is crucial because digital maturity can
      vary significantly across different sectors. For example, a retail company
      might focus on enhancing the customer shopping experience through digital
      tools, while a healthcare organization might prioritize digital solutions
      for patient care and data management. Knowing the industry allows for a
      more tailored and relevant assessment.
    </p>
    <button className={styles.button} onClick={() => alert("Ok, got it")}>
      → Ok, got it
    </button>
  </div>;
};
