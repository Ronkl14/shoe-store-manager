import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ShoeList, ShoePage, AddShoe } from "./pages";
import { MainNavigation } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ShoeList /> },
      { path: "/shoe-page", element: <ShoePage /> },
      { path: "/add-shoe", element: <AddShoe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
