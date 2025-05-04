document.addEventListener("DOMContentLoaded", () => {
  const smallBox = document.getElementById("smallBox");
  const container = document.getElementById("container");

  let position = 0;
  const step = 2;
  const limit = container.offsetWidth - smallBox.offsetWidth;

  function move() {
    if (position < limit) {
      position += step;
      smallBox.style.left = `${position}px`;
      setTimeout(move, 10);
    }
  }

  move();
});
