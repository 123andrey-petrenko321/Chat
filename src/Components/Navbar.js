import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AndrewChat
          </Typography>
          {!user ? (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"} color="inherit">
                Login
              </Button>
            </NavLink>
          ) : (
            <Button
              onClick={() => auth.signOut()}
              variant={"outlined"}
              color="inherit"
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
