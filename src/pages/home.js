import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";


const Home = () =>{
   return(
      <div className="home">
        <h1>One Nation-One Funding</h1>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100"src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg" height="500" alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img className="d-block w-100" src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg" height="500" alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg" height="500" alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default Home