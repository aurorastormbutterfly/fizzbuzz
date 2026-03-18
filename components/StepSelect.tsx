type StepSelectProps = {
  step: number;
  onStepChange: (step: number) => void;
};

const STEP_OPTIONS = [1, 2, 3, 4, 5, 6, 7];

export default function StepSelect({ step, onStepChange }: StepSelectProps) {
  return (
    <section className="step-container" aria-labelledby="step-control-heading">
      <label htmlFor="step-select" id="step-control-heading">Select Step:</label>
      <select
        id="step-select"
        value={step}
        onChange={(event) => onStepChange(Number(event.target.value))}
      >
        {STEP_OPTIONS.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
}
