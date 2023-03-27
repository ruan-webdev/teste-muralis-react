import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardPie from "../../components/DashboardPie/DashboardPie";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Square from "../../components/Square/Square";
import { AppContainer, ContentContainer, HeaderContainer } from "./styles";

const HomePage = () => {
  return (
    <AppContainer >
       <Navbar/>
      <HeaderContainer>
          <Header />
          <Square />
          <ContentContainer>
            <Dashboard />
            <DashboardPie percent={40} labelA={""} labelB={""}  />
          </ContentContainer>
      </HeaderContainer>
    </AppContainer>
  );
}

export default HomePage;
