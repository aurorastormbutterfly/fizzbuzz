"use client";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

type RangeControlProps = {
  lowerValue: number;
  upperValue: number;
  step: number;
  onRangeChange: (range: [number, number]) => void;
};

export default function RangeControl({ lowerValue, upperValue, step, onRangeChange }: RangeControlProps) {
  const handleInput = (values: Array<number>) => {
    onRangeChange([values[0], values[1]]);
  };

  return (
    <section className="sliderContainer" aria-labelledby="range-controls-heading">
      <label htmlFor="range-slider" id="range-controls-heading">Select Range:</label>
      <RangeSlider
        id="range-slider"
        min={1}
        max={100}
        step={step}
        onInput={handleInput}
        value={[lowerValue, upperValue]}
      />
    </section>
  );
}
