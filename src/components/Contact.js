import { TextField, Typography, Button } from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import React, { useState } from "react";

const Contact = () => {
  const [email,setEmail] = useState('')
  const [name, setName] = useState('')
  const [message,setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {email , name , message }
    console.log(data)
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0rem",
      }}
    >
      <div
        style={{
          display: "flex",
          background: 'rgba(255,255,255,0.8)',
          
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          padding: "2rem",
         
          color: "black",
          // width:'50%',

          borderRadius: "10%",
        }}
      >
        <Typography
          style={{ fontWeight: "bold", color: "blue", marginBottom: "1rem" }}
          variant="h5"
        >
          Contact me{" "}
        </Typography>
        
        <ContactMailIcon
          style={{ marginBottom: "2rem" }}
          fontSize="large"
          color="primary"
        />
        <form onSubmit={handleSubmit} noValidate> 
          <TextField type="text" fullWidth label="Name" variant="outlined" value={name}  onChange={(e)=>setName(e.target.value)} />
          <br />
          <br />
          <TextField
            type="email"
            fullWidth
            placeholder="Email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField type="text" fullWidth label="Message" variant="outlined" minRows={4}  multiline
           value={message} onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <br />
          <Button
            type="submit"
            style={{
              background: "blue",
              color: "white",
              padding: "1rem",
              borderRadius: "20px",
            }}
            fullWidth
            variant="contained"
          >
            Send
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Contact;
