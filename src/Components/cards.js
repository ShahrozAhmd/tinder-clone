import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import image from '../assets/image.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width:200,
  },
});

const ViewCard = ()=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Github"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Github
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           I am Github Octa
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ViewCard;