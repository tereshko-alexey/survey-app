import { useState } from "react";
import { QuestionsAnswer } from "types/quiz";
import { initialMaturity } from "./constants";

export const useAssessmentProgress = () => {
  const [step, setStep] = useState(0);
  const [quizResponses, setQuizResponses] = useState<QuestionsAnswer[]>([]);
  const [maturity, setMaturity] = useState(initialMaturity);

  return {
    step,
    setStep,
    quizResponses,
    setQuizResponses,
    maturity,
    setMaturity,
  };
};
