import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 24px;
  margin-right: 80px;
  align-items: center;
  justify-content: center;
`;

export const BlueBox = styled.div`
  background-color: #0e3358;
  width: 15%;
  height: 200px;
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubscriberBox = styled.div`
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  width: 15%;
  height: 200px;
  margin-left: 10%;
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
  margin-top: 20px;
`;