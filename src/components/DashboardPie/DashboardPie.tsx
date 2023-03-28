
import { ApexOptions } from 'apexcharts';
import React from 'react';
import ApexChart from 'react-apexcharts';
import { DashboardContainer, DashboardTitle, Separator } from './styles';

type DashboardPieProps = {
    percent: number;
  };
  
  const DashboardPie: React.FC<DashboardPieProps> = ({ percent }) => {
    const options: ApexOptions = {
      series: [percent, 100 - percent],
      chart: {
        type: 'pie',
        height: 250,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
            total: {
                show: true,
                label: '',
                formatter: function (w) {
                  return `60%`;
                },
              } 
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
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
                <ApexChart options={options} series={options.series}  type="donut" height={250} />
                <DashboardTitle style={{marginTop:30}}>Curso A</DashboardTitle>
                <Separator />
                <DashboardTitle>Curso B</DashboardTitle>
                <Separator />
        </DashboardContainer>
    );
  };
  
  export default DashboardPie;