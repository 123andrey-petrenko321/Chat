import { Container, Grid } from "@material-ui/core";
import React from "react";
import "../index.css";
const Loader = () => {
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
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
