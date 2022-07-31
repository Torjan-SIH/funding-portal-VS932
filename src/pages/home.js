import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";


const Home = () =>{
   return(
      <div className="home">
       
        <form>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100"src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg" height="500" width="500" alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img className="d-block w-100" src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg" height="500" alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg" height="500" alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <h3> An HEI needs funds to support its two primary missions  education and research (the third mission of directl
      y contributing to society through innovation and entrepreneurship and outreach, which has also become quite 
      important, often generate resources to support it.) Though of course an HEI has one balance sheet, it is 
      important to separate the funding needs for the two functions, as well as support for these, as these missions
       have different goals and different revenue sources.<br></br></h3>
       </form>
      </div>
      
  )
}

export default Home