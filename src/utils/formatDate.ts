function formatDate(date: Date) {
  const inputDate = new Date(date); // Convert to Date object
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 7); // Calculate the date one week ago

  // Helper to get day name
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (inputDate >= oneWeekAgo && inputDate <= today) {
    // Within the last week, return day name
    return dayNames[inputDate.getDay()];
  } else {
    // Older entries, return formatted date
    return inputDate.toLocaleDateString();
  }
}

export default formatDate;
