import React, { FC } from 'react';
//Components
import './CFStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { GiHamburgerMenu } from "react-icons/gi";
//Images
import ImgLogo from '../images/logo.svg';

const CFNavbar: FC = () => {
    return(
        <Navbar expand='lg' fixed='top' className='mx-lg-5 my-lg-4 m-3'>
            <Navbar.Brand href='#home'>
                <Image src={ImgLogo} alt='log' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='cs-toggle cs-transition px-3 py-2 shadow-none'>
                <GiHamburgerMenu className='text-white' />
            </Navbar.Toggle>
            <Navbar.Collapse className='gap-3 rounded mx-lg-0 mx-5 justify-content-end text-start cs-bg-navbar'>
                <Nav.Link className='cs-link ms-lg-0 ms-3 my-lg-0 my-3 cs-transition lh-1 my-2'>About</Nav.Link>
                <Nav.Link className='cs-link ms-lg-0 ms-3 my-lg-0 my-3 cs-transition lh-1 my-2'>Discover</Nav.Link>
                <Nav.Link className='cs-link ms-lg-0 ms-3 my-lg-0 my-3 cs-transition lh-1 my-2'>Get Started</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CFNavbar;