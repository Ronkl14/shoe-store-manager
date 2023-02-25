import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ShoeList, ShoePage, AddShoe, ErrorPage } from "./pages";
import { MainNavigation } from "./components";

function App() {
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
