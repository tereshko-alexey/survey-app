export const makeBallActive = (ball: SVGElement) => {
  if (!ball) return;
  const logo: HTMLElement | null = ball.querySelector("rect.logo");
  const cloud: HTMLElement | null = ball.querySelector("g.cloud");
  logo?.style.setProperty("fill", "url(#pattern1)");
  cloud?.style.setProperty("opacity", "1");
};
