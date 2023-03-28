import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import DashboardLines from '../DashboardLines/DashboardLines';
import { DashboardChart, DashboardColumn, DashboardColumns, DashboardContainer, DashboardLinesContainer, DashboardRow, DashboardTitle } from './styles';
import DashboardPie from '../DashboardPie/DashboardPie';
import CalendarDashboard from '../Calendar/CalendarDashboard';

const Dashboard: React.FC = () => {
  const data = [
    { course: 'Curso A', data: [20, 28, 19, 23, 35, 25, 33, 23, 30] },
    { course: 'Curso B', data: [38, 42, 32, 14, 30, 43, 20, 25, 20] },
  ];

  const series = data.map(({ course, data }) => ({ name: course, data }));

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 150,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '65%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP'],
    },
    yaxis: {
      min: 10,
      max: 50,
      tickAmount: 5,
      forceNiceScale: true,
    },
    fill: {
      opacity: 1,
    },
    colors: ['#fd9e15', '#0a3357'],
    legend: {
      fontSize: '20px',
      position: 'right',
    },
  };

  return (
    <DashboardColumns>
        <DashboardColumn>
          <DashboardContainer>
              <DashboardTitle>Inscritos</DashboardTitle>
              <DashboardChart>
                <ApexCharts options={options} series={series} type="bar" height={150} />
              </DashboardChart>
          </DashboardContainer>
            <DashboardLinesContainer>
                <DashboardLines />
                <CalendarDashboard/>
            </DashboardLinesContainer>
        </DashboardColumn>
        <DashboardColumn>
          
        </DashboardColumn>
        <DashboardRow>
              <DashboardPie percent={40} />
        </DashboardRow>
    </DashboardColumns>
  );
};

export default Dashboard;
