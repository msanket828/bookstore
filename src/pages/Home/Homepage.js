import React from "react";
import Hero from "./components/Hero";
import FeatureProduct from "./components/FeatureProduct";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import { useTitle } from "../../Hooks/useTitle";

export const Homepage = () => {
  useTitle("Homepage");
  return (
    <main>
      <Hero />
      <FeatureProduct />
      <Testimonial />
      <Faq />
    </main>
  );
};
