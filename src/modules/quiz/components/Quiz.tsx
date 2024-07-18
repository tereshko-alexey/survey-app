import styles from "../styles/quiz.module.css";

type Props = {
  position: { left: number; top: number };
  children: React.ReactNode;
};

export const Questionnaire = ({ position, children }: Props) => {
  return (
    <div className={styles.formContainer} style={position}>
      {children}
    </div>
  );
};
