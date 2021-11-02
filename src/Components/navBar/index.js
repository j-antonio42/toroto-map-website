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
import {GiHamburgerMenu} from 'react-icons/gi'


const TorotoNav = () => {
  

  return (
    <div>
      <Navbar className='toroto-nav' expand="md">
        <GiHamburgerMenu className='d-block d-sm-none menu'/>
        <NavbarBrand href="/"><img src={ logo } alt=""/></NavbarBrand>
    
          <Nav className="nav-links-ul" navbar>
            <NavItem >
              <Link className='nav-link d-none d-sm-block'>PROYECTOS</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link d-none d-sm-block'>SOBRE TOROTO</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link d-none d-sm-block' >BLOG</Link>
            </NavItem>
            <NavItem >
              <Link className='nav-link d-none d-sm-block'>
              <FiExternalLink className='link-logo '/>META REGISTRO</Link>
            </NavItem>
            <Button className='d-none d-sm-block'>CONTACTO</Button>
            
          </Nav>
          
      </Navbar>
    </div>
  );
}

export default TorotoNav ;