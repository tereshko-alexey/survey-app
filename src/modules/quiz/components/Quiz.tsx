import React from "react";
import { questions, questionsOptions } from "../constants";
import styles from "../styles/quiz.module.css";
import { Ball } from "./Ball";
import { QuestionForm } from "./QuestionForm";

type Props = {
  step: number;
  onPrev: () => void;
  onNext: () => void;
  onBallSelect: (ballNumber: number) => void;
};

export const Quiz = ({ step, onNext, onPrev, onBallSelect }: Props) => {
  const [quizResponses, setQuizResponses] = React.useState<{
    [key: string]: string[];
  }>({});

  const onSubmitAnswer = (answer: { [key: string]: string[] }) => {
    setQuizResponses((prev) => ({ ...prev, ...answer }));
    onNext();
  };

  console.log({ quizResponses });

  return (
    <>
      {questions.map((question, index) => (
        <React.Fragment key={question.value}>
          <Ball
            isActive={index === step}
            isComplete={step >= index}
            position={question.ballPosition}
            onSelect={() => onBallSelect(index)}
          />
          {index === step && (
            <div
              key={question.value}
              className={styles.formContainer}
              style={question.modalPosition}
            >
              <QuestionForm
                sector={question.key}
                sectorNumber={question.sectorNumber}
                question={question.value}
                questionNumber={index + 1}
                options={questionsOptions[index].value}
                progress={(step / (questions.length - 1)) * 100}
                questionsCount={questions.length}
                onPrev={onPrev}
                onNext={onSubmitAnswer}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
