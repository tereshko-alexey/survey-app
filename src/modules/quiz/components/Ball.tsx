import { ReactComponent as BallSvg } from "assets/ball.svg";
import { ReactComponent as BallActiveSvg } from "assets/ballActive.svg";
import { ReactComponent as BallShadowSvg } from "assets/ballShadow.svg";
import styles from "../styles/ball.module.css";
import classNames from "classnames";

type Props = {
  isActive: boolean;
  isComplete: boolean;
  position: { left: number; top: number };
  onSelect: () => void;
};

const cx = classNames.bind(styles);

export const Ball = ({ position, isComplete, isActive, onSelect }: Props) => {
  return (
    <div className={styles.ball} style={position} onClick={onSelect}>
      <div className={cx([{ [styles.ballBounce]: isActive }])}>
        {isComplete ? <BallActiveSvg /> : <BallSvg />}
      </div>
      <div className={cx([{ [styles.shadowBounce]: isActive }])}>
        <BallShadowSvg />
      </div>
    </div>
  );
};
