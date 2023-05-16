import Chart from "chart.js/auto";

export const setDashChart = (labels: string, datapoints: number) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Month Sale",
        data: datapoints,
        borderColor: "LightCoral",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config: any = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Year Sale Graph",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            // text: 'time'
          },
        },
        y: {
          display: true,
          title: {
            display: false,
            text: " $",
          },
          // suggestedMin: -10,
          // suggestedMax: 200
        },
      },
    },
  };

  const ctx: any = document.getElementById("myChart");
  new Chart(ctx.getContext("2d"), config);
};
