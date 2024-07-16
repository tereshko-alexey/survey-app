export const makeBallActive = (ball: SVGElement) => {
  if (!ball) return;
  ball.style.setProperty("fill", "url(#pattern1)");
};
