import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";
export let loader = async () => {
  let req = await fetch("https://api.escuelajs.co/api/v1/products");
  let data = await req.json();
  return data;
};

export default Home;
function Home() {
  let data = useLoaderData();

  return (
    <div className="  w-full  flex flex-col items-center justify-between">
      <h1 className=" font-bold text-xl flex items-center justify-center m-3">
        Products 
      </h1>
      <ProductsList />
    </div>
  );
}
