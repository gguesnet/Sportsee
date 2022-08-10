import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarGraph({ data }) {
  return (
    <article className="panel-graph radar-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "white", fontSize: 15, fontWeight: 500 }}
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
