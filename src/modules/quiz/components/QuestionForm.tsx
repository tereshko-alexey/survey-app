import { FormEvent } from "react";
import styles from "../styles/questionForm.module.css";

type Props = {
  sector: string;
  sectorNumber: string;
  question: string;
  questionNumber: number;
  options: string[];
  progress: number;
  questionsCount: number;
  onNext: (answer: { [key: string]: string[] }) => void;
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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const entries = [...formData.entries()];
    const result = { [question]: entries.map(([answer]) => answer) };

    onNext(result);
  };

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
      <form className={styles.industryForm} onSubmit={onSubmit}>
        {options.map((industry, index) => (
          <div key={index} className={styles.formCheck}>
            <input type="checkbox" id={industry} name={industry} />
            <label htmlFor={industry}>{industry}</label>
          </div>
        ))}
        <div className={styles.formFooter}>
          <button type="button" className={styles.btnPrev} onClick={onPrev}>
            Previous
          </button>
          <button className={styles.btnNext}>Next</button>
        </div>
      </form>
    </div>
  );
};
