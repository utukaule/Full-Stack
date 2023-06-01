import React, { useState } from "react";

const About = () => {
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggle =() => {
    if(mystyle.color == 'white'){
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        
    }
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
    }
  }
  return (
    <>
      <div className="container" >
        <div style={mystyle}>
          <h2 >About us</h2>
          <p > this is description about about</p>
          <button onClick={toggle} type="button" className="darkMode btn btn-primary">
            Enable dark mode
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
