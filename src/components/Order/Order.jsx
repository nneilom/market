import React, { useContext, useEffect, useState } from "react";
import "../Order/Order.css";
import paypal from "../Images/paypal.svg";
import visa from "../Images/visa.svg";
import gogpay from "../Images/google-pay.svg";
import appay from "../Images/apple-pay.svg";
import { collectionContext } from "../../context/CollectionContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const { oneCard, getCardtDetails } = useContext(collectionContext);

  const { id } = useParams();
  const [card, setCard] = useState(oneCard);
  console.log(card);
  useEffect(() => {
    getCardtDetails(id);
  }, []);

  useEffect(() => {
    setCard(oneCard);
  }, [oneCard]);
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
              placeholder="Apartametn, suite, etc"
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
          <img src={card.image_1} width={400} alt="" />
          <h5>{card.title}</h5>
          <h5>SIZE:{card.size}</h5>
          <h4>${card.price}</h4>
        </div>
      </div>
    </>
  );
};

export default Order;
