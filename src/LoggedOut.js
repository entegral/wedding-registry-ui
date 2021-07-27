import { Button, Container, makeStyles, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import SignUp from "./SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    marginTop: "10px",
    padding: "40px"
  },
  margin: {
    margin: "10px"
  }
}));

function login(email, password, setUser) {
  setUser({
    email,
    password,
    name: "Robby"
  })
}

function Login({setUser, setSignUp, email, password, setEmail, setPassword}) {
  const classes = useStyles();
  
  return (
    <Paper className={classes.paper} elevation={3}>
        
        <form>
          <TextField
            className={classes.margin}
            id="standard-basic"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="standard-password-input"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button 
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={() => {login(email, password, setUser)}}
        >
          Login
        </Button>
        <Button 
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={() => setSignUp(true)}
        >
          Sign Up
        </Button>
      </Paper>
  )
}

function LoggedOut({setUser}) {
  const [signUp, setSignUp] = useState(false)
  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  if (signUp) {
    return (
      <Container maxWidth="sm">
        <SignUp 
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setUser={setUser}
          setSignUp={setSignUp}
        />
      </Container>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setUser={setUser}
          setSignUp={setSignUp}
        />
       </Container>
    )
  }
}

export default LoggedOut
