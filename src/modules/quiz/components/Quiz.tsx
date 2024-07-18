import { questions } from "../constants";
import styles from "../styles/quiz.module.css";
import { Ball } from "./Ball";
import { QuestionForm } from "./QuestionForm";

type Props = {
  step: number;
};

export const Quiz = ({ step }: Props) => {
  return (
    <>
      {questions.map((question, index) => (
        <>
          <Ball
            isActive={index === step}
            isComplete={step >= index}
            position={question.ballPosition}
          />
          <div
            key={question.value}
            hidden={index !== step}
            className={styles.formContainer}
            style={question.modalPosition}
          >
            <QuestionForm />
          </div>
        </>
      ))}
    </>
  );
};
