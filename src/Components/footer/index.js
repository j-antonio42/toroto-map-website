import React from 'react'
import './styles.scss'
import {
	NavbarBrand
  } from 'reactstrap';
  import facebook from '../../assets/img/icons/facebook_icon.svg'
  import linkedin from '../../assets/img/icons/linkedin_icon.svg'
  import instagram from '../../assets/img/icons/instagram_icon.svg'
  import twitter from '../../assets/img/icons/twitter_icon.svg'
  import logo from '../../assets/img/icons/logo.svg'


const  Footer = ()=> {
    return(

        <footer >
	

			 <div className='social-networks'>
                <img src={ facebook } className='social-page' alt=""/>
                <img src={ linkedin } className='social-page' alt=""/>
                <img src={ instagram } className='social-page' alt=""/>
                <img src={ twitter } className='social-page' alt=""/>
			 </div>

			 <div className='logo'>
			     <img src={ logo } className='toroto-logo' alt=""/>
			 </div>
      
		
	</footer>
    )

}

export default Footer