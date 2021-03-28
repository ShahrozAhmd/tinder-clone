import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Flips from "./Components/flip-cards";
import axios from "axios";
import react, { useEffect, useState } from "react";

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

const App = () => {
  //states
  const [images, setImages] = useState();
  const [action, setActions] = useState(0);
  const [auth, setAuth] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data.slice(0, 10));
        setImages(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const deleteCard = (index) => {
  //   console.log(index);
  //   // const state = [...images]
  //   let data = images.map((item) => {
  //     return item.id !== images[index];
  //   });
  //   setImages(data);
  //   console.log(images);
  // };

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
          <Flips data={images} />
        </Box>
        <Box>
          <Typography variant="h3">{"like>"}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
