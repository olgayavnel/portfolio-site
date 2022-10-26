import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/img/logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col
            sm={6}
            className='justify-content-center d-flex d-sm-block order-sm-0 order-1'
          >
            <img src={logo} alt='Logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
