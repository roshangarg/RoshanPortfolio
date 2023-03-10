import { Avatar, Box, Typography ,useMediaQuery} from '@material-ui/core'
import React from 'react'
import Contact from './Contact'
import logo  from '../ROSHAN.jpeg'
import Project from './Project'
import About from './About'
import Skills from './Skills'
const Home = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (

    <div >
     <div style={{width:'100%' , height:'92vh',display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center'}}> 
           
           <Typography variant='h6' className='move' style={{fontSize:'2rem',maxWidth:'80%', marginRight:'1rem' }} >
            Hey there !! <br/> I'm ROSHAN GARG <br />
            Web Developer
           </Typography>
           {!matches && 
           
           <Avatar src={logo} className='move1' style={{ width:'120px', height:'130px', objectFit:'contain'}}/>}
           
      { matches && 
      <Box className='move1' >
        <img src={logo} alt="roshan img "   width='200px'  style={{borderRadius:'20px', marginRight:'5rem'}} />
      </Box>
      }
           
     
      </div>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
     

    
      
    </div>
  )
}

export default Home