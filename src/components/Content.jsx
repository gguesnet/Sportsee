import { useEffect, useState } from "react";
import Title from "./Title";
import Activity from "./Activity";
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";
import PieGraph from "./PieGraph";
import Panel from "./Panel";
import { ApiService } from "../API";

function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = new ApiService();
        const activityDatas = await response.getUserActivity(18);
        const averageDatas = await response.getUserAverage(18);
        const userDatas = await response.getUserDatas(18);
        const performanceDatas = await response.getUserPerformance(18);
        // console.log(activityDatas, averageDatas, userDatas, performanceDatas);
        setData({
          activity: activityDatas,
          average: averageDatas,
          user: userDatas,
          performance: performanceDatas,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <main>
      {data && <Title name={data.user.firstName} />}
      <section className="section-content">
        {data && console.log(data.user)}
        {data && (
          <>
            <Activity data={data.activity.data} />
            <LineGraph data={data.average.data} />
            <RadarGraph data={data.performance.data} />
            <PieGraph score={data.user.score} />
          </>
        )}
      </section>
      <aside className="aside-content">
        {data &&
          data.user.info.map(({ value, label, unit }) => (
            <Panel
              key={value}
              img={`./img/${label}.svg`}
              value={value}
              unit={unit}
              label={label}
            />
          ))}
      </aside>
    </main>
  );
}

export default Content;
