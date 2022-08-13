import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomizedToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-BarChart">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};

/**
 * @component
 * @memberOf Content
 * @description This graph shows us the daily activity of a user
 * @param {array} props Activities datas of the user
 */

function Activity({ data }) {
  const formatXAxis = (tickItem, i) => {
    return i + 1;
  };

  return (
    <article className="panel-activity">
      <header className="header-activity">
        <p className="panel-title">Activité quotidienne</p>
        <div className="panel-information">
          <div className="panel-item">
            <div className="black-dot"></div>
            <p className="activiy-panel-text">Poids (kg)</p>
          </div>

          <div className="panel-item">
            <div className="red-dot"></div>
            <p className="activiy-panel-text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </header>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap="10%"
          barGap={8}
          margin={{ top: 50, bottom: 15, right: 30 }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis
            axisLine={false}
            tickLine={false}
            tick={{ stroke: "#9B9EAC" }}
            tickFormatter={formatXAxis}
          />
          <YAxis
            orientation="right"
            tickCount={3}
            dataKey="kg"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ stroke: "#9B9EAC" }}
          />
          <YAxis
            tickCount={6}
            domain={[0, 600]}
            dataKey="Kcal"
            axisLine={false}
            tickLine={false}
            tick={false}
            hide={true}
            yAxisId="cl"
          />
          <Bar
            stackId="kg"
            barSize={8}
            dataKey="kg"
            label={false}
            fill="#282D30"
            radius={[25, 25, 0, 0]}
          />
          <Bar
            stackId="cl"
            barSize={8}
            dataKey="Kcal"
            label={false}
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            yAxisId="cl"
          />
          <Tooltip
            label={data}
            cursor={{ fill: "rgba(0,0,0,0.15)" }}
            content={<CustomizedToolTip />}
            offset={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}

Activity.propTypes = {
  data: PropTypes.array,
};

export default Activity;
