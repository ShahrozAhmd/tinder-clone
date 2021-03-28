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

//setting up styles for material ui components
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
  const [liked, setLiked] = useState();
  const [disLiked, setDisLiked] = useState();
  const [auth, setAuth] = useState(0);

  //fetching styles
  const classes = useStyles();

  //setup the function for calculating likes or dislike
  const setAction = (action, id) => {
    console.log(liked);
    console.log(action, id);
    if (action === "right") {
      let likedImages = {
        type: action,
        data: images[id - 1],
      };
      let temp = [...liked];
      setLiked(liked);
      console.log(liked);
    } else if (action === "left") {
      let disLikedImages = {
        type: action,
        data: images[id],
      };
      setDisLiked([...disLiked, disLikedImages]);
    } else {
      console.log("not count");
    }
  };

  //here we fetch data from given
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

  return (
    <Container className={classes.container} disableGutters maxWidth={1}>
      <Box display="flex" conatiner flexDirection="row-reverse" p={2}>
        <Box>
          <Button variant="contained" color="secondary">
            Report
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
          <Flips data={images} action={setAction} />
        </Box>
        <Box>
          <Typography variant="h3">{"like>"}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
