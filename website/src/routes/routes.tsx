import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Content from "../layout/content/content";
import React from "react";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Policy from "../pages/policy/policy";
import Competition from "../pages/competition/competition";
import Contact from "../pages/contact/contact";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Content />,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "competitions",
          element: <Competition></Competition>,
        },
        {
          path: "policies",
          element: <Policy/>
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
      ],
    },
    {
      path: "*",
      element: <Content />,
      loader: async () => {
        return redirect("/");
      },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default React.memo(Routes);
