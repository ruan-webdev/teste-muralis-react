import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
`;
