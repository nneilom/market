import * as React from "react";
import "../Cart/Cart.css";
import cancel from "../Images/cancel.svg";
import { useNavigate } from "react-router-dom";
import { favorContext } from "../../context/FavorContextProvider";

export default function Favor() {
  const navigate = useNavigate();
  const cartCleaner = () => {
    localStorage.removeItem("favor");
    getFavor();
  };
  const {
    getFavor,
    addProductToFavor,
    favor,
    changeProductCount,
    deleteFavorProduct,
  } = React.useContext(favorContext);
  console.log(favor.products);
  React.useEffect(() => {
    getFavor();
  }, []);
  console.log(favor.products);
  return (
    <>
      <h3>FAVORITES</h3>
      <div className="cartContanier">
        <div className="cartLeft">
          {favor.products.map((elem) => (
            <div
              className="cartElem"
              key={elem.item.id}
              style={{ backgroundColor: "rgba(249, 217, 134, 1)" }}
            >
              <img
                src={elem.item.image_1}
                alt=""
                width={100}
                onClick={() => navigate(`/details/${elem.item.id}`)}
              />
              <h5>{elem.item.title}</h5>
              <h5>{elem.item.color}</h5>
              <h5>{elem.item.size}</h5>
              <h5>${elem.subPrice}</h5>

              <img
                src={cancel}
                alt=""
                onClick={() => {
                  deleteFavorProduct(elem.item.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
