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

function DisplayQuestions({questions}) {
  const classes = useStyles();
  const responses = questions.map((question, index) => {
    return (
      <div key={index}>
        <Typography
          align="left"
          variant="body1"
          >
          {question.question}
        </Typography>
        <Typography
        align="left"
        paragraph={true}
        variant="body1"
        >
          {question.answer.toString()}
        </Typography>
      </div>
    )
  })
  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography
        align="center"
        paragraph={true}
        variant="h4"
      >
        Registry Questions
      </Typography>
      {responses}
    </Paper>
  )
}

function LoggedIn({user, questions, logout}) {
  const classes = useStyles();
  console.log(questions)
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
        questions && Array.isArray(questions) ? <DisplayQuestions questions={questions}/> : null
      }
    </Container>
  )
}

export default LoggedIn