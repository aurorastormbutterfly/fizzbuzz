type ResultsProps = {
  values: number[];
  output: string;
};

export default function Results({ values, output }: ResultsProps) {
  return (
    <div className="output-container">
      <label>Output:</label>
      <div className="results">
        <p>{values.length === 0 ? "No values in range" : output}</p>
      </div>
    </div>
  );
}
