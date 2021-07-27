import { Button, Container, makeStyles, Paper, TextField } from "@material-ui/core";
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

function login(email, password, setUser) {
  setUser({
    email,
    password,
    name: "Robby"
  })
}

function LoggedOut({setUser}) {
  const classes = useStyles();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <Container maxWidth="sm">
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
      </Paper>
     </Container>
  )
}

export default LoggedOut
