import styles from "../styles/questionForm.module.css";

type Props = {
  sector: string;
  sectorNumber: string;
  question: string;
  questionNumber: number;
  options: string[];
  progress: number;
  questionsCount: number;
  onNext: () => void;
  onPrev: () => void;
};

export const QuestionForm = ({
  sector,
  sectorNumber,
  question,
  questionNumber,
  options,
  progress,
  questionsCount,
  onNext,
  onPrev,
}: Props) => {
  return (
    <div>
      <div className={styles.formHeader}>
        <div className={styles.headerSector}>
          <span className={styles.formHeaderSectorName}>
            SECTOR {sectorNumber}. {sector.toUpperCase()}
          </span>
          <span className={styles.numberOf}>
            {questionNumber}/{questionsCount}
          </span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressBarInner}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h2>{question}</h2>
      </div>
      <form className={styles.industryForm}>
        {options.map((industry, index) => (
          <div key={index} className={styles.formCheck}>
            <input type="checkbox" id={industry} name={industry} />
            <label htmlFor={industry}>{industry}</label>
          </div>
        ))}
      </form>
      <div className={styles.formFooter}>
        <button className={styles.btnPrev} onClick={onPrev}>
          Previous
        </button>
        <button className={styles.btnNext} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};
