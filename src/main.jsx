import { lazy, StrictMode, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
// import About from "./components/routes/About.jsx";
import "./i18n.js";
import { MyProvider } from "./MyContext.jsx";
import Loader from "./components/Loader.jsx";
const About = lazy(() => import("./components/routes/About.jsx"));
const Tools = lazy(() => import("./components/routes/Tools.jsx"));
const Projects = lazy(() => import("./components/routes/Projects.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
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
