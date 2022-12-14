import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/img/logo.svg';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      className={scrolled ? 'navbar scrolled' : 'navbar'}
    >
      <Container className='navbar-container'>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-md-auto flex-column gap-3 gap-md-0 flex-md-row mb-4 mb-md-0 align-items-center'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              <span>Projects</span>
            </Nav.Link>
          </Nav>

          <Nav className='social-icon flex-column gap-3 gap-md-0 flex-md-row mb-4 mb-md-0 align-items-center'>
            <a
              href='https://www.instagram.com/coding_elf/'
              rel='noreferrer'
              target='_blank'
            >
              <FaInstagram color='white' />
            </a>
            <a
              href='https://www.tiktok.com/@coding_elf/'
              rel='noreferrer'
              target='_blank'
            >
              <FaTiktok color='white' />
            </a>
            <a
              href='https://www.youtube.com/c/CodingElf/'
              rel='noreferrer'
              target='_blank'
            >
              <FaYoutube color='white' />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
