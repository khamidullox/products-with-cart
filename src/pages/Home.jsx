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
        {!data && (
          <h3 className="text-center mb-10 mt-5 font-bold">
            Loading ...{" "}
            <span className="loading loading-spinner loading-md "></span>
          </h3>
        )}
        Products {data && data.length}
      </h1>
      <ProductsList />
    </div>
  );
}
