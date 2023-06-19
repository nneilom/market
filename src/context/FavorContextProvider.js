import React, { createContext, useState } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/function";
export const favorContext = createContext();
const FavorContextProvider = ({ children }) => {
  const [favor, setFavor] = useState(JSON.parse(localStorage.getItem("favor")));
  console.log(favor);
  const getFavor = () => {
    let favor = JSON.parse(localStorage.getItem("favor"));
    if (!favor) {
      localStorage.setItem(
        "favor",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      favor = {
        products: [],
        totalPrice: 0,
      };
    }
    setFavor(favor);
  };

  const addProductToFavor = (product) => {
    let favor = JSON.parse(localStorage.getItem("favor"));
    if (!favor) {
      favor = { products: [], totalPrice: 0 };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    let productToFind = favor.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favor.products.push(newProduct);
    } else {
      favor.products = favor.products.filter(
        (elem) => elem.item.id != product.id
      );
    }

    favor.totalPrice = calcTotalPrice(favor.products);
    localStorage.setItem("favor", JSON.stringify(favor));
    setFavor(favor);
    getFavor();
  };

  const changeProductCount = (count, id) => {
    let favor = JSON.parse(localStorage.getItem("favor"));

    favor.products = favor.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    favor.totalPrice = calcTotalPrice(favor.products);

    localStorage.setItem("favor", JSON.stringify(favor));
    setFavor(favor);
  };
  const deleteFavorProduct = (id) => {
    let favor = JSON.parse(localStorage.getItem("favor"));

    favor.products = favor.products.filter((elem) => elem.item.id !== id);

    favor.totalPrice = calcTotalPrice(favor.products);

    localStorage.setItem("favor", JSON.stringify(favor));
    setFavor(favor);
  };

  const values = {
    getFavor,
    addProductToFavor,
    favor,
    changeProductCount,
    deleteFavorProduct,
  };
  return (
    <favorContext.Provider value={values}>{children}</favorContext.Provider>
  );
};

export default FavorContextProvider;
