import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, image, url }) => {
  return (
    <Col size={12} sm={6} md={4} className='project-card-wrapper'>
      <a href={url} rel='noreferrer' target='_blank'>
        <Card className='project-card'>
          <Card.Img variant='top' src={image} alt='Project' />
          <Card.Body className='project-card-body'>
            <Card.Title className='project-card-title'>{title}</Card.Title>
            <Card.Text className='project-card-info'>{description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};
