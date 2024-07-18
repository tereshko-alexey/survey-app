import { questions, questionsOptions } from "../constants";
import styles from "../styles/quiz.module.css";
import { Ball } from "./Ball";
import { QuestionForm } from "./QuestionForm";

type Props = {
  step: number;
  onPrev: () => void;
  onNext: () => void;
};

export const Quiz = ({ step, onNext, onPrev }: Props) => {
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
            <QuestionForm
              sector={question.key}
              sectorNumber={question.sectorNumber}
              question={question.value}
              questionNumber={index + 1}
              options={questionsOptions[index].value}
              progress={(step / questions.length) * 100}
              questionsCount={questions.length}
              onPrev={onPrev}
              onNext={onNext}
            />
          </div>
        </>
      ))}
    </>
  );
};
