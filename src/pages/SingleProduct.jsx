import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart } from "../Slice/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
export const loader = async ({ params }) => {
  const req = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await req.json();
  return { product };
};
function SingleProduct() {
  let dispetch = useDispatch();
  const { product } = useLoaderData();

  let [productAmout, setProductAmout] = useState(1);
  let setAmout = (type) => {
    if (type == "minus" && productAmout > 1) {
      setProductAmout(productAmout - 1);
    } else if (type == "plus") {
      setProductAmout(productAmout + 1);
    }
  };
  let newObj = {
    ...product,
    amout: productAmout,
  };

  return (
    product && (
      <div key={product.id} className=" ">
        <div className="card lg:card-side bg-base-100 shadow-xl p-5 my-5 mx-20">
          <div className="w-64 carousel rounded-box">
            {/* {product.images.map((img, id) => {
              return (
                <div key={id} className="carousel-item w-full">
                  <img
                    src={img}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              );
            })} */}
            {
              <img
                src={product.image}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            }
          </div>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className=" lg:w-[50rem] w-full">{product.description}</p>
            <div className="card-actions justify-between items-center">
              <p className=" font-semibold text-lg flex flex-col gap-2">
                <p>Price: {product.price}$</p>{" "}
                <p>Categore: {product.category}</p>
              </p>

              <div className="flex gap-10">
                <p className="flex items-center gap-5 font-bold text-xl">
                  <button
                    onClick={() => {
                      setAmout("minus");
                    }}
                    disabled={productAmout == 1 ? true : false}
                    className="btn btn-outline"
                  >
                    -
                  </button>
                  <h3>{productAmout}</h3>
                  <button
                    onClick={() => {
                      setAmout("plus");
                    }}
                    className="btn btn-outline"
                  >
                    +
                  </button>
                </p>
                <button
                  onClick={() => {
                    dispetch(addCart(newObj));
                    // toast.success("Successfully add cart!");
                  }}
                  className="btn btn-info"
                >
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
  // filterData.map((singleProduct) => {
  // })
}

export default SingleProduct;
