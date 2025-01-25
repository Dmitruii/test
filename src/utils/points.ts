function calculateDailyPoints(day: number) {
  if (day < 1) {
    throw new Error("Day must be greater than or equal to 1.");
  }

  // Base cases for the first and second days
  if (day === 1) return 2;
  if (day === 2) return 3;

  // Initialize points for the first two days
  let pointsDayBeforePrev = 2; // Points for day 1
  let pointsPrevDay = 3; // Points for day 2
  let currentPoints = 0;

  // Calculate points for day 3 and beyond
  for (let currentDay = 3; currentDay <= day; currentDay++) {
    currentPoints = Math.round(pointsDayBeforePrev + 0.6 * pointsPrevDay);

    // Update for the next iteration
    pointsDayBeforePrev = pointsPrevDay;
    pointsPrevDay = currentPoints;
  }

  // Format points if they exceed 1000
  return currentPoints > 1000
    ? `${Math.round(currentPoints / 1000)}K`
    : currentPoints;
}
export default calculateDailyPoints;
