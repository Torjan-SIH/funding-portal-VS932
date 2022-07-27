import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import FundsExplorer from "./funds/fundsexplorer";


const Home = () =>{
   return(
      <div className="home">
        <Carousel>
      <Carousel.Item interval={1000}>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg"
          height="500"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg"
          height="500"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg"
          height="500"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    <FundsExplorer />
   
      </div>
   )
}

export default Home