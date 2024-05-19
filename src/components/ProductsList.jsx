import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function ProductsList() {
  let data = useLoaderData();
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center  justify-between gap-10 ">
      {data &&
        data.map((product) => {
          return (
            <li key={product.id} className="card w-96 bg-base-100 shadow-xl ">
              <figure className="px-10 pt-10 size-80 w-full object-cover ">
                <img
                  src={product.image}
                  alt="Shoes"
                  className="rounded-xl object-contain "
                />
              </figure> 
              <div className="card-body items-start text-start gap-5">
                <h2 className="card-title text-center w-full line-clamp-1">
                  {product.title}
                </h2>
                <p className=" line-clamp-2 fle ">{product.description}</p>
                <div className="  w-full">
                  <div className="card-action w-full gap-5 flex justify-between items-center ">
                    <button className="text-end w-20 p-5 badge badge-outline">
                      {product.price}$
                    </button>
                    <Link
                      to={"/singleProduct/" + product.id}
                      className="btn btn-info rounded-xl"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
