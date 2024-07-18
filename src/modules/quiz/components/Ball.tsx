import { ReactComponent as BallSvg } from "assets/ball.svg";
import { ReactComponent as BallActiveSvg } from "assets/ballActive.svg";
import styles from "../styles/ball.module.css";

type Props = {
  isActive: boolean;
  isComplete: boolean;
  position: { left: number; top: number };
};

export const Ball = ({ position, isComplete, isActive }: Props) => {
  return (
    <div className={styles.ball} style={position}>
      {isComplete ? <BallActiveSvg /> : <BallSvg />}
    </div>
  );
};
