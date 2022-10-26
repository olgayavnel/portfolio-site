import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Card className='project-card'>
        <Card.Img src={imgUrl} alt='Project' />
        <Card.Body className='project-card-body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
