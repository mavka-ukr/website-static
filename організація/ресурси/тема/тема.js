window.__randomize_color__ = function () {
  const randomColorName = () => {
    const colors = ["black", "blue", "yellow", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const colorName = randomColorName();
  document.documentElement.style.setProperty("--primary-rgb", `var(--${colorName}-rgb)`);
  document.documentElement.style.setProperty("--primary-hover-rgb", `var(--${colorName}-hover-rgb`);
  document.documentElement.style.setProperty("--primary-pressed-rgb", `var(--${colorName}-pressed-rgb`);
  document.documentElement.style.setProperty("--primary-text-rgb", `var(--${colorName}-text-rgb`);
  document.documentElement.style.setProperty("--primary-transparent-button-rgb", `var(--${colorName}-transparent-button-rgb`);
};
window.__randomize_color__();