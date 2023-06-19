import React, { useContext } from "react";
import CollectionList from "../components/Products/CollectionList";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPAge from "../components/Products/AuthPage";
import AddProduct from "../components/Products/AddProduct";
import EditProduct from "../components/Products/EditProduct";
import Cart from "../components/Cart/Cart";

import DetailsCard from "../components/Products/DetailsCard";
import Order from "../components/Order/Order";
import OrderAll from "../components/Order/OrderAll";
import Auth from "../components/auth/Auth";
import { authContext } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import Favor from "../components/Favor/Favor";
// import CreditCard from "../components/Products/CreditCard";

const MainRoutes = () => {
  const { user } = useContext(authContext);
  console.log(user.email, ADMIN);
  const COLLECTION_ROUTES = [
    { link: "/", element: <CollectionList />, id: 1 },
    { link: "/admin", element: <AuthPAge />, id: 2 },
    { link: "/cart", element: <Cart />, id: 5 },
    { link: "/details/:id", element: <DetailsCard />, id: 6 },
    { link: "/order/:id", element: <Order />, id: 7 },
    { link: "/orderall", element: <OrderAll />, id: 8 },
    { link: "/object", element: <CollectionList />, id: 8 },
    { link: "/auth", element: <Auth />, id: 9 },
    { link: "/favor", element: <Favor />, id: 10 },
    // { link: "/credit", element: <CreditCard />, id: 11 },
  ];

  const ADMIN_ROUTES = [
    { link: "/edit/:id", element: <EditProduct />, id: 4 },
    { link: "/add", element: <AddProduct />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {COLLECTION_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? ADMIN_ROUTES.map((item) => (
              <Route
                path={item.link}
                key={item.id}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
