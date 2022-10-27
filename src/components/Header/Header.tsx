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

const Navibar: FC = () => {
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
        <Link className="text-light text-decoration-none" to="home">
          ToDo redux example     
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      
      <Collapse isOpen={isOpenNavbar} navbar>
        <Nav pills>
          <NavItem>
            <NavLink>
              <Link 
                activeStyle={{color: 'red'}} 
                to="home"
              >
                Home
              </Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Link 
                activeStyle={{color: 'red'}}
                to="todo"
              >
                my ToDos
              </Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Link 
                to="profile"
                activeStyle={{color: 'red'}}
              >
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