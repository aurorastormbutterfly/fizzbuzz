type ActionControlsProps = {
  isFizzBuzzEnabled: boolean;
  onToggleFizzBuzz: () => void;
  onReset: () => void;
};

export default function ActionControls({
  isFizzBuzzEnabled,
  onToggleFizzBuzz,
  onReset,
}: ActionControlsProps) {
  return (
    <div className="controls-container">
      <button onClick={onToggleFizzBuzz}>
        {isFizzBuzzEnabled ? "Remove FizzBuzz" : "Apply FizzBuzz"}
      </button>
      <button onClick={onReset}>Reset All</button>
    </div>
  );
}
