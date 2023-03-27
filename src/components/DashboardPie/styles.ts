import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  margin-left: 3rem;

  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
`;

export const DashboardTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const Separator = styled.div`
    width: 50%;
    height: 1px;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    background-color: #E9E6E6;
    margin-top: 10px;
    margin-bottom: 1rem;
`;