import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "../Products/styles/Add.module.css";
import { collectionContext } from "../../context/CollectionContextProvider";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const { oneCard, getCardtDetails, editCard } =
    React.useContext(collectionContext);
  const [card, setCard] = React.useState(oneCard);

  React.useEffect(() => {
    getCardtDetails(id);
  }, []);

  React.useEffect(() => {
    setCard(oneCard);
  }, [oneCard]);

  console.log(card.image_1);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...card,
        [e.target.name]: Number(e.target.value),
      };
      setCard(obj);
    } else {
      let obj = {
        ...card,
        [e.target.name]: e.target.value,
      };
      setCard(obj);
    }
    console.log(card);
  };
  return (
    <div className={classes.AddContainer}>
      <h4>EDIT PRODUCT</h4>
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        // style={{ border: "none" }}
        className={classes.input}
        margin="normal"
        variant="outlined"
        value={card.image_1}
        name="image_1"
        onChange={handleInp}
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.image_2}
        margin="normal"
        variant="outlined"
        name="image_2"
        onChange={handleInp}
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.title}
        margin="normal"
        onChange={handleInp}
        name="title"
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.price}
        margin="normal"
        name="price"
        onChange={handleInp}
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.color}
        margin="normal"
        onChange={handleInp}
        name="color"
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.size}
        margin="normal"
        name="size"
        onChange={handleInp}
      />
      <TextField
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
        className={classes.input}
        value={card.decr}
        margin="normal"
        name="decr"
        onChange={handleInp}
      />
      <Button
        className={classes.Btn}
        variant="contained"
        disableElevation
        style={{ margin: "20px", backgroundColor: "black" }}
        onClick={() => editCard(card)}
      >
        Save Card Information
      </Button>
    </div>
  );
}
