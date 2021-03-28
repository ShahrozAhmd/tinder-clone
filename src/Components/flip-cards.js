import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
//import the library for making tinder like swipe
import TinderCard from "react-tinder-card";
import "./cards.css";

function FlipCards(props) {
  const characters = props.data;
  const [lastDirection, setLastDirection] = useState();

  //getting the information of event while swiping
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    // setTimeout(() => {
    //   props.action(direction, nameToDelete);
    // }, 3000);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      {/* <h1>React Tinder</h1> */}
      <div className="cardContainer">
        {characters &&
          characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.id)}
              onCardLeftScreen={() => outOfFrame(character.id)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                {/* <Typography variant="p">{character.title}</Typography> */}
              </div>
            </TinderCard>
          ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default FlipCards;
