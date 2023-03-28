import styled from 'styled-components';

export const DashboardColumns = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 2rem;
  padding-left: 2rem;
  
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const DashboardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 0 1.2rem;
`;


export const DashboardTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const DashboardChart = styled.div`
  margin-top: 2rem;
`;