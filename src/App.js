import { Box, Button, Container, Grid, makeStyles } from "@material-ui/core";
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
      <Box display="flex" conatiner flexDirection="row" justifyContent = "center">
        <Box>
          <Card />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
