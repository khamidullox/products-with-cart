import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrFormTrash } from "react-icons/gr";
import { chekAll, deleteCart, deleteAll } from "../Slice/cartSlice";
function Cart() {
  const { cart, chek } = useSelector((state) => state.cart);
  let dispetch = useDispatch();

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
            <th>Amout</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cart &&
            cart.map((item, id) => {
              return (
                <Fragment key={id}>
                  <tr key={id}>
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
                            {item.title.substring(0, 30)}
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
                        {" "}
                        {item.price}$ x{item.amout}
                      </span>
                      <br />
                      <span className="badge badge-ghost badge-sm  font-semibold">
                        {item.price * item.amout}$
                      </span>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs"></button>
                    </th>
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
            <th>Price</th>
            <th>Amout</th>
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

export default Cart;
