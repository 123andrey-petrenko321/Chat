import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index";
import firebase from "firebase";

const Login = () => {
  const { auth } = useContext(Context);

  const loginHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid
        container
        style={{
          height: "50vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3">Welcome to AndrewChat</Typography>
          </Box>
          <Box marginTop={5}>
            <Button onClick={loginHandler} variant={"outlined"}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
