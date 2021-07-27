import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import { useState } from "react";

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

async function postToGraphql(email, password, firstname, lastname) {
  // todo await post
  return {
    email,
    password,
    firstname,
    lastname,
    name: `${firstname} ${lastname}`
  }
}

async function signUpUser(email, password, firstname, lastname, setUser) {
  const user = await postToGraphql(email, password, firstname, lastname)
  setUser(user)
}

function SignUp({email, password, setEmail, setPassword, setUser, setSignUp}) {
  const classes = useStyles();
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)

  return (
    <Paper className={classes.paper} elevation={3}>
        <Button 
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={() => {setSignUp(false)}}
        >
          Back to Login
        </Button>
        <form>
          <TextField
            className={classes.margin}
            defaultValue={email}
            id="standard-basic"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.margin}
            defaultValue={password}
            id="standard-password-input"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="standard-firstname"
            label="Firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="standard-lastname"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </form>
        <Button 
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={() => {signUpUser(email, password, firstname, lastname, setUser)}}
        >
          Sign Up
        </Button>
      </Paper>
  )
}

export default SignUp