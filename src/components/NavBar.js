import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NAVIGATION_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'life-spanner', label: 'Timeline' },
];

const getClassName = (baseClass, condition) => {
  return condition ? `${baseClass} active` : baseClass;
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      className={scrolled ? 'navbar scrolled' : 'navbar'}
    >
      <Container className='navbar-container'>
        <Navbar.Brand href='#home'>
          <span className=''>Olga Ivanova</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-md-auto flex-column gap-3 gap-md-0 flex-md-row mb-4 mb-md-0 align-items-center'>
            {NAVIGATION_LINKS.map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={getClassName('navbar-link', {
                  active: activeLink === id,
                })}
                onClick={() => onUpdateActiveLink(id)}
                aria-label={`Navigate to ${label}`}
              >
                <span>{label}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
