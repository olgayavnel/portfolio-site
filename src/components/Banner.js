import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/astronaut-2.svg';

export const Banner = () => {
  const categories = ['Web Developer', 'Software Engineer', 'Content Creator'];
  const [loopNum, setLoopNum] = useState(0);
  const [runningText, setRunningText] = useState(''); // indicates the portion of the word
  const [isDeleting, setIsDeleting] = useState(false);
  // Math.random() * 100 returns the num between 0 and 99
  const [tempo, setTempo] = useState(300 - Math.random() * 100); // how fast the next letter comes
  const period = 2000; // transition between words

  useEffect(() => {
    let ticker = setInterval(() => {
      type();
    }, tempo);

    return () => {
      clearInterval(ticker);
    };
  }, [runningText]);

  const type = () => {
    let currentCategory = loopNum % categories.length;
    let fullText = categories[currentCategory];
    let updatedText = isDeleting
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
      setLoopNum(loopNum + 1);
      setTempo(500);
    }
  };

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
                  <span className='running-text'>{runningText}</span>
                </span>
              </h1>
              <p>
                I like writing code and exploring the world of programming. I'm
                a self-taught developer with a background in digital marketing.
                My experience working as a software dev is about three years
                now.
              </p>
              <p>
                I started coding in 2017. Following up my coding journey, I
                taught myself the fundamentals of computer science and the
                curriculum offered by the CS degree. After that, I started
                working with JavaScript and React, and nowadays I'm doing
                full-stack development, working with React and Django.
              </p>
              <p>
                Fun fact: I have a master's degree in political and social
                science and used to work in a big tech company doing conversion
                rate optimization. During my time there, I started learning CS
                and programming on the side and fell in love with it.
              </p>
              <a
                href='https://github.com/olgayavnel'
                rel='noreferrer'
                target='_blank'
              >
                <span>GitHub</span>
                <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
