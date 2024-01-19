// utils/colors.js

const generateUniqueColors = () => {
  const colors = ["#e1c5ff", "#7bd5f5", "#e6ffb8", "#fdd284", "#a7d8e3"];
  let currentIndex = 0;

  return () => {
    const currentColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return currentColor;
  };
};

export default generateUniqueColors;
