import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "..";
import Loader from "./Loader";
import firebase from "firebase";

const ChatPage = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMassage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid container justify={"center"}>
        <div
          style={{
            width: "70%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
            marginTop: "25px",
            borderRadius: "10px",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.createdAt}
              style={{
                padding: "10px",
                width: "auto",
                display: "flex",
                marginLeft: user.uid === message.uid ? "auto" : "0",
              }}
            >
              <Grid
                container
                style={{
                  flexDirection:
                    user.uid === message.uid ? "row-reverse" : "row",
                }}
                alignItems={"flex-end"}
              >
                <Avatar
                  style={{ width: "30px", height: "30px" }}
                  src={message.photoURL}
                />
                <div style={{ padding: "0 5px 0 5px" }}>{message.text}</div>
              </Grid>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "70%", marginTop: "25px" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            variant={"outlined"}
          />
          <Button
            variant={"outlined"}
            color={"primary"}
            style={{ marginTop: "10px" }}
            onClick={sendMassage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatPage;
