import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
//import LoadingPage from "./components/LoadingPage";
import Auth from "./hoc/Auth";
//import Dashboard from "./pages/dashboard";
//import ApiCalls from "./boudaries/ApiCalls";

const Login = lazy(() => import("./user/Login"));

const Router = createBrowserRouter([
  {
    path: "/user/login",
    element: (
      <Suspense fallback="Caricamento...">
        <Login />
      </Suspense>
    )
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <Suspense fallback="Caricamento...">Dashboard</Suspense>
      }
    ]
  }
]);

export default Router;
