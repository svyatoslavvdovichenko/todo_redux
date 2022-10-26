import { FC } from "react";
import { Container, Navbar } from "reactstrap";
import "./style.css";

const Footer: FC = () => (
  <Navbar fixed="bottom footer">
    <Container className="d-flex justify-content-center p-2">
      <p className="text-white-100">
        Footer
      </p>
    </Container>
  </Navbar>
)

export default Footer;