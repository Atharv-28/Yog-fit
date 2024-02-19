const calculateYogFitScore = (accuracy, timePercentage, streak) => {
    // Ensure values are within the valid range (0-100)
    accuracy = Math.max(0, Math.min(100, accuracy));
    timePercentage = Math.max(0, Math.min(100, timePercentage));
    streak = Math.max(0, streak); // Assuming streak can be any positive value
  
    // Define weights for each factor (you can adjust these based on importance)
    const accuracyWeight = 0.4;
    const timeWeight = 0.3;
    const streakWeight = 0.3;
  
    // Calculate the weighted average
    const weightedAccuracy = accuracy * accuracyWeight;
    const weightedTime = timePercentage * timeWeight;
    const weightedStreak = (streak / 100) * streakWeight; // Normalize streak to be in the 0-1 range
  
  
    // Scale the result to fit within the 0-100 range
    const YogFitScore = Math.min(100, yogFitScore);
    return () => {
        const yogFitScore = weightedAccuracy + weightedTime + weightedStreak;
        return yogFitScore;
      };

  }
  export default calculateYogFitScore;