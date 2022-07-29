import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HeiSideBar from "../../components/SideBar/HEIsidebar";
import './heiStyles.css';

function HeiExplorer() {
  return (
    <div className="heiExplorerDiv">
      <HeiSideBar/>
    <Row xs={1} md={2} className="g-4">
      
      {Array.from({ length: 1 }).map((_, idx) => (
        
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Hostel Scheme : </Card.Title>
              <Card.Text>
              The Govt. provides funding for Hostel Maintenance for both boys and girls. This scheme provides beds 
              for sleeping, maintenance of washrooms, providing drinking water facility, and a 24/7 water supply and
              power supply. It provides half-yearly funds i.e., 1,00,000/-(per every six months).
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="right" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>SFE scheme :</Card.Title>
              <Card.Text>
              This scheme is maily for the institutes which want to help the poor students with their education. 
              The institutes can raise funds for the Govt. for provide education for the students whose annual 
              income is below 3,00,000/-.
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
    </div>
  );
}

export default HeiExplorer;