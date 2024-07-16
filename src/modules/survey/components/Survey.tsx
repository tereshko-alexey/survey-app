import { useEffect, useRef } from "react";
import styles from "../styles.module.css";

import { ReactComponent as PathSvg } from "../assets/path.svg";
import { makeBallActive } from "../utils";

const stepsCount = 12;
const stepProgressDelta = 80 / (stepsCount - 1);

export const Survey = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<any>(null);
  const balls = useRef<SVGElement[]>([]);
  const activeStep = useRef(0);

  const handleStepChange = (progress: number) => {
    const currentStep = Math.trunc(progress / stepProgressDelta);
    if (currentStep > activeStep.current) {
      activeStep.current = currentStep;
      console.log({ currentStep });
      balls.current.forEach((ball, index) => {
        if (index < currentStep) {
          makeBallActive(ball);
        }
      });
    }
  };

  const handleScroll = () => {
    const scrollPercent =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);

    handleStepChange(scrollPercent * 100);

    const moveX = Math.sin(scrollPercent * Math.PI * 2) * 25;
    const moveY = scrollPercent * 100;

    imgRef.current?.style.setProperty(
      "transform",
      `translate(${moveX}%, ${moveY}%)`
    );
    pathRef.current?.style.setProperty(
      "transform",
      `translate(${moveX}%, ${moveY}%)`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0); // uncomment to have initial scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    balls.current = svgRef.current.querySelectorAll("g.ball");
    console.log("useEffect", { balls: balls.current });
  }, []);

  return (
    <div className={styles.sceneContainer}>
      <div ref={imgRef} className={styles.image}>
        <PathSvg ref={svgRef} />
      </div>
    </div>
  );
};
