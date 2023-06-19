import React, { useEffect } from "react";
import "./navbar.css";
import basket from "../Images/basket.svg";
import backetFull from "../Images/Basket-full.svg";

import user from "../Images/User.svg";
import clothing from "../Images/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { authContext } from "../../context/AuthContextProvider";
import { favorContext } from "../../context/FavorContextProvider";
import { useState } from "react";
import burgerIcon from "../Images/burger-menu.svg";
import ugmonk from "../Images/ugmonk.png";

const Navbar = () => {
  const {
    user: { email },
    handleLogout,
  } = React.useContext(authContext);
  const { getCart, cart } = useContext(cartContext);
  const { getFavor, favor } = useContext(favorContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    getFavor();
  }, []);

  const navigate = useNavigate();

  const { searchCards } = useContext(collectionContext);

  return (
    <div>
      {isMenuOpen && (
        <div className="menu">
          {/* <Link to="/"> */}
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Clothing +
          </p>
          {/* </Link> */}
          <Link to="/add">
            <p>Add Product</p>
          </Link>
          <Link to="/favor">
            <p>Favorites</p>
          </Link>
          <div className="btns-2">
            <button>
              <img
                className="basket"
                src={!cart.products.length ? basket : backetFull}
                alt=""
                onClick={() => {
                  navigate("/cart");
                }}
              />
            </button>
            <button>
              <img
                src={user}
                alt=""
                onClick={() => navigate("/auth")}
                className="basket"
              />
            </button>
            <button style={{ fontSize: "1em" }}>{email}</button>
            {email ? (
              <>
                <button
                  style={{ width: "70px" }}
                  className="search"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log Out
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
      <div className="header">
        <img src={ugmonk} alt="" className="logo" />
        <h1>UGMONK</h1>
        <nav>
          <Link to="/">
            <p>Clothing +</p>
          </Link>

          <Link to="/add">
            <p>Add Product</p>
          </Link>
          <Link to="/favor">
            <p>Favorites</p>
          </Link>
        </nav>
        <div className="btns">
          <input
            type="text"
            className="search"
            placeholder=" Search....."
            onChange={searchCards}
          />

          <button>
            <img
              className="basket"
              src={!cart.products.length ? basket : backetFull}
              alt=""
              onClick={() => {
                navigate("/cart");
              }}
            />
          </button>
          <button>
            <img
              src={user}
              alt=""
              onClick={() => navigate("/auth")}
              className="basket"
            />
          </button>
          <button style={{ fontSize: "1em" }}>{email}</button>
          {email ? (
            <>
              <button
                style={{ width: "80px", padding: "0" }}
                className="search"
                onClick={() => {
                  handleLogout();
                }}
              >
                Log Out
              </button>
            </>
          ) : null}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={burgerIcon} alt="Burger Menu" className="burger-icon" />
          </button>
        </div>
      </div>
      <img className="clothing" src={clothing} alt="" />
    </div>
  );
};

export default Navbar;
