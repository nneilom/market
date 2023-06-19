import React, { useContext, useEffect, useState } from "react";
import "../Order/Order.css";
import paypal from "../Images/paypal.svg";
import visa from "../Images/visa.svg";
import gogpay from "../Images/google-pay.svg";
import appay from "../Images/apple-pay.svg";
import { cartContext } from "../../context/CartContextProvider";
import cancel from "../Images/cancel.svg";
import { useNavigate } from "react-router-dom";

const OrderAll = () => {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart.products.length);

  return (
    <>
      <div className="orderContainer">
        <div className="leftOrder">
          <h5>Express checkout options</h5>
          <div className="iconPay">
            <div>
              <img src={paypal} width={80} alt="" />
            </div>

            <div>
              <img src={gogpay} width={80} alt="" />
            </div>
            <div>
              <img src={visa} width={80} alt="" />
            </div>
            <div>
              <img src={appay} width={80} alt="" />
            </div>
          </div>
          <h5>OR</h5>

          <div className="infoOrder">
            <input type="email" placeholder="Email" className="inpOrder" />
            <input
              type="text"
              placeholder="Counry/Region"
              className="inpOrder"
            />
            <div className="cityBlock">
              <input type="text" className="code" placeholder="Postal Code" />
              <input type="text" className="city" placeholder="City" />
            </div>

            <input
              type="text"
              placeholder="Apartament, suite, etc"
              className="inpOrder"
            />
            <input type="text" placeholder="Address" className="inpOrder" />
            <div className="cityBlock">
              <input className="code" type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" className="city" />
            </div>
            <input type="text" placeholder="Phone" className="inpOrder" />
            <button
              onClick={() => {
                navigate("/credit");
              }}
            >
              Contunie to shipping
            </button>
          </div>
        </div>
        <div className="rightOrder">
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
              {/* <button
                onClick={() => {
                  deleteCartProduct(elem.item.id);
                }}
              > */}
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
          <div>
            TOTAL PRICE: <h4>${cart?.totalPrice}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderAll;
