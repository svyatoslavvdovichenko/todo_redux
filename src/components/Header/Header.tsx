import { FC, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as Link } from "react-router-dom";

const Navibar: FC = (props) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState<boolean>(false);
  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar);

  return (
    <Navbar 
      collapseOnSelect 
      container="fluid" 
      dark
      color="dark"
      expand="md"
    >
      <NavbarBrand>
        ToDo redux example
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpenNavbar} navbar>
        <Nav pills>
          <NavItem >
            <NavLink>
              <Link activeClassName='active' className="text-light" to="home">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link activeClassName='active' className="text-light" to="todo">
                my ToDos
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link activeClassName='active' className="text-light" to="profile">
                my profile
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
} 

export default Navibar;