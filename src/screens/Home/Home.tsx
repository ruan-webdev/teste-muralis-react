import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardPie from "../../components/DashboardPie/DashboardPie";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Square from "../../components/Square/Square";
import { AppContainer, ContentContainer, HeaderContainer, PageContainer, ContainerMain } from "./styles";

const HomePage = () => {
  return (
    <PageContainer >
       <Navbar/>
      <ContainerMain>
          <Header />
          <Square />
          <Dashboard />
      </ContainerMain>
    </PageContainer>
  );
}

export default HomePage;
