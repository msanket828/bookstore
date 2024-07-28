import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import { ScrollTop } from "./components";
import { FilterProvider } from "./context/FilterContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <CartProvider>
        <FilterProvider>
          <ToastContainer
            position="bottom-right"
            closeButton={false}
            autoClose={1000}
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
