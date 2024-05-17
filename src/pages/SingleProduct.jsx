import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart, filterReporire } from "../Slice/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
function SingleProduct() {
  let data = useLoaderData();
  let { id } = useParams();
  let filterData = data.filter((product) => {
    return product.id == id;
  });
  const { cart } = useSelector((state) => state.cart);
  let dispetch = useDispatch();

  return (
    data &&
    filterData.map((singleProduct) => {
      return (
        <div key={singleProduct.id} className="">
          <div className="card lg:card-side bg-base-100 shadow-xl p-5 my-5 mx-20">
            <div className="w-64 carousel rounded-box">
              {singleProduct.images.map((img, id) => {
                return (
                  <div key={id} className="carousel-item w-full">
                    <img
                      src={img}
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                );
              })}
            </div>
            <div className="card-body">
              <h2 className="card-title">{singleProduct.title}</h2>
              <p className=" lg:w-[50rem] w-full">
                {singleProduct.description}
              </p>
              <div className="card-actions justify-end items-center">
                <p className=" font-semibold text-lg flex flex-col gap-2">
                  <p>Price: {singleProduct.price}$</p>{" "}
                  <p>Categore: {singleProduct.category.name}</p>
                </p>

                <button
                  onClick={() => {
                    dispetch(addCart(singleProduct));
                    dispetch(filterReporire());
                    toast.success("Successfully add cart!");
                  }}
                  className="btn btn-info"
                >
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default SingleProduct;
