const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

for (let i = 0; i < 200; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];

  ball.style.left = `${Math.floor(
    Math.random() * document.body.scrollWidth
  )}px`;

  ball.style.top = `${Math.floor(
    Math.random() * (document.body.scrollHeight - 150)
  )}px`;

  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  ball.animate(
    [
      { transform: "translate(0, 0)" },
      {
        transform: `translate(${Math.random() * (i % 2 === 0 ? -11 : 11)}rem, ${
          Math.random() * 12
        }rem)`,
      },
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );

  document.body.append(ball);
}
