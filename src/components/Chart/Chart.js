import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  let datapoints = props.dataPoints.map((datapoint) => datapoint.value);
  let MaxValue = Math.max(...datapoints);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          MaxValue={MaxValue}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
