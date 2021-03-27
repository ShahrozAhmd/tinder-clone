import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import react from "react";
import Card from "./Components/cards";


const useStyles = makeStyles({
  container: {
    border: "1px solid black",
    height: "100vh",
  },
  i: {
    border: "1px solid purple",
    height: "20px",
  },
  main: {
    width: "100%",
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters maxWidth={1}>
      <Box display="flex" conatiner flexDirection="row-reverse" p={2}>
        <Box>
          <Button variant="contained" color="secondary">
            SignUp
          </Button>
        </Box>
      </Box>
      <Box
        className={classes.main}
        display="flex"
        conatiner
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h3">{"<Dislike"}</Typography>
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Typography variant="h3">{"like>"}</Typography>
        </Box>
      </Box>
    </Container>
   
  );
}

export default App;
