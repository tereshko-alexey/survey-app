export const makeBallActive = (ball: SVGElement) => {
  if (!ball) return;
  hideAllClouds();
  const logo: HTMLElement | null = ball.querySelector("rect.logo");
  const cloud: HTMLElement | null = ball.querySelector("g.cloud");
  logo?.style.setProperty("fill", "url(#pattern1)");
  cloud?.style.setProperty("opacity", "1");
};

export const hideAllClouds = () => {
  const clouds: NodeListOf<HTMLElement> = document.querySelectorAll("g.cloud");
  clouds.forEach((cloud) => {
    cloud.style.setProperty("opacity", "0");
  });
};
