import { FormEvent } from "react";
import styles from "../styles/questionForm.module.css";
import { QuestionsAnswer } from "types/quiz";

type Props = {
  sector: string;
  sectorNumber: string;
  question: string;
  questionNumber: number;
  options: string[];
  progress: number;
  questionsCount: number;
  currentResponse: QuestionsAnswer | undefined;
  onNext: (answer: QuestionsAnswer) => void;
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
  currentResponse,
  onNext,
  onPrev,
}: Props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const result: QuestionsAnswer = {
      question,
      answer: formData.get(question) as string,
    };

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
      <form className={styles.optionsForm} onSubmit={onSubmit}>
        {options.map((option, index) => (
          <div key={index} className={styles.formCheck}>
            <input
              type="radio"
              id={option}
              name={question}
              value={option}
              defaultChecked={currentResponse && !!currentResponse.answer}
            />
            <label htmlFor={option}>{option}</label>
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
