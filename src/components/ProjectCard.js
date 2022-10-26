import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const ProjectCard = ({ title, description, image, url }) => {
  return (
    <Col size={12} sm={6} md={4} className='project-card-wrapper'>
      <a href={url} rel='noreferrer' target='_blank'>
        <Card className='project-card'>
          <Card.Img src={image} alt='Project' />
          <Card.Body className='project-card-body'>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};
