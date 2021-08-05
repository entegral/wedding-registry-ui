import { Button, Container, makeStyles, Paper } from "@material-ui/core";


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


function LoggedIn({user, AppEntryPoint, logout}) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Button 
          variant="contained"
          color="primary"
          onClick={logout}
        >
          Logout
        </Button>
        <p>
          logged in as {user.name} using {user.email} with password: {user.password}
        </p>
      </Paper>
      {
        AppEntryPoint ? <AppEntryPoint user={user}/> : null
      }
    </Container>
  )
}

export default LoggedIn