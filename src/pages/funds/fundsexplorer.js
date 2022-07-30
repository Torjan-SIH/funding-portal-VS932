import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import './fundsStyles.css';

function FundsExplorer() {
  return (
    <div className="fundsExplorerDiv">
      <FundSideBar/>
            
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col >
          <Card >
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project the projector</Card.Title>
              <Card.Text >
              We are from .......... school, Nambur. We need funds for the school regarding the projector facility.
               A total of 10 classrooms and each class needs a projector. Through this, we can give our students 
               the best way of teaching. Each projector costs 25,000/-.So, we raise the funds for 2,50,000/-
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="right" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Pay for Our teachers :</Card.Title>
              <Card.Text>
              We need to raise funds regarding the pay of our teachers. Ours is a tribal school in Araku valley. 
              As the income is less to our school we need funds from govt. We have a total of 15 staff. The pay for 
              each teacher is 10,000/-.We request the govt to help us to pay our teachers by raising funds for us.
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
              <Card.Title>Health and hygiene :</Card.Title>
              <Card.Text>
              To clean and construct the washrooms for our college we need 75,000/-. We are Samantha Junior College,
               BhavaniPuram,Vijayawada.We need to construct new washroom for our college.
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="left" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
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

export default FundsExplorer;