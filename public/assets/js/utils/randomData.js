
export function generateRandomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}