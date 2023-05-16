import { useEffect } from "react";
import { setDashChart } from '../../utils/dashChart';
import Carts from "./Carts";
import DashProductTable from "./DashProductTable";

const Dashboard = () => {
  useEffect(() => {
    const labels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Oct",
      "Des",
    ];

    const datapoints = [0, 20, 20, 60, 60, 120, 100, 120, 125, 105, 110, 100];

    setDashChart(labels, datapoints);
  }, []);

  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      <div className="row">
        <Carts
          value={7}
          title="Day's Cart"
          desc="Remaining Cart"
          week={14}
          month={18}
        />
        <Carts
          value={5}
          title="Today's Remaining"
          desc="Not Paid Orders"
          week={9}
          month={16}
        />
        <Carts
          value={45}
          title="Today's Orders"
          desc="Paid and Processed Orderes"
          week={263}
          month={1038}
        />
        <Carts
          value={1500000}
          title="Today's Sale"
          desc="Total"
          week={6380000}
          month={22480000}
        />
      </div>
      <div className="row">
        <DashProductTable />

        {/* chart referenced in utils */}
        <div className="col-12 col-lg-6">
          <canvas id="myChart" height="195"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
