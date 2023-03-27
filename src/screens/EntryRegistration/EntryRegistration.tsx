import Navbar from "../../components/Navbar/Navbar";
import Registration from "../../components/Registration/Registration";
import { PageContainer } from "./styles";

const EntryRegistration = () => {
  return (
    <PageContainer>
      <Navbar />
      <Registration />
    </PageContainer>
  );
}

export default EntryRegistration;
