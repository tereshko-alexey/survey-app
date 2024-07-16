import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.css";

import { ReactComponent as PathSvg } from "../assets/path.svg";
import { makeBallActive } from "../utils";

const stepsCount = 15;
const stepProgressDelta = 100 / (stepsCount - 1);

export const Survey = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<any>(null);
  const balls = useRef<SVGElement[]>([]);

  const handleStepChange = (progress: number) => {
    const currentStep = Math.trunc(progress / stepProgressDelta);
    if (currentStep) {
      balls.current.forEach((ball, index) => {
        if (index <= currentStep) {
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
