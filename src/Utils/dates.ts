// Calculate the first coming Saturday or next Saturday if today is already Saturday
export const getNextLottoDrawDate = () => {
  const now = new Date();

  // Get days until next Saturday (0-6, where 0 is Sunday and 6 is Saturday)
  let daysUntilSaturday = 6 - now.getDay(); // 6 represents Saturday

  // If today is Saturday (6), set to 7 to get next Saturday
  if (daysUntilSaturday === 0) {
    daysUntilSaturday = 7;
  }

  // Create date for next Saturday
  const nextSaturday = new Date(now);
  nextSaturday.setDate(now.getDate() + daysUntilSaturday);

  // Set time to 20:00:00
  nextSaturday.setHours(20, 0, 0, 0);

  // Format as ISO string and adjust to keep +02:00 timezone
  return nextSaturday.toISOString().replace('Z', '+00:00');
};

// Returns nearest tuesday and friday at 19:00:00
export const getNextEurojackpotDrawDate = () => {
  const now = new Date();
  const currentDay = now.getDay();

  // Calculate days until Tuesday (2) and Friday (5)
  let daysUntilTuesday = (2 - currentDay + 7) % 7;
  let daysUntilFriday = (5 - currentDay + 7) % 7;

  // If today is Tuesday or Friday, check if draw time (19:00) has passed
  const drawHour = 19;

  if (daysUntilTuesday === 0 && now.getHours() >= drawHour) {
    daysUntilTuesday = 7; // Next Tuesday
  }

  if (daysUntilFriday === 0 && now.getHours() >= drawHour) {
    daysUntilFriday = 7; // Next Friday
  }

  // Determine which is sooner
  const nextDrawDays = Math.min(daysUntilTuesday, daysUntilFriday);

  // Create date for next draw
  const nextDrawDate = new Date(now);
  nextDrawDate.setDate(now.getDate() + nextDrawDays);

  // Set time to 19:00:00
  nextDrawDate.setHours(19, 0, 0, 0);

  // Format as ISO string and adjust to keep +02:00 timezone
  console.log('nextDrawDate: ' + nextDrawDate.toISOString().replace('Z', '+00:00'));
  return nextDrawDate.toISOString().replace('Z', '+00:00');
};

// Returns nearest wednesday at 20:00:00
export const getNextVikinglottoDrawDate = () => {
  const now = new Date();
  const currentDay = now.getDay();

  // Calculate days until Wednesday (3)
  let daysUntilWednesday = (3 - currentDay + 7) % 7;

  // If today is Wednesday, check if draw time (20:00) has passed
  const drawHour = 20;

  if (daysUntilWednesday === 0 && now.getHours() >= drawHour) {
    daysUntilWednesday = 7; // Next Wednesday
  }

  // Create date for next draw
  const nextDrawDate = new Date(now);
  nextDrawDate.setDate(now.getDate() + daysUntilWednesday);

  // Set time to 20:00:00
  nextDrawDate.setHours(20, 0, 0, 0);

  return nextDrawDate.toISOString().replace('Z', '+00:00');
};

// Returns the first day of the next month at 00:00:00
export const getFirstDayOfNextMonth = () => {
  const now = new Date();

  // Create date for first day of next month
  const firstDayNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  // Set time to 00:00:00
  firstDayNextMonth.setHours(0, 0, 0, 0);

  return firstDayNextMonth.toISOString().replace('Z', '+00:00');
};
