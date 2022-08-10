import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <h1 className="desc">{payload[0].value + "%"}</h1>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    );
  }

  return null;
};

function PieGraph({ score }) {
  let data = [{ name: "score", value: score * 100 }];
  return (
    <article className="panel-graph">
      <h1 className="score">Score</h1>

      <ResponsiveContainer>
        <RadialBarChart
          width={"100%"}
          height={"100%"}
          innerRadius="72%"
          outerRadius="85%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"value"}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            minAngle={5}
            fill="#E60000"
            background={{ fill: "#fff" }}
            position="center"
            clockWise={true}
            dataKey="value"
            legendType="square"
            data={data}
            cornerRadius="50%"
          />

          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="center"
            payload={data}
            content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  );
}

PieGraph.propTypes = {
  score: PropTypes.number,
};

export default PieGraph;
