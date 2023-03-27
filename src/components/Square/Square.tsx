import React from 'react';
import { BlueBox, HeaderContainer, SubscriberBox, Text, Number } from './styles';


const Square: React.FC = () => {
  return (
    <HeaderContainer>
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <SubscriberBox>
          <Text>Total de inscritos</Text>
          <Number>1255</Number>
      </SubscriberBox>
    </HeaderContainer>
  );
};

export default Square;
