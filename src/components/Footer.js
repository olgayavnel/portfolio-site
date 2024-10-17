import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/img/logo.svg';

export const Footer = () => {
  return (
    <footer className='footer' role='contentinfo'>
      <Container>
        <Row className='align-items-center'>
          <Col
            sm={6}
            className='justify-content-center d-flex d-sm-block order-sm-0 order-1'
          >
            <span className="text-white">Olga Ivanova</span>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <p>&copy; 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
