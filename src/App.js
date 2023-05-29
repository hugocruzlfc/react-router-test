import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RouterProvider
        router={createBrowserRouter([
          {
            element: <Home />,
            path: "*",
          },
          {
            element: <About />,
            path: "/about",
          },
          {
            element: <Contacts />,
            path: "/contacts",
          },
        ])}
      />
    </div>
  );
}
