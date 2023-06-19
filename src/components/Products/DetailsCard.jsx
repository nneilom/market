import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import "../Products/styles/DetailsCard.css";
import { cartContext } from "../../context/CartContextProvider";
import favor from "../Images/icons8-favorites-128.png";
import { favorContext } from "../../context/FavorContextProvider";
import axios from "axios";
import { JSON_API_CLOTHES } from "../../helpers/consts";
import { authContext } from "../../context/AuthContextProvider";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails } = useContext(collectionContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavor } = useContext(favorContext);
  const {
    user: { email },
    user,
  } = useContext(authContext);

  const [card, setCard] = useState(oneCard);
  console.log(oneCard);
  const navigate = useNavigate();

  useEffect(() => {
    getCardtDetails(id);
  }, []);

  useEffect(() => {
    setCard(oneCard);
  }, [oneCard]);

  const editCard = async (newObj) => {
    await axios.patch(`${JSON_API_CLOTHES}/${newObj.id}`, newObj);
  };
  // ! ===============
  const [comments, setComments] = useState(card.comments);
  console.log(card);

  // ! ---------------
  return (
    <div className="containerDetails">
      <h2>Details</h2>
      <div>
        <img src={card.image_1} alt="" />
      </div>
      {user ? (
        <div
          className="Like"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{ width: "50px", margin: "0" }}
            onClick={() => {
              const newCard = { ...card, like: +card.like + 1 };
              setCard(newCard);
              editCard(newCard);
            }}
          >
            Like
          </button>
          <p style={{ width: "50px", margin: "0", textAlign: "center" }}>
            {card.like}
          </p>
          <button
            style={{ width: "50px", margin: "0" }}
            onClick={() => {
              const newCard = { ...card, like: +card.like - 1 };
              setCard(newCard);
              editCard(newCard);
            }}
          >
            Dislike
          </button>
        </div>
      ) : null}

      <div className="sizePAram"> SIZE:{card.size}</div>
      <p>{card.decr}</p>
      <div
        className="btnblock"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          onClick={() => {
            addProductToFavor(card);
          }}
          src={favor}
          alt=""
          style={{ width: "35px", margin: "0" }}
        />
        <button
          style={{ width: "160px" }}
          onClick={() => {
            addProductToCart(card);
            navigate("/");
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            navigate(`/order/${id}`);
          }}
          style={{ width: "160px" }}
        >
          Buy Now{" "}
        </button>
      </div>
      {user ? (
        <>
          <h4>Commetns</h4>
          <input
            className="commetnsInp"
            // style={{ width: "300px", height: "50px" }}
            type="text"
            placeholder="Comments"
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          {!card.hasOwnProperty("comments") ? (
            <button
              className="commentsBtn"
              onClick={() => {
                const newObj = { ...card, comments: [] };
                newObj.comments.push(comments);
                editCard(newObj);
                setCard(newObj);
              }}
            >
              Add Comments
            </button>
          ) : (
            <button
              className="commentsBtn"
              onClick={() => {
                const newObj = { ...card };
                newObj.comments.push(comments);
                editCard(newObj);
                setCard(newObj);
              }}
            >
              Add Comments
            </button>
          )}

          <div>
            <h4>User Comments:</h4>
            {card.hasOwnProperty("comments")
              ? card.comments.map((elem) => (
                  <div key={elem.id} className="commentsBlock">
                    <p style={{ fontSize: "0.8em" }}>Data: {Date()}</p>
                    <p>User: {email}</p>
                    <p>Comments: {elem}</p>
                  </div>
                ))
              : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DetailsCard;
