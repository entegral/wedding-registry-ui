import { makeStyles, Paper, Typography } from "@material-ui/core";


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



function DisplayQuestions({questions = []}) {
  const classes = useStyles();
  console.log('[DisplayQuestions] questions:', questions)

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
      {
          !Array.isArray(responses) || responses.length === 0 ? null : responses
      }
    </Paper>
  )
}
export default DisplayQuestions