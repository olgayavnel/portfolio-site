import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Example data for key moments
const keyMoments = [
  {
    title: 'Worked in Digital Marketing',
    date: '2013-02 - 2019-11',
  },
  {
    title: "Graduated with a bachelor's degree",
    date: '2018-06',
  },
  {
    title: 'Freelance Software Developer',
    date: '2019-11 - 2019-12',
  },
  {
    title: 'Worked in Conversion Rate Optimization',
    date: '2019-12 - 2021-01',
  },
  {
    title: "Graduated with a master's degree",
    date: '2021-08',
  },
  {
    title: 'Software Web Developer',
    date: 'Since 2021-01',
  },
];

export const LifeSpanner = () => {
  const reversedKeyMoments = [...keyMoments].reverse();

  return (
    <section className='life-spanner' id='life-spanner'>
      <Container>
        <Row>
          <Col>
            <h2>Timeline</h2>
            <div className='timeline' role='list'>
              {reversedKeyMoments.map((moment, index) => (
                <div key={index} className='moment' role='listitem'>
                  <div className='moment-line'></div>
                  <div className='moment-content'>
                    <div className='moment-date'>{moment.date}</div>
                    <div className='moment-title'>{moment.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LifeSpanner;
