import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Avatar, Link, Typography ,CardContent, Grid , Box} from '@material-ui/core';
import logo  from '../ROSHAN.jpeg'

const useStyles = makeStyles({
  
});
const Project = () => {
  const classes = useStyles();
  

  return (
    <div style={{margin:'2rem 0rem ' }} >
      <Typography variant='h6' style={{width:'100%' , textAlign:'center' ,margin:'2rem 0rem',background:'blue' }}>
        My Projects 
      </Typography>
      <Box style={{width:'100%' ,display:'flex', textAlign:'center' ,margin:'2rem 0rem',justifyContent:'center'}}>

      <Avatar src={logo} style={{ width:'120px', height:'120px', }}/>
      </Box>
      <Grid container spacing={3}>
        <Grid style={{width :'50%' }} item sm={6} xs={12}>
        <Link href='https://roshangarg.github.io/muiProject/' target='_blank' style={{textDecoration:'none'}}>
            <Card style={{background:'black',color:'white' , border:'1px solid white'}}>

              <CardContent>
              <Typography variant='h5' >
                  Create Notes :-  
                </Typography>
                <br />
                <Typography>
                  I Created an wep application using the react js where the user can create notes and those will be added to the cards and i used the firebase for the database . and can be deleted as well .
                </Typography>

              </CardContent>
            </Card>
        </Link>
        </Grid>
        <Grid style={{width :'50%',}} item sm={6} xs={12}>
        <Link style={{textDecoration:'none'}}  href='https://roshangarg.github.io/RoshhChat/' target='_blank'>
            <Card style={{background:'black',color:'white' ,border:'1px solid white'}}>

              <CardContent>
              <Typography variant='h5'  >
                 Chat App :-
                </Typography>
                <br />
                <Typography>
                  I made an chat web application using the react js , material ui , react-redux , and firebase 
                  where the user can sign in and sign out and chat with their friends , for the authentication i used the firebase and as well for the database 
                </Typography>

              </CardContent>
            </Card>
        </Link>
          </Grid>
      </Grid>
        
    

    </div>
  )
}

export default Project