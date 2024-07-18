import { questions } from "../constants";
import styles from "../styles/quiz.module.css";
import { QuestionForm } from "./QuestionForm";

type Props = {
  step: number;
};

export const Quiz = ({ step }: Props) => {
  return (
    <>
      {questions.map((question, index) => (
        <div
          key={question.value}
          hidden={index !== step}
          className={styles.formContainer}
          style={question.mapPosition}
        >
          <QuestionForm />
        </div>
      ))}
    </>
  );
};
