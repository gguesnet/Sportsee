import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * @component
 * @memberOf Content
 * @description This graph shows us the performance score of a user
 * @param {array} props Performances datas of the user
 */

function RadarGraph({ data }) {
  return (
    <article className="panel-graph radar-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "white", fontSize: 10, fontWeight: 500 }}
            tickSize={10}
          />
          <Radar
            dataKey="A"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}

RadarGraph.propTypes = {
  data: PropTypes.array,
};

export default RadarGraph;
