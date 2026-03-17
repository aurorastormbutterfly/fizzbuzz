export function getRange(lower: number, upper: number, step: number): number[] {
  if (step <= 0) return [];
  if (lower > upper) return [];

  const length = Math.floor((upper - lower) / step) + 1;
  return Array.from({ length }, (_, index) => lower + index * step);
}

export function fizzBuzzify(values: number[]): string {
  return values
    .map((value) => {
      if (value % 15 === 0) return "FizzBuzz";
      if (value % 3 === 0) return "Fizz";
      if (value % 5 === 0) return "Buzz";
      return value.toString();
    })
    .join(", ");
}
