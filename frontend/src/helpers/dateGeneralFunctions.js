//function to get how many days ago a date was
export function getDaysAgo(date) {
  date = new Date(date);
  const today = new Date();
  const dateDiff = today.getTime() - date.getTime();
  return Math.round(dateDiff / (1000 * 60 * 60 * 24));
}
