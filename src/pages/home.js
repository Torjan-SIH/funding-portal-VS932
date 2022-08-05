import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import "./pagesStyle.css";


const Home = () =>{
   return(
    
      <div className="home">
        <form className="myform1">
       <table><tr><div className="slideShow">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100"src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg" height="500"  alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img className="d-block w-100" src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg" height="500" alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg" height="500"  alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        </div></tr><br></br>
        <tr>
          <td>
            <marquee class="blink"width="100%" direction="right" height="40px" scrollamount="10" align="center">
             <center><h3>
                This is a sample scrolling text that has scrolls texts to right.
              </h3></center>
            </marquee>
          </td>
     </tr>
    <br></br>
    <tr>
        <h3> 
          
        </h3>
    </tr>
  

    <tr>
      <td>
        <div class="row rowstyle">   
          <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
            <div class="bluetext"><h1>Best-in-Class</h1><br></br></div>
            <br></br>
            <div class="graytext"><h2>Empowering you <br></br>with knowledge and skills.</h2></div>
         </div>
         <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12"><img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/instructor.png" alt="" width="100%"></img></div>
       </div>
       <div class="row rowstyle">
        <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12"><img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/Slider/credits_transfer.png" alt=""></img></div>
          <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
            <div class="bluetext"><h1>Easy</h1><br></br></div>
            <br></br>
            <div class="graytext"><h2>Complementing your</h2><br></br></div>
        </div>
       </div>

  </td>
</tr>
    <tr>
        <td><center>
          <div className="adiv"><table cellPadding={'80'}>
            <tr><td colSpan={'3'}><center><h3><b>Poweredby or Supportedby</b> </h3></center></td></tr>
            <tr>
            <td>
            <img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/NC_logo/AICTE_logo_128.png" alt="Go to AICTE" width="200px" height="200px"></img>
            </td>
           <td>
            <img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/NC_logo/UGC_logo_128.png" alt="Go to UGC" width="200px" height="200px"></img>      
            </td><td>
            <img src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png" alt="Go to AICTE" width="400px" height="150px" ></img>
            </td></tr> </table> </div></center>
          </td>
    </tr>
       </table></form>
      </div>
      
  )
}

export default Home