import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const DashboardChart = styled.div`
  margin-top: 2rem;
`;

const DashboardLines: React.FC = () => {
  const data = [
    { course: 'Curso A', data: [38, 42, 32, 14, 30, 43, 20, 25, 20] },
    { course: 'Curso B', data: [20, 28, 19, 23, 35, 25, 33, 23, 30] },
  ];

  const series = data.map(({ course, data }) => ({ name: course, data }));

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 150,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
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
        <ApexCharts options={options} series={series} type="area" height={350} />
      </DashboardChart>
    </DashboardContainer>
  );
};

export default DashboardLines;
