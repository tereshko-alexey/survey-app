import { useState } from "react";
import { QuestionsAnswer } from "types/quiz";

export const useAssessmentProgress = () => {
  const [step, setStep] = useState(0);
  const [quizResponses, setQuizResponses] = useState<QuestionsAnswer[]>([]);

  return { step, setStep, quizResponses, setQuizResponses };
};
