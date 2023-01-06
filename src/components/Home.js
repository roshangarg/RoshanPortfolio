import { Avatar, Box, Typography ,useMediaQuery} from '@material-ui/core'
import React from 'react'
import Contact from './Contact'
import logo  from '../ROSHAN.jpeg'
import Project from './Project'
import About from './About'
const Home = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (

    <div >
     <div style={{width:'100%' , height:'92vh',display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center'}}> 
           
           <Typography variant='h6' style={{fontSize:'2rem',maxWidth:'80%', marginRight:'1rem' }} >
            Hey there !! <br/> I'm ROSHAN GARG <br />
            Web Developwer
           </Typography>
           {!matches && 
           
           <Avatar src={logo} style={{ width:'120px', height:'130px', objectFit:'contain'}}/>}
           
           {matches && 
      <Box>
        <img src={logo} alt="roshan img "  width='200px'  style={{borderRadius:'20px', marginRight:'5rem'}} />
      </Box>
      }
           
     
      </div>
      <About/>
      <Project/>
      <Contact/>

    
      
    </div>
  )
}

export default Home