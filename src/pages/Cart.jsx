import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "../Slice/cartSlice";
function Cart() {
  const { cart, cartReporire } = useSelector((state) => state.cart);
  let dispetch = useDispatch();
  console.log(cartReporire.amout);
  return (
    <ul className="flex m-2 flex-col  items-center justify-center gap-8 mt-10">
      {cartReporire.map((cart, id) => {
        return (
          <li key={id} className="card card-side  bg-base-100 shadow-xl h-72">
            <figure className=" size-72">
              <img src={cart.images[0]} alt="Cart" />
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-2">{cart.title}</h2>
              <p className="lg:w-96 md:w-72 line-clamp-2 ">
                {cart.description}
              </p>
              <div className="card-actions justify-between">
                <p className=" font-bold text-xl">
                  <button
                    onClick={() => {
                      dispetch(minus(cart.id));
                    }}
                    className="btn btn-outline py-0"
                  >
                    -
                  </button>
                  <span className="tex-xl p-5">{cart.amout}</span>
                  <button
                    onClick={() => {
                      dispetch(plus(cart.id));
                    }}
                    className="btn btn-outline py-0"
                  >
                    +
                  </button>
                </p>

                <button className="btn btn-primary">Delte</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Cart;
