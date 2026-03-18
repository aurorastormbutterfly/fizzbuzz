type ResultsProps = {
  values: number[];
  output: string;
};

export default function Results({ values, output }: ResultsProps) {
  return (
    <section className="output-container" aria-labelledby="output-display-heading">
      <h3 id="output-display-heading">Output:</h3>
      <div className="results">
        <p>{values.length === 0 ? "No values in range" : output}</p>
      </div>
    </section>
  );
}
