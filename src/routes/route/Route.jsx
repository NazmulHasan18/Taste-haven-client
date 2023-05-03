import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home/Home";
import ChefDetails from "../../pages/chefDetails/ChefDetails/ChefDetails";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Register from "../../pages/Register/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://taste-haven-server-nazmulhasan18.vercel.app/chefs"),
         },
         {
            path: "/details/:id",
            element: <ChefDetails></ChefDetails>,
            loader: ({ params }) =>
               fetch(`https://taste-haven-server-nazmulhasan18.vercel.app/chefs/${params.id}`),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
      ],
   },
]);

export default router;
