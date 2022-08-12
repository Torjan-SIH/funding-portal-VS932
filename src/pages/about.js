import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pagesStyle.css";



const About = () =>{
    
  return(
    <div>

      <center><h3 className="abouth">"The main hope of education lies in the proper education of its youth"</h3></center>
        <div className="sketchs">
          <div>
          <div className="sketch-1">
            <h1><b>SECURE</b></h1><br></br>
            <h2>This Website provides security for both the end users</h2>
          </div>
          <div className="sketch-1">
            <img className="sketch11" src="https://cdn3d.iconscout.com/3d/premium/thumb/badge-4996114-4159572.png" alt=""/>
          </div>
          </div>

          <div>
          <div className="sketch-2">
            <img className="sketch21" src="https://cdn3d.iconscout.com/3d/premium/thumb/badge-4996114-4159572.png" alt=""/>
          </div>
          <div className="sketch-2">
            <h1><b>Easy to Use</b></h1><br></br>
            <h2>This is easy to use for any application</h2>
          </div>
          </div>

          <div>
          <div className="sketch-3">
            <h1><b>User Friendly</b></h1><br></br>
            <h2>This Website provides user friendly for both the end users</h2>
          </div>
          <div className="sketch-3">
            <img className="sketch3" src="https://cdn3d.iconscout.com/3d/premium/thumb/badge-4996114-4159572.png" alt=""/>
          </div>
          </div>


          <div className="sketch-4">
            <img className="sketch4" src="https://cdn3d.iconscout.com/3d/premium/thumb/badge-4996114-4159572.png" alt=""/>
          </div>
          <div className="sketch-4">
            <h1><b>Accesible</b></h1><br></br>
            <h2>This is easy Accessible for both the end users</h2>
          </div>
      </div>
      </div>
  )
}

export default About;