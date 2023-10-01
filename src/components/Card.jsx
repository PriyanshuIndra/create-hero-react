import React from "react";
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <>
      <div className={classes.background}>
        <p>card: {props.key}</p>
        <h1>Superhero Name: {props.name}</h1>
        <h3>Height: {props.height}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Superpower: {props.superpower}</h3>
      </div>
    </>
  );
};

export default Card;
