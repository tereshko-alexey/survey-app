import React from "react";

import { useAssessmentProgress } from "./useAssessmentProgress";
import { initialMaturity } from "./constants";

type AssessmentProgress = ReturnType<typeof useAssessmentProgress>;

const initialValue = {
  step: 0,
  setStep: () => {},
  quizResponses: [],
  setQuizResponses: () => {},
  maturity: initialMaturity,
  setMaturity: () => {},
};

export const AssessmentProgressContext =
  React.createContext<AssessmentProgress>(initialValue);

export const AssessmentProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contextValue = useAssessmentProgress();

  return (
    <AssessmentProgressContext.Provider value={contextValue}>
      {children}
    </AssessmentProgressContext.Provider>
  );
};
