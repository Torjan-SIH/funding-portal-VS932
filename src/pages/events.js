import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";

const Events = () =>{
   return(
      <div className="events">
        <div className="eventsSlideShow">
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://english.onlinekhabar.com/wp-content/uploads/2018/04/Janajagriti-School-Sindhupalchok.jpg"
          height="400"
          width="10px"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://vikasmantra.org/wp-content/uploads/2020/08/Classroom.jpg"
          height="400"
          width="100"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/z/beautiful-school-building-off-india-indian-private-looking-play-ground-very-nice-movement-209691243.jpg"
          height="400"
          width="100"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kamarajschool.edu.in/sites/default/files/LAB-min.jpg"
          height="400"
          width="100"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kamarajschool.edu.in/sites/default/files/physics%20lab.JPG"
          height="400"
          width="100"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
   )
}

export default Events