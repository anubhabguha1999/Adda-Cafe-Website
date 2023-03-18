import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateContainer, MainContainer } from "./components";

import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "/createItem",
        element: <CreateContainer />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
