import React from 'react'
import logo from '../ROSHAN.jpeg'
import resume from "../Roshan's Resume-4-1.pdf"
import { Box, Typography, useMediaQuery  } from '@material-ui/core'


const About = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div style={{display:'flex' ,margin:'2rem 0rem' , width:'100%', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
      {matches && 
      <Box>
        <img src={logo} alt="roshan img "  width='200px'  style={{borderRadius:'20px', marginRight:'5rem'}} />
      </Box>
      }
      <Box >
        <Typography variant='h3' style={{fontWeight:'900' , marginBottom:'1rem'}} >
          About me 
        </Typography>
        <Typography variant='h6' style={{}} >
         Hello there !! <br />
         I'm Roshan Garg , <br />
        I am an web developer . <br /> I have the ability to complete the task on given time and i am a type of person who is good in <b>Time management</b>
        Have the ability to work with large team
        I am an team player who plays with team and have the ability to give the positive response to the company . 
        <br />
        <b>
          I am very accurate developer with the Experience of 1 Year in the field of web Development 
        </b>
        <br />
        <a href={resume} download>Download Resume</a>


        

        </Typography>
      </Box>
    </div>
  )
}

export default About