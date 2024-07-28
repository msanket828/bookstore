import React, { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedProduct } from "../../../services";
import { toast } from "react-toastify";

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getFeaturedProduct();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-center" });
      }
    }
    getProducts();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </section>
  );
};

export default FeatureProduct;
