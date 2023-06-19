import * as React from "react";
import { cartContext } from "../../context/CartContextProvider";
import "../Cart/Cart.css";
import cancel from "../Images/cancel.svg";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    React.useContext(cartContext);
  console.log(cart.products);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart.products.length);
  return (
    <>
      <h3>YOU CART</h3>
      <div className="cartContanier">
        <div className="cartLeft">
          {cart.products.map((elem) => (
            <div className="cartElem" key={elem.item.id}>
              <img src={elem.item.image_1} alt="" width={100} />
              <h5>{elem.item.title}</h5>
              <div className="counterBlock">
                <button
                  onClick={() => {
                    const newCount = elem.count + 1;

                    changeProductCount(newCount, elem.item.id);
                  }}
                >
                  +
                </button>
                <span>{elem.count}</span>
                <button
                  onClick={() => {
                    if (elem.count > 1) {
                      const newCount = elem.count - 1;

                      changeProductCount(newCount, elem.item.id);
                    }
                  }}
                >
                  -
                </button>
              </div>
              <h5>${elem.subPrice}</h5>

              <img
                src={cancel}
                alt=""
                onClick={() => {
                  deleteCartProduct(elem.item.id);
                }}
              />
              {/* </button> */}
            </div>
          ))}
        </div>
        <div className="cartRight">
          <h5>TOTAL PRICE</h5>
          <h4>${cart?.totalPrice}</h4>
          <h5>CART COUNT:</h5>
          <span>{cart.products.length}</span>
          <button
            onClick={() => {
              navigate("/orderall");
            }}
          >
            BUY ALL
          </button>
          <button onClick={cartCleaner}>CLERAR CART</button>
        </div>
      </div>
    </>
  );
}
