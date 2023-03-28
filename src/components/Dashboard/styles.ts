import styled from 'styled-components';

export const DashboardColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  padding-left: 2rem;
  margin-top: 1rem;
 
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const DashboardLinesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const DashboardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DashboardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
`;


export const DashboardTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const DashboardChart = styled.div`
  margin-top: 2rem;
`;