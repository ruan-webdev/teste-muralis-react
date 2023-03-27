
import { ApexOptions } from 'apexcharts';
import React from 'react';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  margin-left: 3rem;
  padding: 2rem;
`;

const DashboardTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const Separator = styled.div`
    width: 50%;
    height: 1px;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    background-color: #E9E6E6;
    margin-top: 10px;
    margin-bottom: 1rem;
`;



type DashboardPieProps = {
    percent: number;
    labelA: string;
    labelB: string;
  };
  
  const DashboardPie: React.FC<DashboardPieProps> = ({ percent, labelA, labelB }) => {
    const options: ApexOptions = {
      series: [percent, 100 - percent],
      chart: {
        type: 'pie',
        height: 250,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return `${val}%`;
        },
        style: {
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: 'inherit',
        },
        offsetY: -40,
      },
      fill: {
        colors: ['#fd9e15', '#0a3357'],
      },
      legend: {
        show: false,
      },
    };
  
    return (
        <DashboardContainer> 
                <ApexChart  options={options} series={options.series}  type="donut" height={300} />
                <DashboardTitle style={{marginTop: 30}}>Curso A</DashboardTitle>
                <Separator />
                <DashboardTitle>Curso B</DashboardTitle>
                <Separator />
        </DashboardContainer>
       
    );
  };
  
  export default DashboardPie;