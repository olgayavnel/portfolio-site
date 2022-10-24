import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Card className='proj-imgbx'>
        <Card.Img src={imgUrl} alt='Project' />
        <Card.Body className='proj-txtx'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
