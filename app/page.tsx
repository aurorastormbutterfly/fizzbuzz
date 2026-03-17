'use client';

import Image from "next/image";
import { useState } from "react";
import RangeControl from "@/components/RangeControl";
import StepSelect from "@/components/StepSelect";
import Results from "@/components/Results";
import ActionControls from "@/components/ActionControls";
import { getRange, fizzBuzzify } from "@/components/fizzBuzzUtils";

export default function Home() {
  const [step, setStep] = useState(1);
  const [range, setRange] = useState<[number, number]>([1, 25]);
  const [isFizzBuzzEnabled, setIsFizzBuzzEnabled] = useState(false);

  const [lowerValue, upperValue] = range;
  const values = getRange(lowerValue, upperValue, step);
  const output = isFizzBuzzEnabled ? fizzBuzzify(values) : values.join(", ");

  const resetAll = () => {
    setStep(1);
    setRange([1, 25]);
    setIsFizzBuzzEnabled(false);
  };

  return (
    <div className="page">
      <header>
        <div className="logo">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/logo2.png`}
            alt="logo that says fizz-buzz in colored letters"
            fill
          />
        </div>
        <div className="instructions">
          <h1>Fizz-Buzz Kata</h1>
          <p>
            Print the numbers in a selected range (min 1 - max 100) and that increments
            by the given step amount. For multiples of three print “Fizz” instead of
            the number and for multiples of five print “Buzz”. For numbers which are
            multiples of both three and five print “FizzBuzz”.
          </p>
        </div>
      </header>

      <main>
        <div>
          <RangeControl
            lowerValue={lowerValue}
            upperValue={upperValue}
            step={step}
            onRangeChange={(newRange) => setRange([newRange[0], newRange[1]])}
          />
          <StepSelect step={step} onStepChange={setStep} />
        </div>

        <Results values={values} output={output} />

        <ActionControls
          isFizzBuzzEnabled={isFizzBuzzEnabled}
          onToggleFizzBuzz={() => setIsFizzBuzzEnabled((prev) => !prev)}
          onReset={resetAll}
        />
      </main>

      <footer>
        <p>a kata by fern-leigh.dev</p>
      </footer>
    </div>
  );
}
