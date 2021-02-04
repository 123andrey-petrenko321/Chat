import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./AppRouter";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
