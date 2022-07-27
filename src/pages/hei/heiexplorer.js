import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HeiExplorer() {
  return (
    <Row xs={1} md={2} className="g-4">
      
      {Array.from({ length: 1 }).map((_, idx) => (
        
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Name 1</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="right" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Name 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          
        </Col>
      ))}
      <Col>
      <Card>
            <Card.Img variant="bottom" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Name 3</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="left" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Name 4</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          
      </Col>
     
    </Row>
  );
}

export default HeiExplorer;