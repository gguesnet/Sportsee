import PropTypes from "prop-types";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from "recharts";

/**
 * @component
 * @memberOf Content
 * @description This graph shows us the average sessions of a user
 * @param {array} props Sessions datas of the user
 */
function LineGraph({ data }) {
  console.log(data);
  const CustomTooltipLineGraph = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-lineGraph">
          <p> {`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <article className="panel-graph line-graph">
      <p>
        Durée moyenne des
        <br />
        sessions
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 45,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltipLineGraph />} />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
            strokeWidth={2}
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

LineGraph.propTypes = {
  data: PropTypes.array,
};

export default LineGraph;
