import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Activity from "./Activity";
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";
import PieGraph from "./PieGraph";
import Panel from "./Panel";
import NotFound from "../NotFound";
import { ApiService } from "../API";

function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { userID } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = new ApiService(userID);
        const activityDatas = await response.getUserActivity();
        const averageDatas = await response.getUserAverage();
        const userDatas = await response.getUserDatas();
        const performanceDatas = await response.getUserPerformance();
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
      {error && <NotFound />}
      {data && (
        <>
          <Title name={data.user.firstName} />
          <section className="section-content">
            <Activity data={data.activity.data} />
            <LineGraph data={data.average.data} />
            <RadarGraph data={data.performance.data} />
            <PieGraph score={data.user.score} />
          </section>
          <aside className="aside-content">
            {data.user.info.map(({ value, label, unit }) => (
              <Panel
                key={value}
                img={`/img/${label}.svg`}
                value={value}
                unit={unit}
                label={label}
              />
            ))}
          </aside>
        </>
      )}
    </main>
  );
}

export default Content;
