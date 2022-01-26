import styled from "styled-components";
import Navbar from "../NavBar/NavBar";
import BG from "shared/assets/blob-scene-haikei.svg";
const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Layout;
