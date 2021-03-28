import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import image from "../assets/image.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: "100%",
  },
});

const ViewCard = (props) => {
  const classes = useStyles();

  return props.data
    ? props.data.map((item, index) => {
        return (
          <div onClick={() => props.delete(index)} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${item.url}`} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })
    : null;
};

export default ViewCard;
