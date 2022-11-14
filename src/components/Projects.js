import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.svg';
import projImg2 from '../assets/img/project-img2.svg';
import projImg3 from '../assets/img/project-img3.svg';
import projImg4 from '../assets/img/project-img4.svg';
import projImg5 from '../assets/img/project-img5.svg';
import colorTile2 from '../assets/img/color-tile-2.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Pinterest Clone',
      description: 'Design & Development',
      image: projImg1,
      url: 'https://github.com/olgayavnel/pinterest-clone',
    },
    {
      title: 'NestJS MongoDB App',
      description: 'Design & Development',
      image: projImg2,
      url: 'https://github.com/olgayavnel/nestjs-with-graphql-and-mongodb',
    },
    {
      title: 'UI Components',
      description: 'Design & Development',
      image: projImg3,
      url: 'https://github.com/olgayavnel/ui-components',
    },
    {
      title: 'Astronomy Pic using NASA API',
      description: 'Design & Development',
      image: projImg4,
      url: 'https://github.com/olgayavnel/astronomy-pic',
    },
    {
      title: 'Image Reviewer',
      description: 'Design & Development',
      image: projImg5,
      url: 'https://github.com/olgayavnel/image-reviewer-app',
    },
    {
      title: 'Real Estate Site',
      description: 'Design & Development',
      image: projImg2,
      url: 'https://github.com/olgayavnel/real-estate-site',
    },
  ];

  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    When you, unfortunately, have to understand <br /> your own
                    code one day.
                  </p>
                  <p>I'll fix it later.</p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorTile2}
        alt='background-image'
      ></img>
    </section>
  );
};
