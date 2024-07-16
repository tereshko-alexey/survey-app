import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.css";

import { ReactComponent as PathSvg } from "../assets/path.svg";
import { makeBallActive } from "../utils";

const stepsCount = 15;
const stepProgressDelta = 100 / stepsCount;

export const Survey = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<any>(null);
  const balls = useRef<SVGElement[]>([]);
  const [step, setStep] = useState(0);

  const handleStepChange = (progress: number) => {
    const nextStepMinValue = (step + 1) * stepProgressDelta;
    if (progress > nextStepMinValue) {
      setStep(step + 1);
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
    if (!balls.current) return;
    makeBallActive(balls.current[step]);
  }, [step]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    balls.current = svgRef.current.querySelectorAll("rect");
  }, []);

  return (
    <div className={styles.sceneContainer}>
      <div ref={imgRef} className={styles.image}>
        <PathSvg ref={svgRef} />
      </div>
    </div>
  );
};
