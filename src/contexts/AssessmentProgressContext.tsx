import React from "react";

import { useAssessmentProgress } from "./useAssessmentProgress";

type AssessmentProgress = ReturnType<typeof useAssessmentProgress>;

const initialValue = {
  step: 0,
  setStep: () => {},
  quizResponses: [],
  setQuizResponses: () => {},
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
