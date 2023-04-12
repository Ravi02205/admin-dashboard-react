
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import HomePage from "./pages/homepage/HomePage";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "users",
        element: <UserList />
      },
      {
        path: "newUser",
        element: <NewUser />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "product/:productId",
        element: <Product />
      },
      {
        path: "user/:userId",
        element: <User />
      },
      {
        path: "newProduct",
        element: <NewProduct />
      },
    ]
  }

])
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
