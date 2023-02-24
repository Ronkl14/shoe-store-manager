import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ShoeList, ShoePage, AddShoe, ErrorPage } from "./pages";
import { MainNavigation } from "./components";
import { getAllShoes } from "./utils/API";
import { useState, useEffect } from "react";

function App() {
  const [shoes, setShoes] = useState();

  useEffect(() => {
    getAllShoes(setShoes);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ShoeList allShoes={shoes} /> },
        { path: "/shoe-page/:id", element: <ShoePage /> },
        { path: "/add-shoe", element: <AddShoe /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
