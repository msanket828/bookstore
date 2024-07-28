import React from "react";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

export const Orderpage = () => {
  useTitle("Order summary");
  const { state } = useLocation();
  return (
    <main>{true ? <OrderSuccess data={state.data} /> : <OrderFail />}</main>
  );
};
