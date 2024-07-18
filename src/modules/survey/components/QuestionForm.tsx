import styles from "../styles/question-form.module.css";

export const QuestionForm = () => {
  return (
    <div>
      <div className={styles.formHeader}>
        <h1>SECTOR 1. GENERAL</h1>
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarInner}
            style={{ width: "6.66%" }}
          ></div>
        </div>
        <h2>What industry does your organization operate in?</h2>
      </div>
      <form className={styles.industryForm}>
        {[
          "Retail",
          "XaaS (Anything-as-a-Service)",
          "Hardware",
          "Healthcare",
          "Financial Services",
          "Manufacturing",
          "Education",
          "Government",
          "Telecommunications",
        ].map((industry, index) => (
          <div key={index} className={styles.formCheck}>
            <input type="checkbox" id={industry} name={industry} />
            <label htmlFor={industry}>{industry}</label>
          </div>
        ))}
      </form>
      <div className={styles.formFooter}>
        <button className={styles.btnPrev}>Previous</button>
        <button className={styles.btnNext}>Next</button>
      </div>
    </div>
  );
};
