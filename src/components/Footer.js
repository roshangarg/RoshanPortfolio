import { Container, Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Link1 from "@material-ui/core/Link";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div style={{ background: "blue" }}>
      <Container style={{padding:'2rem'}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h5" style={{ marginBottom: "1rem" ,fontWeight:'700'}}>
                Menu
              </Typography>
            </Box>
            <Box>
              {routes.map((item) => (
                <Box key={item.path} style={{ marginBottom: "1rem" ,}}>
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "13.28px",
                    }}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h5" style={{ marginBottom: "1rem",fontWeight:'700' }}>
                Contact
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" style={{ marginBottom: "1rem" }}>
                Street : Btm Layout 2nd stage{" "}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: "1rem" ,}}>
                City : Bangalore{" "}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: "1rem", }}>
                State : Karnataka
              </Typography>
              <Typography variant="body2" style={{ marginBottom: "1rem" ,}}>
                Phone no : +91- 8516913819
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h5" style={{ marginBottom: "1rem" ,fontWeight:'700' }}>
                Follow me{" "}
              </Typography>
            </Box>
            <Box>
              <Link1
                style={{
                  display: "block",
                  color: "white",
                  marginBottom: "1rem",
                  fontWeight:'700'
                }}
                href="https://www.linkedin.com/in/roshan-garg"
                target="_blank"
              >
                <LinkedInIcon />
              </Link1>
              <Link1
                style={{ display: "block", color: "white" }}
                href="https://www.instagram.com/roshangarg42/?next=%2F"
                target="_blank"
              >
                <InstagramIcon />
              </Link1>
            </Box>
          </Grid>
          
        </Grid>

        <Box>
        <Box >
              <Typography style={{width:'100%',display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center' , marginTop:'1rem' ,  fontWeight: '700'}} variant="h4">
              &copy; {new Date().getFullYear()} Roshan Garg
              </Typography>
            </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
