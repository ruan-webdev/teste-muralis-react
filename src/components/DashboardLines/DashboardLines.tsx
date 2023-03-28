import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import CalendarDashboard from '../Calendar/CalendarDashboard';
import { DashboardChart, DashboardContainer } from './styles';


const DashboardLines: React.FC = () => {
  const data = [
    { course: 'Curso A', data: [38, 42, 32, 14, 30, 43, 20, 25, 20] },
    { course: 'Curso B', data: [20, 28, 19, 23, 35, 25, 33, 23, 30] },
  ];

  const series = data.map(({ course, data }) => ({ name: course, data }));

  const options: ApexOptions = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      fill: {
          opacity: 1,
          gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.3,
              stops: [0, 90, 100],
          },
      },
      grid: {
        borderColor: "#555",
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
          labels: {
              show: false,
          },
      },
    yaxis: {
      show: false,
      min: 10,
      max: 50,
      forceNiceScale: true,
    },
    colors: ['#fd9e15', '#0a3357'],
    legend: {
      fontSize: '20px',
      position: 'left',
    },
  };

  return (
    <DashboardContainer>
      <DashboardChart>
        <ApexCharts width={800} options={options} series={series} type="area" height={320} />
        <CalendarDashboard/>
      </DashboardChart>
    </DashboardContainer>
  );
};

export default DashboardLines;
