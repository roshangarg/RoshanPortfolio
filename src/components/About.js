import React from "react";
import logo from "../ROSHAN.jpeg";
import resume from "../Roshan's Resume-4-1.pdf";
import { Box, Button, Typography, useMediaQuery } from "@material-ui/core";

const About = () => {
 

  return (
    <div
      style={{
       
        margin: "3rem 1rem",
        width: "100%",
        // textAlign: "center",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
     
      <Box style={{marginRight:'1rem'}}>
        <Typography
          variant="h3"
          style={{ fontWeight: "900", marginBottom: "1rem" }}
        >
          About me
        </Typography>
        <Typography variant="h6" style={{}}>
          Hello there !!
          I'm Roshan Garg ,
          I am an web developer . I have the ability to complete the task
          on given time and i am a type of person who is good in{" "}
          <b>Time management . </b>
           Have the ability to work with large team I am an team player who plays
          with team and have the ability to give the positive response to the
          company .
          <br />
          <b>
            I am very accurate developer with the Experience of 1 Year in the
            field of web Development
          </b>
          <br />
          
        </Typography>
        <Box style={{marginTop:'1rem'}}>

          <a href={resume} download = " Roshan Resume ">
          <Button   variant="outlined" color="primary">
      Download Resume 
      </Button>
          </a>
          </Box>
      </Box>
    </div>
  );
};

export default About;
