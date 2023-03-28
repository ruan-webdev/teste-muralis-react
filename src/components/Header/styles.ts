import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;


`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: regular;
  color: #333;
  margin-left: 2rem;
  margin-top: 12px;
  align-self: flex-start;
`;

export const Icon = styled(FiMenu)`
  font-size: 35px;
  color: #333;
  margin-right: 2rem;
  align-self: flex-end;
  margin-bottom: 5px;
`;