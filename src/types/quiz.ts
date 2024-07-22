export type QuestionsAnswer = {
  question: string;
  answer: string;
};

export type Maturity = {
  strategy: {
    score: number;
    explanation: string;
  };
  technology: {
    score: number;
    explanation: string;
  };
  customer: {
    score: number;
    explanation: string;
  };
  operations: {
    score: number;
    explanation: string;
  };
  organization: {
    score: number;
    explanation: string;
  };
  maturity_level: string;
};
