import React from "react";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../Hooks/useTitle";

export const Cartpage = () => {
  useTitle("Cart");
  const { cartList } = useCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
