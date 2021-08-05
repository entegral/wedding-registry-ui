import { Button, Container, makeStyles, Paper, Typography } from "@material-ui/core";


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


function Authenticated({user, AppEntryPoint, logout}) {
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
        <Typography className={classes.margin}>
          logged in as {user.name} using {user.email} with password: {user.password}
        </Typography>
      </Paper>
      {
        AppEntryPoint ? <AppEntryPoint user={user}/> : null
      }
    </Container>
  )
}

export default Authenticated