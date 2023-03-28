import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 60px;
  width: 90%;
  margin-left: 3rem;
  margin-top: 3rem;
`;

export const BlueBox = styled.div`
  background-color: #0e3358;
  width: 15%;
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
  margin-left: 3rem;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin: 0;
  padding: 22px;
`;

export const Number = styled.p`
  font-size: 46px;
  color: black;
  font-weight: bold;
  text-align: center;

`;