import { FC } from "react";
import { Container, Navbar } from "reactstrap";

const Footer: FC = () => (
  <Navbar 
    dark
    color="dark"
    expand="md"
    fixed="bottom footer"
  >
    <Container className="d-flex justify-content-center p-2 text-light">
      Footer
    </Container>
  </Navbar>
)

export default Footer;