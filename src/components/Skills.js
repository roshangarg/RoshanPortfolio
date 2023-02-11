import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

const Skills = () => {
  const skill = [
    {
      name: "Python3",
      rating: "7/10",
    },
    {
      name: "HTML5",
      rating: "9/10",
    },
    {
      name: "CSS3",
      rating: "7/10",
    },
    {
      name: "JavaScript",
      rating: "7/10",
    },
    {
      name: "Bootstrap",
      rating: "10/10",
    },
    {
      name: "React js",
      rating: "8/10",
    },
    {
      name: "React-Redux",
      rating: "7/10",
    },
    {
      name: "Redux",
      rating: "8/10",
    },
    {
      name: "Firebase",
      rating: "8/10",
    },
  ];
  return (
    <div style={{ margin: "2rem" }}>
      <Container>
        <Box
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            color: "white",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: "900", marginBottom: "1rem" }}
          >
            Skills
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {skill.map((item) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                style={{
                  display: "flex",
                  background: "black",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <Box style={{ flex: "1" }}>
                  <Typography variant="h5">{item.name}</Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <Typography>{item.rating}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
