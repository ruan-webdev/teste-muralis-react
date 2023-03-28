import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 60px;
  width: 100%;
  margin-top: 1rem;
`;

export const BlueBox = styled.div`
  background-color: #0e3358;
  width: 200px;
  height: 150px;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubscriberBox = styled.div`
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  width: 200px;
  height: 150px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;

  padding: 15px;
`;

export const Number = styled.p`
  font-size: 36px;
  color: black;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;

`;