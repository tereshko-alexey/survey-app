import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

import { ReactComponent as PathSvg } from "assets/path.svg";
import { makeBallActive } from "./utils";
import { Quiz } from "../quiz/components/Quiz";
import { questions } from "modules/quiz/constants";

const stepsCount = questions.length;
const stepProgressDelta = 100 / (stepsCount - 1);
const yStepScroll = 250;

export const Map = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<any>(null);
  const balls = useRef<SVGElement[]>([]);
  const activeStep = useRef(0);
  const [step, setStep] = useState(0);

  const handleStepChange = (progress: number) => {
    const currentStep = Math.trunc(progress / stepProgressDelta);
    if (currentStep > activeStep.current) {
      activeStep.current = currentStep;
      setStep(currentStep);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    balls.current = svgRef.current.querySelectorAll("g.ball");
  }, []);

  const onPrev = () => {
    window.scrollTo(0, (step - 1) * yStepScroll);
    setStep(step - 1);
  };

  const onNext = () => window.scrollTo(0, (step + 1) * yStepScroll);

  const onBallSelect = (ballNumber: number) => {
    window.scrollTo(0, ballNumber * yStepScroll);
    setStep(ballNumber);
  };

  return (
    <div className={styles.sceneContainer}>
      <div ref={imgRef} className={styles.image}>
        <Quiz
          step={step}
          onPrev={onPrev}
          onNext={onNext}
          onBallSelect={onBallSelect}
        />
        <PathSvg ref={svgRef} />
      </div>
    </div>
  );
};
