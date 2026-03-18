import { getRange, fizzBuzzify } from './fizzBuzzUtils';

describe('fizzBuzzUtils', () => {
  describe('getRange', () => {
    it('should generate a sequence of numbers with step 1', () => {
      expect(getRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should generate a sequence of numbers with a custom step', () => {
      expect(getRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
    });

    it('should handle lower equal to upper bounds', () => {
      expect(getRange(5, 5, 1)).toEqual([5]);
    });

    it('should return an empty array if lower is greater than upper', () => {
      expect(getRange(10, 5, 1)).toEqual([]);
    });

    it('should return an empty array if step is 0 or negative', () => {
      expect(getRange(1, 10, 0)).toEqual([]);
      expect(getRange(1, 10, -2)).toEqual([]);
    });
  });

  describe('fizzBuzzify', () => {
    it('should return an empty string for an empty array', () => {
      expect(fizzBuzzify([])).toBe('');
    });

    it('should return numbers as strings for non-multiples of 3 or 5', () => {
      expect(fizzBuzzify([1, 2, 4, 7])).toBe('1, 2, 4, 7');
    });

    it('should convert multiples of 3 to "Fizz"', () => {
      expect(fizzBuzzify([3, 6, 9])).toBe('Fizz, Fizz, Fizz');
    });

    it('should convert multiples of 5 to "Buzz"', () => {
      expect(fizzBuzzify([5, 10, 20])).toBe('Buzz, Buzz, Buzz');
    });

    it('should convert multiples of 15 to "FizzBuzz"', () => {
      expect(fizzBuzzify([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
    });

    it('should handle a mixed array of values properly', () => {
      const input = [1, 2, 3, 4, 5, 15];
      expect(fizzBuzzify(input)).toBe('1, 2, Fizz, 4, Buzz, FizzBuzz');
    });
  });
});