import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { collectionContext } from "../../context/CollectionContextProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

export default function CollectionCard({ item }) {
  const {
    user: { email },
  } = React.useContext(authContext);

  const navigate = useNavigate();
  const { deleteCard } = React.useContext(collectionContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <Card sx={{ width: 345, margin: 3, border: "none", boxShadow: "none" }}>
      <CardMedia
        sx={{ height: 350 }}
        image={isHovered ? item.image_2 : item.image_1}
        title="green iguana"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {email === ADMIN ? (
          <>
            <Button
              size="small"
              onClick={() => navigate(`/edit/${item.id}`)}
              style={{
                color: "black",
                backgroundColor: "rgba(249, 217, 134, 1)",
              }}
            >
              Edit
            </Button>

            <Button
              size="small"
              onClick={() => {
                deleteCard(item.id);
              }}
              style={{ color: "white", backgroundColor: "black" }}
            >
              Delete
            </Button>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}
