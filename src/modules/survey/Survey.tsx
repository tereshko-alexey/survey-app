import { useEffect, useRef } from "react";
import "./styles.css";

export const Survey = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    console.log("handleScroll");
    const scrollPercent =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);

    const moveX = Math.sin(scrollPercent * Math.PI * 2) * 25;
    const moveY = scrollPercent * 100;

    imgRef.current?.style.setProperty(
      "transform",
      `translate(${moveX}%, ${moveY}%)`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={imgRef} className="image" />;
};
