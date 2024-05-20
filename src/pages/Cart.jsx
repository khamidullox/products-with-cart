import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrFormTrash } from "react-icons/gr";
import { chekAll, deleteCart, deleteAll } from "../Slice/cartSlice";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, chek, price } = useSelector((state) => state.cart);
  let dispetch = useDispatch();

  if (cart.length == 0) {
    return (
      <div className="flex items-center justify-center mt-72">
        <h1 className="  opacity-50 font-semibold text-3xl">
          You don't have any products yet
        </h1>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto mx-20 my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => {
                      dispetch(chekAll());
                    }}
                    checked={chek}
                  />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              {/* <th>Amout</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart &&
              cart.map((item) => {
                return (
                  <Fragment key={Math.random()}>
                    <tr>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={chek ? true : undefined}
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              <Link
                                to={"/singleProduct/" + item.id}
                                className=""
                              >
                                {item.title.substring(0, 30)}
                              </Link>
                            </div>
                            <div className="text-sm opacity-50">
                              {item.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" w-2/6">
                        {item.description.substring(0, 100)}
                        <br />
                      </td>
                      <td className="">
                        <span className=" text-base font-bold">
                          {new Intl.NumberFormat("us-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.price)}
                          x{item.amout}
                        </span>
                        <br />
                        <span className="badge badge-ghost badge-sm  font-semibold">
                          {new Intl.NumberFormat("us-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.price * item.amout)}
                        </span>
                      </td>
                      {/* <th>
                        <button className="btn btn-ghost btn-xs"></button>
                      </th> */}
                      <th>
                        <button
                          onClick={() => {
                            dispetch(deleteCart(item.id));
                          }}
                          className="btn btn-outline btn-xs"
                        >
                          <GrFormTrash className="size-6" />
                        </button>
                      </th>
                    </tr>
                  </Fragment>
                );
              })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>
                Total Price:
                {new Intl.NumberFormat("us-US", {
                  style: "currency",
                  currency: "USD",
                }).format(price)}
              </th>
              {/* <th>Amout</th> */}
              <th>
                <button
                  className="btn btn-outline btn-xs font-bold"
                  onClick={() => {
                    dispetch(deleteAll());
                  }}
                >
                  All Delete
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Cart;
