import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const DashboardChart = styled.div`
  display: flex;  
  margin-top: 2rem;
  justify-content: space-between;
  padding: 0 1rem;
`;