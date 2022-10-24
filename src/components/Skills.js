import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import planet1 from '../assets/img/planet-1.svg';
import planet2 from '../assets/img/planet-2.svg';
import planet3 from '../assets/img/planet-3.svg';
import planet4 from '../assets/img/planet-4.svg';
import planet5 from '../assets/img/planet-5.svg';
import planet6 from '../assets/img/planet-6.svg';
import planet7 from '../assets/img/planet-7.svg';
import planet8 from '../assets/img/planet-8.svg';
import planet9 from '../assets/img/planet-9.svg';
import planet10 from '../assets/img/planet-10.svg';
import planet11 from '../assets/img/planet-11.svg';
import planet12 from '../assets/img/planet-12.svg';
import planet13 from '../assets/img/planet-13.svg';
import planet14 from '../assets/img/planet-14.svg';
import planet15 from '../assets/img/planet-15.svg';
import colorTile from '../assets/img/color-tile.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I'm a full-stack developer who<br></br> enjoys building stuff
                and learning new things every day.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
                // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
                autoPlay
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass='carousel-container'
                // removeArrowOnDeviceType={['tablet', 'mobile']}
                // deviceType={this.props.deviceType}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
              >
                <div className='item'>
                  <img src={planet1} alt='ReactJS' />
                  <h5>JavaScript / TypeScript</h5>
                </div>
                <div className='item'>
                  <img src={planet2} alt='Planet' />
                  <h5>ReactJS / React Native</h5>
                </div>
                <div className='item'>
                  <img src={planet3} alt='Planet' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={planet4} alt='Planet' />
                  <h5>NodeJS / NestJS</h5>
                </div>
                <div className='item'>
                  <img src={planet5} alt='Planet' />
                  <h5>Backend Development</h5>
                </div>
                <div className='item'>
                  <img src={planet6} alt='Planet' />
                  <h5>Python3</h5>
                </div>
                <div className='item'>
                  <img src={planet7} alt='Planet' />
                  <h5>Django / Wagtail</h5>
                </div>
                <div className='item'>
                  <img src={planet8} alt='Planet' />
                  <h5>MongoDB / Mongoose</h5>
                </div>
                <div className='item'>
                  <img src={planet9} alt='Planet' />
                  <h5>GraphQL</h5>
                </div>
                <div className='item'>
                  <img src={planet10} alt='Planet' />
                  <h5>SQL / PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img src={planet11} alt='Planet' />
                  <h5>Docker / GitLab</h5>
                </div>
                <div className='item'>
                  <img src={planet12} alt='Planet' />
                  <h5>Java Fundamentals</h5>
                </div>
                <div className='item'>
                  <img src={planet13} alt='Planet' />
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className='item'>
                  <img src={planet14} alt='Planet' />
                  <h5>CSS Advanced Animation</h5>
                </div>
                <div className='item'>
                  <img src={planet15} alt='Planet' />
                  <h5>VueJS / NuxtJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorTile} alt='color-tile' />
    </section>
  );
};
