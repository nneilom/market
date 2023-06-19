import * as React from "react";

import Button from "@mui/material/Button";
import classes from "../Products/styles/Add.module.css";
import { collectionContext } from "../../context/CollectionContextProvider";

export default function AddProduct() {
  const { addCard } = React.useContext(collectionContext);
  const [card, setCard] = React.useState({
    title: "",
    price: "",
    image_1: "",
    image_2: "",
    color: "",
    size: "",
    decr: "",
  });

  const handleInp = (e) => {
    console.log(e);
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
      <h4>ADD PRODUCT</h4>
      <input
        className={classes.inpOrder}
        placeholder="Image-1"
        margin="normal"
        variant="outlined"
        name="image_1"
        onChange={handleInp}
      />
      <input
        className={classes.inpOrder}
        placeholder="Image-2"
        margin="normal"
        variant="outlined"
        name="image_2"
        onChange={handleInp}
      />
      <input
        className={classes.inpOrder}
        placeholder="Title"
        margin="normal"
        onChange={handleInp}
        name="title"
      />
      <input
        className={classes.inpOrder}
        placeholder="Price"
        margin="normal"
        name="price"
        onChange={handleInp}
      />
      <input
        className={classes.inpOrder}
        placeholder="Color"
        margin="normal"
        onChange={handleInp}
        name="color"
      />
      <input
        className={classes.inpOrder}
        placeholder="Size"
        margin="normal"
        name="size"
        onChange={handleInp}
      />
      <input
        className={classes.inpOrder}
        placeholder="Description"
        margin="normal"
        name="decr"
        onChange={handleInp}
      />
      <Button
        className={classes.Btn}
        variant="contained"
        disableElevation
        style={{ margin: "20px", backgroundColor: "black" }}
        onClick={() => {
          addCard(card);
        }}
      >
        Add Product
      </Button>
    </div>
  );
}
