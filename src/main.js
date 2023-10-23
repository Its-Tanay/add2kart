import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";
import Shop from "./components/shopping/shop";
import Cart from "./components/cart/cart";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/cart",
        element: <Cart />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);

