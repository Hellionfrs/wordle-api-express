export const trialDictionary = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
];

const availableLengthRange = (
  start: number = 4,
  stop: number = 10,
  step: number = 1
) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const wordLengthRange = availableLengthRange() 