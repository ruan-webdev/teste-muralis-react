import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.background};
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.default};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
`;

export const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid #ffffff;
`;