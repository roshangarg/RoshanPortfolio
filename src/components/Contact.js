import { TextField, Typography, Button } from "@material-ui/core";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wdsa9hp",
        "template_dhanvdr",
        form.current,
        "s34___pcGSoSk0v23"
      )
      .then(
        (result) => {
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          background: "rgba(255,255,255,0.8)",

          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          padding: "2rem",
          minWidth: "500px",
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

        <form ref={form} onSubmit={sendEmail} noValidate>
          <TextField
            type="text"
            fullWidth
            name="user_name"
            label="Name"
            variant="outlined"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            type="email"
            name="user_email"
            fullWidth
            placeholder="Email"
            label="Email"
            variant="outlined"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            type="text"
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            minRows={4}
            multiline
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
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
