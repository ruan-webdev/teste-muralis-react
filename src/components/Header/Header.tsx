
import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: regular;
  color: #333;
  margin-left: 50px;
  margin-top: 12px;
  align-self: flex-start;
`;

const Icon = styled(FiMenu)`
  font-size: 45px;
  color: #333;
  align-self: flex-end;
  margin-bottom: 5px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Controle Geral</Title>
      <Icon />
    </HeaderContainer>
  );
};

export default Header;