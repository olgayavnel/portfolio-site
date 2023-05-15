import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import headerImg from '../assets/img/astronaut-2.svg';

const categories = ['Web Developer', 'Content Creator', 'Artist'];
const period = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [runningText, setRunningText] = useState(''); // indicates the portion of the word
  const [isDeleting, setIsDeleting] = useState(false);
  const [tempo, setTempo] = useState(300 - Math.random() * 100); // how fast the next letter comes

  useEffect(() => {
    const type = () => {
      const currentCategory = loopNum % categories.length;
      const fullText = categories[currentCategory];
      const updatedText = isDeleting
        ? fullText.substring(0, runningText.length - 1)
        : fullText.substring(0, runningText.length + 1);

      setRunningText(updatedText);

      if (isDeleting) {
        setTempo((prevTempo) => prevTempo / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTempo(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setTempo(500);
      }
    };

    const ticker = setInterval(type, tempo);

    return () => {
      clearInterval(ticker);
    };
  }, [runningText, loopNum, isDeleting, tempo]);

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Olga`}{' '}
                <span
                  className='categories'
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span
                    className='running-text'
                    aria-live='polite'
                    aria-atomic='true'
                  >
                    {runningText}
                  </span>
                </span>
              </h1>
              <p>
                Experience is the name everyone gives to their mistakes.{' '}
                <br></br> (Oscar Wilde)
              </p>
              <a
                href='https://github.com/olgayavnel'
                rel='noreferrer'
                target='_blank'
                tabIndex={0}
              >
                <span>GitHub</span>
                <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
