// utils/colors.js

const generateUniqueColors = () => {
  const colors = ["#00a6f2", "#6e4beb", "#13D63A", "#F2BA38", "#9b59b6"];
  let currentIndex = 0;

  return () => {
    const currentColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return currentColor;
  };
};

export default generateUniqueColors;
