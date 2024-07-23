import React from "react";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";
import { Header } from "./components/index";
import { Footer } from "./components/index";
const App = () => {
  return (
    <div className="app dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
