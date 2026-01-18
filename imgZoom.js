const img = document.getElementById("zoomImg");
const container = document.querySelector(".img-container");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  img.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center";
  img.style.transform = "scale(1)";
});
