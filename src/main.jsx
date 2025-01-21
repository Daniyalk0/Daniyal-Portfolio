import { lazy, StrictMode, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { MyProvider } from "./MyContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import "./index.css";
import "./i18n.js";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
// import About from "./components/routes/About.jsx";
// const lazyWithDelay = (importFunc, delay = 2000) => {
//   return lazy(() =>
//     Promise.all([
//       importFunc(),
//       new Promise((resolve) => setTimeout(resolve, delay)),
//     ]).then(([moduleExports]) => moduleExports)
//   );
// };

// const App = lazyWithDelay(() => import("./App.jsx"), 2000);
const About = lazy(() => import("./components/routes/About.jsx"));
const Tools = lazy(() => import("./components/routes/Tools.jsx"));
const Projects = lazy(() => import("./components/routes/Projects.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (

        <App />

    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          // <Suspense fallback={<h1>loading...</h1>}>
            <About />
          // </Suspense>
        ),
      },
      {
        path: "/Tools",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Tools />
          </Suspense>
        ),
      },
      {
        path: "/Projects",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Projects />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </StrictMode>
);
