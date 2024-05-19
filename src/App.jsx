import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home, About, Cart, Contact, SingleProduct } from "./pages";
import { loader as loaderHome } from "./pages/Home";
import { loader as loaderSingle } from "./pages/SingleProduct";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: loaderHome,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
          loader: loaderSingle,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
