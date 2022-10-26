import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import colorTile3 from '../assets/img/color-tile-3.png';

export const About = () => {
  return (
    <section className='about' id='about'>
      <img className='about-background-image-left' src={colorTile3}></img>
      <Container>
        <Row>
          <Col size={12}>
            <h2>About Me</h2>
            <p>
              I like writing code and exploring the world of programming. I'm a
              self-taught developer with a background in digital marketing. now.
            </p>
            <p>
              My experience working as a software dev is about three years I
              started coding in 2017. Following up my coding journey, I taught
              myself the fundamentals of computer science and the curriculum
              offered by the CS degree. After that, I started working with
              JavaScript and React, and nowadays I'm doing full-stack
              development, working with React and Django.
            </p>
            <p>
              Fun fact: I have a master's degree in political and social science
              and used to work in a big tech company doing conversion rate
              optimization. During my time there, I started learning CS and
              programming on the side and fell in love with it.
            </p>
            <p>
              P.S. Yavnel is my non-official surname inherited from my grand
              grandmother. I use it on the web as a pseudonym.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
