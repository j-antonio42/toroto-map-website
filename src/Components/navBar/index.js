import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {
  Link
} from "react-router-dom";
import './styles.scss'
import logo from '../../assets/img/icons/logo.svg'
import {FiExternalLink} from 'react-icons/fi'


const TorotoNav = () => {
  

  return (
    <div>
      <Navbar className='toroto-nav' expand="md">
        <NavbarBrand href="/"><img src={ logo } alt=""/></NavbarBrand>
    
          <Nav className="nav-links-ul" navbar>
            <NavItem >
              <Link className='nav-link'>PROYECTOS</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link'>SOBRE TOROTO</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link'>BLOG</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link'>
              <FiExternalLink className='link-logo'/>META REGISTRO</Link>
            </NavItem>
            <Button>CONTACTO</Button>
            
          </Nav>
          
      </Navbar>
    </div>
  );
}

export default TorotoNav ;