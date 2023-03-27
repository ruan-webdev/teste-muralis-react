import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import DashboardLines from '../DashboardLines/DashboardLines';


const DashboardColumns = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 2rem;
  padding-left: 2rem;
`;


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const DashboardTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const DashboardChart = styled.div`
  margin-top: 2rem;
`;

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
   <DashboardContainer>
      <DashboardTitle>Inscritos</DashboardTitle>
      <DashboardChart>
        <ApexCharts options={options} series={series} type="bar" height={350} />
      </DashboardChart>
    </DashboardContainer>
    <DashboardLines />
    </DashboardColumns>
 
    
  );
};

export default Dashboard;
